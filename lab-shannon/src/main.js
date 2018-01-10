// import './style/main'
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './search-form';
import SearchResultList from './search-result-list';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      topics: [],
      hasSearched: false,
    };
  }

  search(filter) {
    console.log(`groot`);
    // this.setState({topics: [], hasSearched: true});
  }

  render() {
    return (
      <div>
        <SearchForm submitSearch={this.search}/>
        <SearchResultList
          topics = {this.state.topics}
          hasSearched = {this.state.hasSearched}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
