import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {subReddit: 'doge', limit: 10};
    this.handleResults = this.handleResults.bind(this);
    this.search = this.search.bind(this);
}

  handleResults(event) {
    this.setState({subReddit: event.target.value, limit: event.target.value});
  }

  // handleChange(event) {
  //   let { name, value } = event.target;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  search(event) {
    event.preventDefault();

    this.props.submitSearch(this.state.subReddit);
  }

  render() {
    return (
      <div>
        <input type='text' name='subReddit' placeholder='subReddit' value={this.state.subReddit} onChange={this.handleResults} placeholder='subReddit' />
        <input type='number' name='limit' value={this.state.limit} onChange={this.handleResults} min='1' max='100' placeholder='#' />
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}

module.exports = SearchForm;