import React from 'react';

class SearchResultList extends React.Component {
  subRedditList() {
    if(!this.props.hasSearched) {
      return <div></div>
    }else if(this.props.loading) {
      return <p>Loading Stuffs...</p>
    }else if(this.props.results.length === 0) {
      return <p>No Results</p>
    }else{
      return this.props.results.map((results, index) => {
        return <li key={index}>{results.subReddit}</li>
      });
    }
  }

  render(){
    return (
      <div>
        {this.subRedditList()}
      </div>
    )
  }
}


module.exports = SearchResultList;