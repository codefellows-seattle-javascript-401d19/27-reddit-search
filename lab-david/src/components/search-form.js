import React from 'react';
import SearchResultList from './search-result-list';
import superagent from 'superagent';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topic : '',
      limit: '',
      hasError: false,
    };

    this.turnBoxRedOnError = this.turnBoxRedOnError.bind(this);
    this.handleTopicTextBox = this.handleTopicTextBox.bind(this);
    this.handleNumbersTextBox = this.handleNumbersTextBox.bind(this);

    this.search = this.search.bind(this);
  }

  search(event, topic, limit) {
    event.preventDefault();
    this.setState({loading: true, hasSearched: true});
    superagent.get(`http://www.reddit.com/r/${this.state.topic}.json?limit=${this.state.limit}`)
      .then(response => {
        return this.setState({
          SearchResultsFromReddit: response.body.data.children,
          loading: false,
        });
        

      })
      .catch(error => {
        this.setState({
          hasError: true,
        });
      });
  }

  turnBoxRedOnError() {
    if (this.state.hasError) {
      return <input 
        className="error"
        type="text" 
        value={this.state.topic} 
        placeholder="Type subreddit board name here" 
        onChange={this.handleTopicTextBox}
      />;
    } else {
      return <input 
        type="text" 
        value={this.state.topic} 
        placeholder="Type subreddit board name here" 
        onChange={this.handleTopicTextBox}
      />;
    }
  }


  handleTopicTextBox(event) {
    this.setState({topic:event.target.value});
  }

  handleNumbersTextBox(event) {
    this.setState({limit:event.target.value});
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.search}>
          {this.turnBoxRedOnError()}


          <input 
            type="number" 
            min="0" 
            max="99" 
            value={this.state.limit} 
            placeholder="Insert number of results desired" 
            onChange={this.handleNumbersTextBox}
          />
          <button>Search</button>
        </form>
        <SearchResultList
          results={this.state.SearchResultsFromReddit}
          hasSearched={this.state.hasSearched}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

module.exports = SearchForm;