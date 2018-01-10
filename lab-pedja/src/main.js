'use strict';

import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form'
import ResultList from './components/search-result-list'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: [],
      hasSearched: false,
      loading: false
    }

    this.search = this.search.bind(this)
    this.setResults = this.setResults.bind(this)
  }

  search(subreddit=''){
    this.setState({loading: true, hasSearched: true})
      let newResults = [
          {language: 'python', rating: 8},
          {language: 'java', rating: 6},
          {language: 'javascript', rating: 9},
          {language: 'php', rating: 2},
      ].filter(result => {
        return result.language.includes(subreddit)
      })
      this.setResults(newResults)
  }

  setResults(newResults) {
    this.setState({results: newResults, loading: false})
  }

  render() {
    return (
      <div>
        <SearchForm submitSearch={this.search} />
        <ResultList
          results={this.state.results}
          hasSearched={this.state.hasSearched}
          loading={this.state.loading} 
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
