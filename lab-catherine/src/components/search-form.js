import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      limit: '',
      errorExists: false,
    };
    this.handleTopic = this.handleTopic.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTopic(event) {
    this.setState({topic: event.target.value});
  }

  handleLimit(event) {  
    this.setState({limit: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    superagent.get(`http://www.reddit.com/r/${this.state.topic}.json?limit=${this.state.limit}`)
      .then(response => {
        this.setState({errorExists: false});
        this.props.setResults(response.body.data.children);
      })
      .catch(error => {
        this.props.setResults([]);
        this.setState({errorExists: true});
      });
  }

  render () {
    return <form onSubmit={this.handleSubmit}>
      <label>Topic:</label>
      <input className={this.state.errorExists ? 'error' : 'normal'} type="text" name='topic' placeholder='enter subreddit' value={this.state.topic} onChange={this.handleTopic}/>  
        &nbsp;

      <label>Limit:</label>
      <input type="number" name='limit' placeholder='#' min='0' max='100' value={this.state.limit} onChange={this.handleLimit}/>      
        &nbsp;

      <button type='submit'>Search</button>
    </form>;
  }
}

module.exports = SearchForm;