import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'programming',
      limit: 10,
      error: false,
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleLimitInput = this.handleLimitInput.bind(this);
  }

  handleSearchInput(event) {
    this.setState({
      search: event.target.value,
    });
  }

  handleLimitInput(event) {
    let limit = event.target.value;
    if(limit > 100)
      limit = 100;

    this.setState({
      limit: limit,
    });
  }

  searchReddit(event) {
    event.preventDefault();
    this.props.searchReddit(this.state.search, this.state.limit);
  }

  render() {
    let errorStyle = {
      border: '1px solid #FF0000',
    };

    let defaultStyle = {
      border: '1px solid #000',
    };

    return(
      <div className="form">
        <form onSubmit={this.searchReddit.bind(this)}>
          <input style={this.props.handleError === true ? errorStyle : defaultStyle} type="text" value={this.state.search} onChange={this.handleSearchInput} />
          <input style={this.props.handleError === true ? errorStyle : defaultStyle} type="number" value={this.state.limit} onChange={this.handleLimitInput} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

module.exports = SearchForm;
