import React from 'react';

class searchForm extends React.Component {
  constructor(props){
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
    this.setState();
  }

  chooseNumber() {
    this.setState();
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

module.exports = searchForm;
