import React from 'react';

class SearchResultList extends React.Component {
  resultList() {
    if (!this.props.hasSearched) {
      return <div></div>;
    } else if (this.props.loading) {
      return <p>Loading...</p>;
    } else if (this.props.results.length === 0) {
      return <p>No results.</p>;
    } else {
      return this.props.results.map((result, index) => {
        return <li className="result-list-item" key={index}>
          <a href={result.data.url}>
            <h1>{result.data.title}</h1>
            <p>{result.data.ups}</p>
          </a>
        </li>;
      });
    }
  }

  render() {
    return (
      <ul>
        {this.resultList()}
      </ul>
    );
  }
}

export default SearchResultList;