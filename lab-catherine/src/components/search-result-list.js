'use strict';

import React from 'react';

class SearchResultList extends React.Component {
  subRedditList() {
    if(!this.props.hasSearched) {
      return <div></div>;
    } else if (this.props.results.length === 0) {
      return <p>No results.</p>;
    } else {
      return this.props.results.map((result, index) => {
        console.log(this.props.results);
        console.log(result.data.url);
        return (
          <div key={index}>
            <li> <a href={result.data.url}>{result.data.title}</a></li>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h1>List of Top 10 Topics:</h1>
        {this.subRedditList()}
      </div>
    );
  }
}

module.exports = SearchResultList;