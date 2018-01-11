import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit: '',
      limit: 20,
    };
    this.handleSubreddit = this.handleSubreddit.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
    this.search = this.search.bind(this);
  }

  handleSubreddit(event) {
    this.setState({subreddit: event.target.value});
  }

  handleLimit(event) {
    console.log(event.target.value);
    this.setState({limit: event.target.value});
  }

  search() {
    this.props.submitSearch(this.state.subreddit, this.state.limit);
  }

  render(){
    if(this.props.failedSearch){
      return(
        <div>
          <input className="error" type="text" value={this.state.subreddit} onChange={this.handleSubreddit} placeholder="Error Finding Subreddit"/>
          <input className="error" type="number" value={this.state.limit} onChange={this.handleLimit} placeholder="The page currently returns 20 results"/>
          <button className="error" onClick={this.search}>Try Again</button>
        </div>
      );

    }
    return (
      <div>
        <input type="text" value={this.state.subreddit} size="40" onChange={this.handleSubreddit} placeholder="type subreddit here"/>
        <input type="number" value={this.state.limit} onChange={this.handleLimit} placeholder="The page currently returns 20 results"/>
        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}


module.exports = SearchForm;
