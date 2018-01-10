import React from 'react';

const REDDIT_URL = 'http://www.reddit.com/r/';
const URL_EXTENSION = '.json?limit=';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      term: 'doge', 
      limit: 25,
    };

    this.searchTerm = this.searchTerm.bind(this);
    this.limitEr = this.limitEr.bind(this);
    this.fetchReddit = this.fetchReddit.bind(this);
  }

  fetchReddit(term, limit) {
    fetch(REDDIT_URL + term + URL_EXTENSION + limit)
      .then(parseRedditJson)
      .then(response => {
        this.props.app.setState({redditResponse: response});
      })
      .catch(error => {
        this.props.app.setState({redditResponse: error.message});
      });
  }

  searchTerm(event) {
    this.setState({term: event.target.value});
  }
  limitEr(event) {
    if (event.target.value > 100 || event.target.value < 0) {
      return;
    }
    this.setState({limit: event.target.value});
  }

  render() {
    return (
    <div>
      <p className='pre-text-box'>reddit.com/r/</p><input onChange={this.searchTerm} value={this.state.term} type='text' placeholder='Enter Search Here' />

      <p className='pre-text-box'>SearchLimit:</p><input onChange={this.limitEr}  value={this.state.limit} type='number' placeholder='Limit' max='100' min='0' />

      <button onClick={() => this.fetchReddit(this.state.term, this.state.limit)}>Search</button>
    </div>      
    )
  }
}

module.exports = SearchForm;

function parseRedditJson(response) {
  return response.json()
    .then(responsePlus => {
      return responsePlus.data.children
      .filter(result => !result.data.stickied)
      .map(result => result.data);
    });
}