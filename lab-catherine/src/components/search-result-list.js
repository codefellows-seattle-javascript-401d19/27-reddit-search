'use strict';

import React from 'react';

class SearchResultList extends React.Component {
  subRedditList() {
    return this.props.topics.map((result, index) => {
      return (
        <div className="sub-reddit" key={index}>
          <a target="blank" href={result.data.url}>{result.data.title}<p>Up votes: {result.data.ups}</p></a>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>List of Reddit Topics:</h1>
        {this.subRedditList()}
      </div>
    );
  }
}

module.exports = SearchResultList;