'use strict';

import React from 'react'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: '',
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.search = this.search.bind(this);
  }

  handleFilter(event) {
    this.setState({topic: event.target.value})
  }

  search() {
    this.props.submitSearch(this.state.topic)
  }

  render () {
    return (
        <div>
          <input type="text" value={this.state.filter} onChange={this.handleFilter}/>
          <button onClick={this.search}>Search</button>
        </div>
    )
  }
}

module.exports = SearchForm;