'use strict';

import '../style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import ResultList from './search-result-list';
import SearchForm from './search-form';
import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      formError: false,
    };

    this.searchReddit = this.searchReddit.bind(this);
  }

  searchReddit(search, limit) {
    if(!limit)
      return this.setState({
        formError: true,
        topics: [],
      });
    let url = `http://www.reddit.com/r/${search}.json?limit=${limit}`;
    superagent.get(url)
      .then(response => {
        this.setState({
          topics: response.body.data.children,
          formError: false,
        });
      })
      .catch(error => {
        this.setState({
          formError: true,
          topics: [],
        });
      });
  }

  setResults(newResults) {
    this.setState({results: newResults});
  }

  render() {
    return (
      <div>
        <SearchForm
          searchReddit={this.searchReddit}
          handleError={this.state.formError}
        />
        {this.state.formError ? <div>Input error</div> : ''}
        <ResultList results={this.state.topics}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
