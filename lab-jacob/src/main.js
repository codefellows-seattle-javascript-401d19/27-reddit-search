'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.scss';
import searchForm from './component/search-form';
import searchResultList from './component/search-result-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],

    };
  }

  
 
  render(){
    return(
      <div>
      <searchForm submitSearch={this.search} /> 
      <searchResultList
       results = {this.state.results} /> 
      </div>
    )
  }
  
}

