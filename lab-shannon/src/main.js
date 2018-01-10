import './style/main.scss';
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

    this.search = this.search.bind(this);
  }

  search(resultJson) {
    resultJson.then(
      response => {
        this.setState({
          topics: response.data.children,
          hasSearched: true,
        });
      }
    );
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
