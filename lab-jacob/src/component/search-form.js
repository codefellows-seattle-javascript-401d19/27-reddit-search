'use strict';

import React from 'react'

export default class Form extends React {
  constructor(props) {
    super(props);
    this.state = {filter: ''}
    this.handleEventFilter = this.handleEventFilter.bind(this)
    this.search = this.search.bind(this)
  }


  render() {
    return (
      <div>
        <form> 
        <input type = "search"> Search Sub-Reddit </input>
        </form>
      </div>
    )
  }
}
