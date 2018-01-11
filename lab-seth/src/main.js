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
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <SearchForm app={this} />
          <ul>
          <SearchResultList results={this.state.results} hasSearched={this.state.hasSearched} loading={this.state.loading} />
          </ul>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));