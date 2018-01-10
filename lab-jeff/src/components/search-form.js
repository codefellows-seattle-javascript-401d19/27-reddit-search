import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchBoardForm: '',
      searchFormLimit: 100,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTopic = this.handleTopic.bind(this);
    this.handleLimit = this.handleLimit.bind(this);

  }

  handleTopic(event){
    this.setState({searchBoardForm: event.target.value})
  }
  handleLimit(event){
    this.setState({searchFormLimit: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
    console.log('clicked');
    console.log('searchboardform: ' + this.state.searchBoardForm);
    console.log('searchformlimit: ' + this.state.searchFormLimit);
    superagent.get(`http://www.reddit.com/r/${this.state.searchBoardForm}.json?limit=${this.state.searchFormLimit}`)
    .then(results => {
      console.log(results);
      this.props.updateTopics(results.body.data.children);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
        <input type="text" name="topic" value={this.state.topic} onChange={this.handleTopic} placeholder="search term here"/>
        <input type="number" name="limit" value={this.state.limit} onChange={this.handleLimit} placeholder="how many items" />
        <button type="submit">Search</button>
      </form>
  }

}

module.exports = SearchForm;