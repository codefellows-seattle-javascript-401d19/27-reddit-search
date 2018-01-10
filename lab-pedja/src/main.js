import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';
import SearchForm from './components/search-form';
import ResultList from './components/search-result-list';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      topics: [],
      hasSearched: false,
      loading: false,
      noResults: false
    };

    this.search = this.search.bind(this)
  }

  search(subreddit, limit) {
    this.setState({loading: true, hasSearched: true, noResults: false});
    console.log('hi there');
    
    superagent.get(`https://www.reddit.com/r/${subreddit}.json?limit=${limit}`)
      .then(res => {
        const topics = res.body.data.children;
        console.log(limit);
               
        this.setState({ topics: topics, hasSearched: true, loading: false });
      })
      .catch(() => {
        this.setState({ noResults: true });
      });
  }

  render() {
    return (
      <div>
        <SearchForm submitSearch={this.search} />
        <ResultList
          topics={this.state.topics}
          hasSearched={this.state.hasSearched}
          loading={this.state.loading} 
          noResults={this.state.noResults} 
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
