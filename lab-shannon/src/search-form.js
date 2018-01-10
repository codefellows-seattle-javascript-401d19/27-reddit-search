import React from 'react';

class SearchForm extends React.Component {
  constructor(props){     // the props passed in is the submitSearch function
    super(props);

    this.state = {filter: '', resultLimit:'1'};

    this.filterInput = this.filterInput.bind(this);
    this.runSearch = this.runSearch.bind(this);
    this.chooseNumber = this.chooseNumber.bind(this);
  }

  filterInput(event) {
    this.setState({filter: event.target.value});
  }

  runSearch() {
    const url = `http://www.reddit.com/r/${this.state.filter}.json?limit=${this.state.resultLimit}`;
    fetch(url)
      .then(response => {
        if (response.status == 200){
          let resultJson = response.json();
          this.setState(this.props.submitSearch(resultJson));
        } else {
          return (
            <div className='error'></div>
          );
        }
      });
  }

  chooseNumber(event) {
    this.setState({resultLimit: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.filter} onChange={this.filterInput} placeholder="topic"/>
        <input type="number" min="1" max="100" step="1" value={this.state.resultLimit} onChange={this.chooseNumber} placeholder="limit results to --" />
        <button onClick={this.runSearch}>Search</button>
      </div>
    );
  }
}

module.exports = SearchForm;
