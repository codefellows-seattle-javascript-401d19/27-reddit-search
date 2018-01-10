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
          Title: {topic.data.title}
          <br />
          Ups: {topic.data.ups}
        </div>;
      });
    }
  };

  return (
    <div>{topicList()}</div>
  );
};


export default SearchForm;
