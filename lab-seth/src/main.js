import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import SearchForm from './components/search-form';
import SearchResultList from './components/search-result-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      results: [],
      hasSearched: false,
      loading: false
    }

    this.search = this.search.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  search() {
    this.setState({loading: true, hasSearched: true})
    setTimeout(() => {
      let newResults = [ // needs to be array of results so it can be mapped
        {subReddit: 'php', limit: 10},
        {subReddit: 'php', limit: 10},
        {subReddit: 'php', limit: 10},
        {subReddit: 'php', limit: 10},
      ];
    
      this.setResults(newResults)
    }, 1000)
  }

  setResults(newResults) {
    this.setState({results: newResults, loading:false})
  }

  render() {
    return (
      <div>
        <SearchForm submitSearch={this.search} />
        <SearchResultList 
        results={this.state.results}
        hasSearched={this.state.hasSearched}
        loading={this.state.loading} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));