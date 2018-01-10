import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/searchform';
import SearchResultList from './components/searchresultlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
    };

    this.search = this.search.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  search(topic){
    //fetch get request using topic
    let newResults = null;
    this.setResults(newResults);
  }

  setResults(newResults){
    this.setState({ results: newResults});
  }

  render(){
    return (
      <div>
        <SearchForm submitSearch={this.search}/>
        <SearchResultList results={this.state.results}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));