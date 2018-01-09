// import './style/main'
import React from 'react';
import ReactDOM from 'react-dom';
// import SearchForm from './search-form';
// import SearchResultList from './search-result-list';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        //{ <SearchForm />
        // <SearchResultList />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
