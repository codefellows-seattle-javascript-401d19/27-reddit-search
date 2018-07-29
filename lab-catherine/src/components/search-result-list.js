'use strict';

import React, {Component, Fragment} from 'react';

export default class SearchResultList extends Component {
  subRedditList = () => this.props.topics.map((result, index) => (
    <div className="sub-reddit" key={index}>
      <a target="blank" href={result.data.url}>{result.data.title}<p>Up votes: {result.data.ups}</p></a>
    </div>
  ))

  render() {
    return (
      <Fragment>
        <h1>List of Reddit Topics:</h1>
        {this.subRedditList()}
      </Fragment>
    );
  }
}
