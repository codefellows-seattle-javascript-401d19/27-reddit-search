'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.scss';
import Form from './component/search-form';
import SearchResults from './component/search-result-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.search = this.search.bind(this)
  }
search(){
  async function searchReddit(subreddit, limit){
  let response = await fetch(`http://www.reddit.com/r/${subreddit}.json?limit=${limit}`)

  if (response.status !== 200)
    throw new TypeError('Bad Request')

  let data = await response.json();

  
  return this.setState({results : data});
  }
}
 
  render(){
    return(
      <div>
      <h1>SUB-REDDIT</h1>
      <Form submitSearch={this.search} /> 
      <SearchResults
       results = {this.state.results} /> 
      </div>
    )
  }
  
}

ReactDOM.render(<App/>, document.getElementById('root'))
