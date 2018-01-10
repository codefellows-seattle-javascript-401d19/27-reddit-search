# Code Fellows: Seattle 401 JavaScript - 401d19

## Lab 27: Reddit Search Engine

![Reddit Search Example](/asset/reddit-search.png)

### Author: 
Catherine Looper

### Motivation

In this project, I built a frontend application containing two input fields: one for searching Reddit's subreddit topics, and the other for setting a limit (from 1 - 100) for how many results to be returned. In this application, I configured webpack to compile JavaScript and SASS into a bundle and configured babel to transpile JSX and ES6 to ES5 JavaScript. I was able to create and render React components to the DOM, add event listeners to React components, and update React component state.

Additionally, this application will turn the topic form's input borders red in the event of a superagent.get request failure (any time that a 200 status code is not returned).

### Build

![Reddit File Tree](/asset/reddit-search-tree.png)

### Limitations

To use this app - it is assumed that the user has familiarity with the tech and frameworks listed below.

### Code Style

Standard JavaScript with ES6, SASS, CSS, HTML

### Tech/Framework Used

* babel-core
* babel-loader
* babel-plugin-transform-object-rest-spread
* babel-preset-es2015
* babel-preset-react
* css-loader
* eslint-plugin-react
* extract-text-webpack-plugin
* html-webpack-plugin
* node-sass
* react
* react-dom
* resolve-url-loader
* sass-loader
* superagent
* webpack
* webpack-dev-server
* eslint

### How to use?

* Step 1. Fork and Clone the Repository.
* Step 2. `npm install`
* Step 3. `npm run watch`
* Step 4. You should now be able to visit: `http://localhost:8080/` to view the application
* Step 5. Type in a Subreddit topic, `ex: wtf` and Limit `ex: 5` and click the search button to view results

### Credits

* Code Fellows

### License

MIT © Catherine Looper

