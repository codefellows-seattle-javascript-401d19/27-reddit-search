'use strict';

import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form';
import ResultList from './components/result-list'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      hasSearched: false,
      loading: false
    }

    this.search = this.search.bind(this);
  }

  search(filter='') {
    this.setState({loading:true, hasSearched: true})
  setTimeout(() => {
    let newResults = [
    {language: 'python', rating: 8},
    {language: 'java', rating: 6},
    {language: 'javascript', rating: 9},
    {language: 'php', rating: 2},
  ].filter(result => {
    return result.language.includes(filter)
  })
      this.setState({results: newResults, loading: false)
    }, 1000)
  }

  render() {
    return (
      <div>
      <SearchForm submitSearch={this.search}/>
      <ResultList
        results={this.state.results}
        hasSearched = {this.state.hasSearched}
        loading={this.state.loading}
      />
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('content'))

console.log('hey');
