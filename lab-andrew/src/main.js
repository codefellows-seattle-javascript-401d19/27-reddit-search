'use strict';

import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/searchform';
import SearchResultList from './components/searchresultlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      hasSearched: false,
      loading: false,
      hasError: false,
    };

    this.search = this.search.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  search(topic, filter){
    this.setState({hasSearched: true, loading: true, hasError: false, results: []});
    fetch(`https://www.reddit.com/r/${topic}.json?limit=${filter}`)
      .then(response => {
        if (response.status !== 200){
          throw new Error('err');
        }
        return response.json();
      })
      .then(obj => obj.data.children)
      .then(array => this.setResults(array))
      .catch(() => {
        return this.setState({hasError: true, loading:false});
      });
  }

  setResults(newResults){
    this.setState({results: newResults, loading: false});
  }

  render(){
    return (
      <div>
        <h1>Subreddit Search</h1>
        <SearchForm submitSearch={this.search} hasError={this.state.hasError}/>
        <SearchResultList 
          results={this.state.results}
          hasSearched={this.state.hasSearched}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));