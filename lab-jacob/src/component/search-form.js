'use strict';

import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      
  }
    this.handleSubRedditInput = this.handleSubRedditInput.bind(this)
    this.handleLimitInput = this.handleLimitInput.bind(this)
    this.search = this.search.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubRedditInput(event){}

  handleLimitInput(event){}



  render() {
    return (
      <div>
        <form> 
        <p>search SubReddit</p>
        <input 
          name='searchField' 
          type = "search" 
          onChange = {this.handleSubRedditInput}
          value = {this.state.searchField}
        />
        <p>comments or posts output </p>
        <input
          type="text"
          placeholder="# of comments/posts"
          id="number-of-posts"
          value={this.state.limit}
          onChange={this.handleLimitInput}
         />
        </form>
      </div>
    )
  }
}
