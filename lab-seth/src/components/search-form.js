import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {subReddit: 'doge', limit: 10};
    this.handleResults = this.handleResults.bind(this);
    this.search = this.search.bind(this);
}

  handleResults(event){
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }


  search(event) {
    event.preventDefault();

    return fetch(`http://www.reddit.com/r/${this.state.subReddit}.json?limit=${this.state.limit - 1}`)
      .then(response => response.json())
      .then(response => {
        console.log('response:', response);
        let results = (response.data.children)
          .map(result => result.data);

        this.props.app.setState({results : results, hasSearched : true})
        console.log('results from form', results)
      })
      .catch(err => console.log(err.message));

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