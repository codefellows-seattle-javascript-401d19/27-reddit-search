import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBoardForm: '',
      searchFormLimit: undefined,
      searchError: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTopic = this.handleTopic.bind(this);
    this.handleLimit = this.handleLimit.bind(this);

  }

  handleTopic(event) {
    this.setState({ searchBoardForm: event.target.value });
  }
  handleLimit(event) {
    this.setState({ searchFormLimit: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('searchboardform: ' + this.state.searchBoardForm);
    console.log('searchformlimit: ' + this.state.searchFormLimit);
    superagent.get(`http://www.reddit.com/r/${this.state.searchBoardForm}.json?limit=${this.state.searchFormLimit}`)
      .then(results => {
        console.log(results);
        this.setState({ searchError: false });
        this.props.updateTopics(results.body.data.children);
      })
      .catch(error => {
        this.props.updateTopics([]);
        this.setState({ searchError: true });
        console.log(error);
      });
  }

  render() {
    return <form className={this.state.searchError === true ? 'error' : 'normal'} onSubmit={this.handleSubmit}>
      <input type="text" name="topic" value={this.state.topic} onChange={this.handleTopic} placeholder="search term here" />
      <input type="number" name="limit" value={this.state.limit} onChange={this.handleLimit} placeholder="how many items" min='0' max='100' />
      <button type="submit">Search</button>
      <p className={this.state.searchError === true ? 'show' : 'no-show'}> Search topic not found</p>
    </form>;
  }

}

module.exports = SearchForm;