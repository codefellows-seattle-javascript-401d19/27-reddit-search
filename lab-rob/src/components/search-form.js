import React from 'react';

class searchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numResults: 25,
      subreddit: 'aww',
    }

    this.handleNumResults = this.handleNumResults.bind(this);
    this.handleSubreddit = this.handleSubreddit.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  handleNumResults(event) {
    if(event.target.value > -1 && event.target.value < 101)
      this.setState({numResults: event.target.value});
  }

  handleSubreddit(event) {
    this.setState({subreddit: event.target.value});
  }

  getResults() {    
    fetch(`http://www.reddit.com/r/${this.state.subreddit}.json?limit=${this.state.numResults}`)
      .then(response => response.json())
      .then(response => {
        let trueResults = response.data.children
          .filter(result => !result.data.stickied)
          .map(result => result.data);

        this.props.context.setState({
          topics: trueResults,
          firstSearch: false,
        });
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.getResults}>Find</button>
        <span> the top </span>
        <input type="number" value={this.state.numResults}  placeholder="#" min="0" max="100" onChange={this.handleNumResults}  />
        <span> results from the subreddit r/ </span>
        <input type="text" value={this.state.subreddit} placeholder="subreddit" onChange={this.handleSubreddit} />
      </div>
    )
  }
}

module.exports = searchForm;