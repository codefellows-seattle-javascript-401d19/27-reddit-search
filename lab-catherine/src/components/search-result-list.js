'use strict';

import React from 'react'

class SearchResultList extends React.Component {
  subRedditList() {
    if(!this.props.hasSearched) {
      return <div></div>
    } else if (this.props.loading) {
      return <p>Loading...</p>
    } else if (this.props.results.length === 0) {
      return <p>No results.</p>
    } else {
      return this.props.topics.map((result, index) => {
        return (
          <div key={index}>
            <a href={result.data.url}>{result.data.title}</a>
        </div>
        )
      });
    }
  }

  render() {
    return (
      <div>
        <h1>List of Top 10 Topics:</h1>
        {this.subRedditList()}
      </div>
    )
  }
}

module.exports = SearchResultList