'use strict';

import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: ''
    }
    this.handleFilter = this.handleFilter.bind(this);
    this.search = this.search.bind(this)
  }



  render(){
    return (
      <form>
        <div>
          <input type="text" value={this.state.filter} size="80" onChange={this.handleFilter} placeholder="type subreddit here"/>
          <button onClick={this.search}>Search</button>
        </div>
      </form>
    )
  }
}


module.exports = SearchForm;
