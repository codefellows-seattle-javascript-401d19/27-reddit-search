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
    };
    this.updateTopics = this.updateTopics.bind(this);

  }
  updateTopics(topics) {
    this.setState({ topics: topics });
  }
  render() {
    return <div>
      <SearchForm topics={this.state.topics} updateTopics={this.updateTopics} />
      <SearchResultList topics={this.state.topics} />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('content'));