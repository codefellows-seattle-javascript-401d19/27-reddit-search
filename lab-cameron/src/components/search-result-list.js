import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.topicList = this.topicList.bind(this);
  }

  topicList() {
    console.log('fffff');
    if (!this.props.hasSearched) {
      return <div></div>;
    } else if (this.props.loading) {
      return <p className='topics'>Loading...</p>;
    } else if (this.props.noResults) {
      return <p className='topics'>No results</p>;
    } else {
      return this.props.topics.map((topic, index) => {
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
  }

  render() {
    return (
      <div id='topic-list'>
        {this.topicList()}
      </div>
    );
  }
}

export default SearchForm;
