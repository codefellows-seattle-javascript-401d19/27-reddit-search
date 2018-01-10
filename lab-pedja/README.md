![cf](http://i.imgur.com/7v5ASc8.png) Lab 27 Reddit search form
====

* Purpose of this lab is to practice building react components. Separation of App component and it's children (Search Form and Result List). Including fetching data from Reddit webpage. 

## Code Style
* Javascript ES6


## Tech / framework used

* [npm package superagent](https://www.npmjs.com/package/superagent)
* Webpack
* React
* Babel
* sass

## Installation and How To Use

  * Fork || clone this repo to you computer.

  * Run `npm install`

  * To run webpack watch command type `npm run watch`. After build has been completed - webpack-dev-server will show provide URL where your project is hosted. Copy that address to your browser to view app features. Fill in search input with subreddit topic you wish to display and enter limit number that will be limit amount of posts that will be displaued on our page.

## Features

### App Component
* contains *topics* array that contains all posts from subreddit.

### SearchForm Component
* contains a text input for the user to supply a reddit board to look up
* contains a number input for the user to limit the number of results to return 
  * the number must be less than 0 and greater than 100
  * if number is bigger thatn 100, it will be set to 100

### ResultList Component
* Is stateless component and it has one method *postList* that is displaying results from Reddit in form of unordered list that contains topic title and with url attached to it as well as number of upvotes. 

## Licence
MIT © Pedja Josifovic401 JS 
