// import './style/main'
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './search-form';
// import SearchResultList from './search-result-list';
// import reddit from 'reddit';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      topics: [],
    };
  }

  search(filter) {
    // console.log(reddit);
    // this.setState({topics: reddit.fetch});
  }

  render() {
    return (
      <div>
        <SearchForm submitSearch={this.search}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
