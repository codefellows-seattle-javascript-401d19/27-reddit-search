import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './components/search-form';
import ResultsList from './components/results-list';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.topics = [];
    this.state.firstSearch = true;
  }

  render() {
    return (
      <div>
        <SearchForm context={this} />
        <ul>
          <ResultsList topics={this.state.topics} firstSearch={this.state.firstSearch} />
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));