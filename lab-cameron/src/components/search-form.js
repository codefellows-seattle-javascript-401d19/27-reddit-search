import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: '',
      limit: '',
    };

    this.search = this.search.bind(this);
    this.handleLimitInput = this.handleLimitInput.bind(this);
    this.handleSubredditInput = this.handleSubredditInput.bind(this);
  }

  search(event) {
    event.preventDefault();
    if (this.state.subreddit === '') {
      alert('Please provide a subreddit');
    } else if (this.state.limit === '') {
      alert('Please provide a limit');
    } else {
      this.props.submitSearch(this.state.subreddit, this.state.limit);
    }

  }

  handleSubredditInput(event) {
    this.setState({ subreddit: event.target.value });
  }

  handleLimitInput(event) {
    this.setState({ limit: event.target.value });
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
    );
  }
}

export default SearchForm;
