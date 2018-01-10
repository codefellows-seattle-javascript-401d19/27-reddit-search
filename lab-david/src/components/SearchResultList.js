'use strict';

import React from 'react';

class SearchResultList extends React.Component {
  constructor(props) {
    super(props)
    
  }

  topicsList(){
    if (!this.props.hasSearched){
      return <div></div>
    } else if (this.props.loading) {
      return <p>Loading...</p>
    } else if (this.props.SearchResultsFromReddit.length === 0) {
      return <p> No results found. </p>
    } else {
      return this.state.SearchResultsFromReddit.map((SearchResultsFromReddit, index) => {
        return <div key={index}>
          <li>Subreddit Title : {SearchResultsFromReddit.topic}</li>
          <a href=''></a>
          <p>Subreddit Topics</p>
        </div>
      });
    }

  }


  render() {
    return (
      <div>
        <ul>
          {this.topicsList()}
        </ul>
      </div>
    )
  }
}

module.exports = SearchResultList;