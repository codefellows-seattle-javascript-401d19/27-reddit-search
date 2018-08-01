'use strict';

import React, { Fragment } from 'react';

const SearchResultList = ({ topics }) => (
  <Fragment>
    <h3 className={topics.length ? 'isDisplayed' : ''} >List of Reddit Topics:</h3>
    { topics.map((topic, index) => (
      <div className='sub-reddit' key={`topic-${index}`}>
        <a target='blank' href={ topic.data.url }>{ topic.data.title }<p>Up votes: { topic.data.ups }</p></a>
      </div>
    )) }
  </Fragment>
);

export default SearchResultList;
