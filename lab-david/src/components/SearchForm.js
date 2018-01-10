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
    this.getTopicsFromReddit = this.getTopicsFromReddit.bind(this);
  }

  handleTopicTextBox(event) {
    this.setState({searchInputName:event.target.value});
  }

  handleNumbersTextBox(event) {
    this.setState({SearchResultsNumberLimit:event.target.value});
  }


  getTopicsFromReddit(searchInputName, SearchResultsNumberLimit) {
    this.props.submitSearch(this.state.topic, this.state.limit);
    }
  // )
  

  render() {
    return (
      <div>
      <form>
          <input type="text" value={this.state.searchInputName} placeholder="Type subreddit board name here" onChange={this.handleTopicTextBox}/>
          <input type="number" min="0" max="99" value={this.state.SearchResultsNumberLimit} placeholder="Insert number of results desired" onChange={this.handleNumbersTextBox}/>
          <button onSubmit={this.getTopicsFromReddit}>Search</button>
        </form>
      </div>
    )
  }
}

module.exports = SearchForm;