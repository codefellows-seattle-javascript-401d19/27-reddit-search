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

    this.search = this.search.bind(this);
    // this.setTopics = this.setTopics.bind(this);
  }
  
  search(searchInputName, SearchResultsNumberLimit) {
    console.log('THIS IS FIRST PART OF SEARCH');
    this.setState({loading: true, hasSearched: true});
    fetch(`http://www.reddit.com/r/${searchInputName}.json?limit=${SearchResultsNumberLimit}`)
      console.log(response.data)
      .then(response => response.json())
      .then(responseData => responseData.data.children)
      .then(data => {
        this.setState({SearchResultsFromReddit: data, loading:false, hasSearched:true});
      });
      //   {
      //   console.log(response);
      //   this.setState({
      //     SearchResultsFromReddit: response.body.data.children.title,
      //   });
      //   console.log(SearchResultsFromReddit);
      // });
  }

  // setTopics(newTopics) {
  //   this.setState({SearchResultsFromReddit: newTopics, loading: false})
  // }

  render() {
    return (
      <div>
      <h1>Subreddit Topic Grabber</h1>
      <SearchForm submitSearch={this.search} />
      <SearchResultList
        SearchResultsFromReddit={this.state.SearchResultsFromReddit}
        hasSearched={this.state.hasSearched}
        loading={this.state.loading} />
      </div>
      // <div>
      //   <SearchForm/>
      //   <SearchResultList/>
      // </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('content'));