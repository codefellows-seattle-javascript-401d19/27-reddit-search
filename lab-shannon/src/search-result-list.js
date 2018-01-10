import React from 'react';

class SearchResultList extends React.Component {
  constructor(props) {    // the props passed in are the topics array and hasSearched boolean
    super(props);
  }

  redditResults() {
    if(!this.props.hasSearched){
      return <div></div>;
    }else if(this.props.length < 1){
      return <p>No results</p>;
    }else{
      return this.props.topics.map((result, index) => {
        return <div key={index}><p>Title: result.topic</p><p>Link: result.url</p></div>;
      });
    }
  }

  render() {
    return(
      <div>
        {this.redditResults()}
      </div>
    );
  }
}

module.exports = SearchResultList;
