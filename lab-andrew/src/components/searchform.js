'use strict';

import React from 'react';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topic: '',
      number: '',
      hasError: false,
    };

    this.handleTopic = this.handleTopic.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.search = this.search.bind(this);
  }

  handleTopic(event){
    this.setState({topic: event.target.value});
  }

  handleNumber(event){
    this.setState({number: event.target.value});
  }

  search(topic, filter){
    this.setState({hasError: false});
    this.props.setParentState(true);
    fetch(`https://www.reddit.com/r/${topic}.json?limit=${filter}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })
      .then(obj => this.props.setResults(obj.data.children))
      .catch(() => {
        this.setState({hasError: true});
        return this.props.setParentState(false);
      });
  }

  render(){
    return <div id="form">
      <label htmlFor="subredditname">Subreddit Name</label>
      <input 
        className={this.state.hasError ? 'error' : ''}
        id="subredditname" 
        type="text" 
        value={this.state.topic} 
        onChange={this.handleTopic}
      />
      <br/>
      <label htmlFor="resultamount">Number of Results</label>
      <input 
        id="resultamount" 
        type="number" 
        min="1" 
        max="100" 
        value={this.state.number} 
        onChange={this.handleNumber}
      />
      <br/>
      <button 
        onClick={() => this.search(this.state.topic, this.state.number)}>
        Search
      </button>
    </div>; 
  }
}

export default SearchForm;