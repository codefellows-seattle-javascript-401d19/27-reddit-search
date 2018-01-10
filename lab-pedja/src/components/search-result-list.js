import React from 'react'

class ResultList extends React.Component {
  constructor(props){
    super(props)

    this.postList = this.postList.bind(this);
  }

  postList() {
    if (!this.props.hasSearched) {  
      return <div></div>      
    } else if (this.props.loading) {      
      return <p>Loading...</p>
    } else if (this.props.noResults) {
      return <p>No results.</p>
    } else {
      return this.props.topics.map((topic, index)=> {
        return (
          <ul key={index}>
            <li>
              <a href={topic.data.url}>
                <h1>
                  {topic.data.title}
                  <p>{topic.data.ups}</p>
                </h1>
              </a>
            </li>
          </ul>
        )
      });
    }
  }

  render() {
    return (
      <div>
        <h1>List of Topics</h1>
        {this.postList()}
      </div>
    )
  }
}

module.exports = ResultList;