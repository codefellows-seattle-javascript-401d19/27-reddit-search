'use strict';

import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subreddit: ''
    }
    this.handleSubreddit = this.handleSubreddit.bind(this);
    this.search = this.search.bind(this)
  }

  handleSubreddit(event) {
    this.setState({subreddit: event.target.value})
  }

  search() {
    this.props.submitSearch(this.state.subreddit)
  }

  render(){
    return (
        <div>
          <input type="text" value={this.state.subreddit} size="40" onChange={this.handleSubreddit} placeholder="type subreddit here"/>
          <button onClick={this.search}>Search</button>
        </div>
    )
  }
}


module.exports = SearchForm;
