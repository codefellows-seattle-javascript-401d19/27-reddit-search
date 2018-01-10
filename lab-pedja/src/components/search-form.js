import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subreddit: '',
      limit: ''
    }
    this.search = this.search.bind(this)
    this.handleSubreddit = this.handleSubreddit.bind(this)
    this.handleLimit = this.handleLimit.bind(this)
  }

  handleSubreddit(event) {
    this.setState({subreddit: event.target.value})
  }

  handleLimit(event) {
    this.setState({limit: event.target.value})
  }

  search() {      
    this.props.submitSearch(this.state.subreddit, this.state.limit)
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="subreddit search"
          value={this.state.subreddit} 
          onChange={this.handleSubreddit} 
        />
        <input 
          type="text" 
          placeholder="limit results"
          value={this.state.limit} 
          onChange={this.handleLimit} 
        />
        <button onClick={this.search}>Search</button>
      </div>
    )
  }

}

module.exports = SearchForm