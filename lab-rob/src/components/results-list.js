'use strict';

import React from 'react';

class ResultsList extends React.Component {
  buildResults() {
    if(this.props.firstSearch)
      return 'Find some results!';
    else if(this.props.status === 'loading')
      return 'Loading...';
    else if (this.props.status === 'error')
      return 'Error - Try again.'
    
    return this.props.topics.map((topic, index) => {
      return (
        <li key={index}>
          <h2 className="resultNumber">{index + 1}</h2>
          <div className="thumbnail">
            <a href={topic.url}><img src={['self', 'default'].includes(topic.thumbnail) ? 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' : topic.thumbnail} /></a>
          </div>
          <div className="info">
            <a href={topic.url}><h2 className="title">{topic.title}</h2></a>
            <p>Author: {topic.author}</p>
            <p>Comments: {topic.num_comments} Upvotes: {topic.ups}</p>
          </div>
        </li>
      )
    })
  }


  render() {
    return (
      <div>
        {this.buildResults()}
      </div>
    )
  }
}

module.exports = ResultsList;