import React from 'react';

const SearchForm = ({ hasSearched, loading, topics }) => {
  const topicList = () => {
    if (!hasSearched) {
      return <div></div>;
    } else if (loading) {
      return <p>Loading...</p>;
    } else if (topics.length === 0) {
      return <p>No results</p>;
    } else {
      return topics.map((topic, index) => {
        return <div className='topics' key={index}>
          <a href={topic.data.url}>
            <h2>Title:</h2><h3>{topic.data.title}</h3>
            <br />
            <h2>Upvotes:</h2><h3>{topic.data.ups}</h3>
          </a>
        </div>;
      });
    }
  };

  return (
    <div id='topic-list'>{topicList()}</div>
  );
};


export default SearchForm;
