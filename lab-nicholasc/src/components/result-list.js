'use strict';

import React from 'react';

class ResultList extends React.Component { //TODO: delete constructor and factor in for props
  languageList() {
    if(!this.props.hasSearched) {
      return <div></div>
    }else if(this.props.loading) {
      return <p>Loading...</p>
    }else if(this.props.topics.length === 0) {
      return <p>No Results Found.</p>
    }else {
      return this.props.topics.map((result, index) => {
        return <div className="result-map" key={index}>
        <img src={result.data.thumbnail}></img>
        <a href={result.data.url}><h3>{result.data.title}</h3></a>
        <p>Score: {result.data.score}</p></div>
    });
  }
}

  render(){
    return (
      <div>
      {this.languageList()}
      </div>
    )
  }
}


module.exports = ResultList;
