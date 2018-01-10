import React from 'react';

class SearchResultList extends React.Component {
  constructor(props) {    // the props passed in are the topics array and hasSearched boolean
    super(props);
  }

  redditResults() {
    if (!this.props.hasSearched){
      return <div></div>;
    } else if (this.props.length < 1){
      return <p>No results</p>;
    } else {
      return this.props.topics.map((result, index) => {
        const urlBase = 'https://www.reddit.com';
        return <li key={index}><a href={`${urlBase}${result.data.permalink}`}>{result.data.title}</a></li>;
      });
    }
  }

  render() {
    return(
      <ul>
        {this.redditResults()}
      </ul>
    );
  }
}

module.exports = SearchResultList;
