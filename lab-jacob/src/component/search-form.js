'use strict';

import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      limitField: '',   
  }

this.handleChange = this.handleChange.bind(this)
this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange(event){
    event.preventDefault()
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSearch(e){
    e.preventDefault()
    this.props.submitSearch(this.state.searchField, this.state.limit)
  }

  render() {
    return (
      <div>
        <form onSubmit= {this.handleSearch}> 
        <p>search SubReddit</p>
        <input 
          name='searchField' 
          type = "search" 
          onChange = {this.handleChange}
          value = {this.state.searchField}
        />
        <p>comments or posts output </p>
        <input
          name='limitField'
          type="text"
          placeholder="# of comments/posts"
          id="number-of-posts"
          value={this.state.limitField}
          onChange={this.handleChange}
         />
         <button type='submit'>Submit</button>
        </form>

      </div>
    )
  }
}
