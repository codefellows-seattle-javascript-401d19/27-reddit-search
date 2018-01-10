import React from 'react';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {topic: ''};

    this.handleTopic = this.handleTopic.bind(this);
    this.search = this.search.bind(this);
  }

  handleTopic(event){
    this.setState({topic: event.target.value});
  }

  search(){
    this.props.submitSearch(this.state.topic);
  }

  render(){
    return <div>
      <input type="text" value={this.state.topic} onChange={this.handleTopic}/>
      <button onClick={this.search}>Search</button>
    </div>;
  }
}

export default SearchForm;