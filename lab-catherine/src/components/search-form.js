'use strict';

import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      limit: '',
    };
    this.handleTopic = this.handleTopic.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
    this.search = this.search.bind(this);
  }

  handleTopic(event) {
    this.setState({topic: event.target.value});
  }

  handleLimit(event) {  
    this.setState({limit: event.target.value});
  }

  search() {
    this.props.submitSearch(this.state.topic, this.state.limit);
  }

  render () {
    return (
      <div>
        <label>Topic:</label>
        <input type="text" value={this.state.topic} onChange={this.handleTopic}/>  
        &nbsp;
        <label>Limit:</label>
        <input type="text" value={this.state.limit} onChange={this.handleLimit}/>      
        &nbsp;
        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}

module.exports = SearchForm;