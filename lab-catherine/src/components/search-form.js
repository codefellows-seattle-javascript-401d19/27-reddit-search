import React, {Component, Fragment} from 'react';
import superagent from 'superagent';

const SearchForm = ({handleTopic, handleLimit, handleSubmit, errorExists}) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <label>Topic:</label>
      <input 
        className={errorExists ? 'error' : 'normal'} 
        type='text'
        name='topic' 
        placeholder='enter subreddit' 
        onChange={handleTopic}
      />  
            &nbsp;

      <label>Limit:</label>
      <input 
        type="number" 
        name='limit' 
        placeholder='#' 
        min='0' 
        max='100' 
        onChange={handleLimit}
      />      
            &nbsp;

      <button type='submit'>Search</button>
    </form>
  </Fragment>
);

export default SearchForm;
