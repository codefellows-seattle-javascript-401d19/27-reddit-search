import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {subReddit: '', limit: 10};
    this.handleMaxResults = this.handleResults.bind(this);
    this.search = this.search.bind(this);
}

  handleResults(event) {
    this.setState({subReddit: event.target.value, limit: event.target.value});
  }

  search() {
    this.props.submitSearch(this.state.subReddit);
  }

  render() {
    return (
      <div>
        <input type="number" value={this.state.limit} onChange={this.handleResults} />
        <input type="text" value={this.state.subReddit} onChange={this.handleResults} />
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}

module.exports = SearchForm;