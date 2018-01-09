import React from 'react';

class searchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {filter: ''};
    this.filterInput = this.filterInput.bind(this);
    this.runSearch = this.runSearch.bind(this);
  }

  filterInput(event) {
    this.setState({filter: event.target.value});
  }

  runSearch() {
    this.setState();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.filter} onChange={this.filterInput} />
        <button onClick={this.runSearch}>Search</button>
      </div>
    );
  }
}

module.exports = searchForm;
