'use strict';

import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form';
import ResultList from './components/result-list';
import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      hasSearched: false,
      loading: false
    }

    this.search = this.search.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  search(subreddit='trees', limit = 20) {
    this.setState({loading:true, hasSearched: true})
  setTimeout(() => {
    return superagent.get(`https://www.reddit.com/r/${subreddit}.json?limit=${limit}`)
      .then(response => {
        console.log(response.body.data.children)
        return this.setResults(response.body.data.children)
      })

    }, 1750)
  }

  setResults(newResults){
    this.setState({topics: newResults, loading: false})
  }

  render() {
    return (
      <div>
      <SearchForm submitSearch={this.search}/>
      <ResultList
        topics={this.state.topics}
        hasSearched = {this.state.hasSearched}
        loading={this.state.loading}
      />
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('content'))
