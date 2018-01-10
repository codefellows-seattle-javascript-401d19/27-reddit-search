import React from 'react';

class SearchResultList extends React.Component {
  subRedditList() {
    if(!this.props.hasSearched) {
      return <div></div>;
    } else if (this.props.results.length === 0) {
      return <p>No results.</p>;
    } else {
      return this.props.results.map((result, index) => {
        return (
          <div className="sub-reddit" key={index}>
            <li> <a target="blank" href={result.data.url}>{result.data.title} <p>Up votes: {result.data.ups}</p></a></li>
          </div>
        );
      });
    }
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