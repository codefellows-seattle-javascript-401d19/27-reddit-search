'use strict';

import React from 'react';

class SearchForm extends React.component {
  constructor(props) {
    super(props)


  }

  render() {
    return(
      <div>
        <form>
        <input type="text" value=""/>
        <button type="submit"></button>
        </form>
      </div>
    )

  }
}

module.exports = SearchForm;