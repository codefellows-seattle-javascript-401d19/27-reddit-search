'use strict';

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
      errorExists: false,
    };

    this.search = this.search.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  search(topic, limit) {
    this.setState({loading: true, hasSearched: true, errorExists: false});
    superagent.get(`https://www.reddit.com/r/${topic}.json?limit=${limit}`)
      .then(response => {
        if(response.status !== 200)
          throw new Error('error');
        
        this.setState({
          topics: response.body.data.children,
          error: null,
        });
      })
      .catch(() => {
        return this.setState({
          errorExists: true,
          loading: false,
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
        <SearchForm submitSearch={this.search} errorExists={this.state.errorExists}/>
        <SearchResultList
          results={this.state.topics}
          hasSearched={this.state.hasSearched}
          loading={this.state.loading} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));