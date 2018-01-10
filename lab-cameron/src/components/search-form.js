import React from 'react'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subreddit: 'programming',
      limit: 20,
    }

    this.search = this.search.bind(this)
    this.handleLimitInput = this.handleLimitInput.bind(this)
    this.handleSubredditInput = this.handleSubredditInput.bind(this)
  }

  search(event) {
    event.preventDefault()
    
    this.props.submitSearch(this.state.subreddit, this.state.limit)
  }

  handleSubredditInput(event) {
    this.setState({ subreddit: event.target.value })
  }

  handleLimitInput(event) {
    this.setState({ limit: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search}>
          <input
            type="text"
            placeholder="subreddit"
            value={this.state.subreddit}
            onChange={this.handleSubredditInput}
          />

          <br />

          <input
            type="text"
            placeholder="# of results"
            value={this.state.limit}
            onChange={this.handleLimitInput}
          />

          <br />

          <input type="submit" />
        </form>
      </div>
    )
  }
}

module.exports = SearchForm
