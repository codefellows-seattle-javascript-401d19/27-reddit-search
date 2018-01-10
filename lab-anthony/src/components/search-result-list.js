import React from 'react';

class ResultList extends React.Component {
  constructor(props) {
    super(props);
    this.renderResultList = this.renderResultList.bind(this);
  }

  renderResultList() {
    return (
      <div>
        <ul>
          {this.props.results.map((result, index) => {
            return (
              <li key={index}>
                <a href={result.data.url}>
                  <h1>
                    {result.data.title}
                  </h1>
                  <p>{result.data.ups}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );


  }

  render() {
    return (
      <div>
        {this.renderResultList()}
      </div>
    );
  }
}

module.exports = ResultList;
