'use strict';

import React from 'react'

const SearchResults = (props) => {
  return <div>
  {props.results.length ? props.results.map((result, index) =>
    <div className='results' key={index}>
      <a href={result.data.url}>
          <div>
          <h2> Title: {result.data.title}</h2>
          <h2> Upvotes: {result.data.ups}</h2>
          </div>
      </a>
    </div>
  ) : null}
</div>
  
}




export default SearchResults