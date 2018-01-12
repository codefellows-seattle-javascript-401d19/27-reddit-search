import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import SearchForm from './components/search-form';
import SearchResultList from './components/search-result-list';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchResultsFromReddit: [],
      hasSearched: false,
      loading: false,
    };

   
    // this.setTopics = this.setTopics.bind(this);
  }
  

  render() {
    return (
      <div>
        <h1>Subreddit Topic Grabber</h1>
        <SearchForm 
          onSubmit={this.search}
        />
        
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('content'));