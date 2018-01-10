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
    if (event.target.value < 0) event.target.value = 0;
    if (event.target.value > 100) event.target.value = 100;
    this.setState({limit: event.target.value})
  }

  search(e) {   
    e.preventDefault()   
    this.props.submitSearch(this.state.subreddit, this.state.limit)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search}>
          <input 
            type="text" 
            placeholder="subreddit search"
            value={this.state.subreddit} 
            onChange={this.handleSubreddit} 
          />
          <input 
            type="number" 
            placeholder="limit results"
            value={this.state.limit} 
            onChange={this.handleLimit} 
          />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

module.exports = SearchForm;