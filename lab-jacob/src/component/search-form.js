'use strict';

import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      
  }
    this.handleEventFilter = this.handleEventFilter.bind(this)
    this.search = this.search.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  search(){
   return this.state.searchField
  }

  render() {
    return (
      <div>
        <form> 
        <input 
          name='searchField' 
          type = "search" 
          onChange = {this.handleChange}
          value = {this.state.searchField}
        />
        </form>
      </div>
    )
  }
}
