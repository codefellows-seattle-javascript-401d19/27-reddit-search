import React from 'react';

class SearchResultList extends React.Component {
  

  topicsList(){
    if (!this.props.hasSearched){
      return <div></div>;
    } else if (this.props.loading) {
      return <p>Loading...</p>;
    } else if (this.props.results.length === 0) {
      return <p> No results found. </p>;
    } else {
      return this.props.results.map((results, index) => {
        return <div key={index}>
          <li>Subreddit Title : {results.data.title} </li>
          <a href={results.data.url}>URL</a>
          <p>Up votes : {results.data.ups} </p>
        </div>;
      });
    }

  }


  render() {
    return (
      <div>
        <h2>List of Results</h2>
        <ul>
          {this.topicsList()}
        </ul>
      </div>
    );
  }
}

module.exports = SearchResultList;