import React from 'react';

class SearchResultList extends React.Component {
  showResults() {
    console.log(this);
    if(!this.props.hasSearched) {
      console.log('HIT 1111');
      return <div></div>
    }else if(this.props.loading) {
      console.log('HIT 222');
      return <p>Loading Stuffs...</p>
    }else if(this.props.results.length === 0) {
      console.log('HIT 333');
      return <p>No Results</p>
    console.log('url test', this.props)
    } else {
      return this.props.results.map((result, index) => {
        return (
          <li key={index}>
            <a href={result.url}>
              <h3>{result.title}</h3>
              <p>Topic Number: {result.ups}</p>
            </a>
          </li>
        )
      });
    }
  }

  render(){
    return (
      <div>
        {this.showResults()}
      </div>
    )
  }
}


module.exports = SearchResultList;