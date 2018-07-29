import React from 'react';
import superagent from 'superagent';

export default class SearchForm extends React.Component {
  state = {
    topic: '',
    limit: '',
    errorExists: false,
  };

  handleTopic = ({ target: { value } }) => this.setState({ topic: value });

  handleLimit = ({target: {value}}) => this.setState({limit: value});
  
  handleSubmit = (event) => {
    const {
      state: {topic, limit},
    } = this;
    event.preventDefault();
    superagent.get(`http://www.reddit.com/r/${topic}.json?limit=${limit}`)
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
    const {
      handleSubmit,
      handleTopic,
      handleLimit,
      state: {errorExists, topic, limit},
    } = this;
    return (
    <form onSubmit={handleSubmit}>
      <label>Topic:</label>
      <input className={errorExists ? 'error' : 'normal'} type="text" name='topic' placeholder='enter subreddit' value={topic} onChange={handleTopic}/>  
        &nbsp;

      <label>Limit:</label>
      <input type="number" name='limit' placeholder='#' min='0' max='100' value={limit} onChange={handleLimit}/>      
        &nbsp;

      <button type='submit'>Search</button>
    </form>
    );
  }
}