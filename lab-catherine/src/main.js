import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form';
import SearchResultList from './components/search-result-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };

    this.setResults = this.setResults.bind(this);
  }


  setResults(topics) {
    this.setState({topics: topics});
  }

  render() {
    return <div>
      <h1>Search Reddit!</h1>
      <SearchForm topics={this.state.topics} setResults={this.setResults}/>
      <SearchResultList
        topics={this.state.topics}
      />
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));