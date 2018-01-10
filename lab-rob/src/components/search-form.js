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
    if(event.target.value > 0 && event.target.value < 100)
      this.setState({numResults: event.target.value});
  }

  handleSubreddit(event) {
    this.setState({subreddit: event.target.value});
  }

  getResults(e) {
    e.preventDefault();
    this.props.context.setState({
      status: 'loading',
      firstSearch: false,
    });

    return fetch(`http://www.reddit.com/r/${this.state.subreddit}.json?limit=${this.state.numResults}`)
      .then(response => response.json())
      .then(response => {
        let trueResults = response.data.children
          .filter(result => !result.data.stickied)
          .map(result => result.data);

        this.props.context.setState({topics: trueResults});
        this.props.context.setState({status: 'success'})
      })
      .catch(error => {
        console.log(error.message);
        this.props.context.setState({status: 'error'})
      });
  }

  render() {
    return (
      <form onSubmit={this.getResults}>
        <button type="submit">Find</button>
        <span> the top </span>
        <input type="number" required="required" value={this.state.numResults}  placeholder="#" min="1" max="99" onChange={this.handleNumResults}  />
        <span> results from the subreddit r/ </span>
        <input className={this.props.context.state.status} type="text" required="required" value={this.state.subreddit} placeholder="subreddit" onChange={this.handleSubreddit} />
      </form>
    )
  }
}

module.exports = searchForm;