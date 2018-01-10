import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './components/search-form';
import SearchResultList from './components/search-result-list';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
      hasSearched: false,
      loading: false,
      noResults: false,
    };

    this.search = this.search.bind(this);
  }

  search(subreddit, limit) {
    this.setState({ loading: true, hasSearched: true, noResults: false });
    fetch(`http://www.reddit.com/r/${subreddit}.json?limit=${limit}`)
      .then(response => response.json())
      .then(responseData => responseData.data.children)
      .then(data => {
        this.setState({ topics: data, loading: false, hasSearched: true });
      })
      .catch(() => {
        this.setState({ noResults: true });
      });
  }

  render() {
    return (
      <div>
        <h1 id='headline'>Reddit Search</h1>
        <SearchForm submitSearch={this.search} />
        <SearchResultList
          topics={this.state.topics}
          hasSearched={this.state.hasSearched}
          loading={this.state.loading}
          noResults={this.state.noResults}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
