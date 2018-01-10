'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import SearchForm from './components/SearchForm';
import SearchResultList from './components/SearchResultList';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      SearchResultsFromReddit: [],
      hasSearched: false,
      loading: false
    }

    // this.search = this.search.bind(this);
    // this.setTopics = this.setTopics.bind(this);
  }
  
  // search(filter='') {
  //   this.setState({loading: true, hasSearched: true})
  //     let newTopics = [
  //       {title: 'title of the thing'},
  //     ].filter(result => {
  //       return result.language.includes(filter)
  //     })
  //     this.setTopics(newTopics)
  // }

  // setTopics(newTopics) {
  //   this.setState({topics: newTopics, loading: false})
  // }

  render() {
    return (
      // <div>
      // <SearchForm submitSearch={this.search} />
      // <SearchResultList
      //   results={this.state.results}
      //   hasSearched={this.state.hasSearched}
      //   loading={this.state.loading} />
      // </div>
      <div>
        <SearchForm/>
        <SearchResultList/>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('content'));