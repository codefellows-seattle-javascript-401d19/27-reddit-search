import React from 'react';

const SearchForm = ({ hasSearched, loading, noResults, topics }) => {
  const topicList = () => {
    if (!hasSearched) {
      return <div></div>;
    } else if (loading) {
      return <p className='topics'>Loading...</p>;
    } else if (noResults) {
      return <p className='topics'>No results</p>;
    } else {
      return topics.map((topic, index) => {
        return <div className='topics' key={index}>
          <a href={topic.data.url}>
            <div>
              <h2>Title:</h2><h3>{topic.data.title}</h3>
              <br />
              <h2>Upvotes:</h2><h3>{topic.data.ups}</h3>
            </div>
          </a>
        </div>;
      });
    }
  };

  return (
    <div id='topic-list'>
      {topicList()}
    </div>
  );
};

export default SearchForm;
