'use strict';

import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInputName : '',
      SearchResultsNumberLimit: '',
    };

    this.handleTopicTextBox = this.handleTopicTextBox.bind(this);
    this.handleNumbersTextBox = this.handleNumbersTextBox.bind(this);

    // this.getTopicsFromReddit = this.getTopicsFromReddit.bind(this);
  }

  handleTopicTextBox(event) {
    this.setState({searchInputName:event.target.value});
  }

  handleNumbersTextBox(event) {
    this.setState({SearchResultsNumberLimit:event.target.value});
  }


  getTopicsFromReddit() {
    // go to webpage http://www.reddit.com/r/${searchInputName}.json?limit=${SearchResultsNumberLimit}
    // if server response is 200 then drop server.response into json file.
    // parse over json and find titles and pull them out. push into topics
  fetch(`http://www.reddit.com/r/${searchInputName}.json?limit=${SearchResultsNumberLimit}`)
    return 
    // .then(function(response) {
    // return response.something()
  }
  // )
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.searchInputName} placeholder="Insert subreddit board name here" onChange={this.handleTopicTextBox}/>
        <div>
          <input type="number" min="0" max="99" value={this.state.SearchResultsNumberLimit} placeholder="Insert number of results desired" onChange={this.handleNumbersTextBox}/>
        </div>
        <button onClick={this.getTopicsFromReddit}>Search</button>
      </div>
    )
  }
}

module.exports = SearchForm;