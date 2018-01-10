'use strict';

import React from 'react';

class ResultsList extends React.Component {
  buildResults() {
    if(this.props.topics.length === 0)
      return this.props.firstSearch ? 'Find some results!' : 'No results found. Try again.';
    
    return this.props.topics.map((topic, index) => {
      return (
        <li key={index}>
          Title: {topic.title}
        </li>
      )
    })
  }


  render() {
    return (
      <div>
        {this.buildResults()}
      </div>
    )
  }
}

module.exports = ResultsList;