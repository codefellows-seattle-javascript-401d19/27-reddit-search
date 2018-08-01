import './style/main.scss';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

import SearchForm from './components/search-form';
import SearchResultList from './components/search-result-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      topic: '',
      limit: '',
      errorExists: false,
    };
  }

  handleTopic = (event) => this.setState({ topic: event.target.value});

  handleLimit = (event) => this.setState({ limit: event.target.value });

  handleSubmit = (event) => {
    const {
      state: { topic, limit },
    } = this;
    event.preventDefault();
    superagent.get(`http://www.reddit.com/r/${topic}.json?limit=${limit}`)
      .then(response => {
        this.setState({ errorExists: false });
        this.setState({topics: response.body.data.children});
      })
      .catch(error => {
        this.setState({topics: []});
        this.setState({ errorExists: true });
      });
  }

  render() {
    console.log(this.state);
    const {
      handleTopic,
      handleLimit,
      handleSubmit,
      state: {topics, inputValue, limit, errorExists},
    } = this;

    return (
      <Fragment>
        <h1>Search Reddit!</h1>
        <SearchForm 
          handleTopic={handleTopic}
          handleLimit={handleLimit}
          handleSubmit={handleSubmit}
          errorExists={errorExists}
        />
        <SearchResultList topics={topics}/>
      </Fragment>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));