import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form';
import SearchResultList from './components/search-result-list';
import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      hasSearched: false,
      loading: false,
    };

    this.search = this.search.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  search(topic, limit) {
    this.setState({loading: true, hasSearched: true});
    superagent.get(`https://www.reddit.com/r/${topic}.json?limit=${limit}`)
      .then(response => {
        console.log(response.body.data.children);
        this.setState({
          topics: response.body.data.children,
        });
      });
  }

  setResults(newResults) {
    this.setState({topics: newResults, loading: false});
  }

  render() {
    return (
      <div>
        <h1>Search Reddit!</h1>
        <SearchForm submitSearch={this.search}/>
        <SearchResultList
          results={this.state.topics}
          hasSearched={this.state.hasSearched}
          loading={this.state.loading} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));