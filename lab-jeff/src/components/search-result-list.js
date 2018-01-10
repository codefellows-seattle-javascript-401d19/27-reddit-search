import React from 'react';

class SearchResultList extends React.Component {
  displayTopics(){
    return this.props.topics.map( (topic, index) => {
      return <li className="topics" key={index}>
        <a href={topic.data.url}>{topic.data.title} </a>
      </li>;
    });
  }
  
  
  render(){
    return (
      <ul>
        {this.displayTopics()}
      </ul>
    );
  }
}

module.exports = SearchResultList;