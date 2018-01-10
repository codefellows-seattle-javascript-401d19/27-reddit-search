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
  }

  search(){
    console.log('====================================');
    console.log('search function');
    console.log('====================================');
  }

 
  render(){
    return(
      <div>
      <h1>REDDIT</h1>
      <Form submitSearch={this.search} /> 
      <SearchResults
       results = {this.state.results} /> 
      </div>
    )
  }
  
}

ReactDOM.render(<App/>, document.getElementById('root'))
