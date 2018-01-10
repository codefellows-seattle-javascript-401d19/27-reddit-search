import React from 'react';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topic: '',
      number: '',
    };

    this.handleTopic = this.handleTopic.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.search = this.search.bind(this);
  }

  handleTopic(event){
    this.setState({topic: event.target.value});
  }

  handleNumber(event){
    console.log('changing number', event.target.value);
    this.setState({number: event.target.value});
  }

  search(){
    this.props.submitSearch(this.state.topic, this.state.number);
  }

  render(){
    return <div>
      <label htmlFor="subredditname">Sub-Reddit Name</label>
      <input id="subredditname" type="text" value={this.state.topic} onChange={this.handleTopic}/>
      <label htmlFor="resultamount">Number of Results</label>
      <input id="resultamount" type="number" min="1" max="100" value={this.state.number} onChange={this.handleNumber}/>
      <button onClick={this.search}>Search</button>
    </div>;
  }
}

export default SearchForm;