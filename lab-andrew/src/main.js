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
    };

    this.setCurrentState = this.setCurrentState.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  setCurrentState(loading){
    this.setState({results: [], loading, hasSearched: true});
  }

  setResults(newResults){
    this.setState({results: newResults, loading: false});
  }

  render(){
    return (
      <div>
        <h1>Subreddit Search</h1>
        <SearchForm setResults={this.setResults} setParentState={this.setCurrentState}/>
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