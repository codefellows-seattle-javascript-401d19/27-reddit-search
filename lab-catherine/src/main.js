import './style/main.scss';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form';
import SearchResultList from './components/search-result-list';

class App extends React.Component {
  state = {
    topics: [],
  }

  setResults = (topics) => this.setState({topics});
  
  render() {
    const {
      setResults,
      state: {topics},
    } = this;
    return (
      <Fragment>
        <h1>Search Reddit!</h1>
        <SearchForm topics={topics} setResults={setResults}/>
        <SearchResultList topics={topics}/>
      </Fragment>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));