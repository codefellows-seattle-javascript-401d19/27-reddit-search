# Codefellows javascript 401 lab 26 - REACT cowsay demo

## Purpose
Learn to use react, webpack, and related technologies by creating an API which searches the subreddits on reddit.com for an entered search term.  If the search term is found, a list of the top topics will be returned.  The amount returned can be set by entering a limit in the second input box.  If none is entered, reddit defaults to 25.

## To use
Install dependencies:
```npm install```
Run webpack dev server:
```npm run watch```
Open your browser at localhost:8080.

Enter a topic to search on reddit in the first input field.  Enter the number of items you wish to have returned between 1 and 100.  If none is entered, reddit will default to 25.  If no subreddit is found with the given search term, the input form will get a red border and a message will be displayed.  

## Dependencies
React - https://reactjs.org
Babel - https://babeljs.io
Webpack - https://webpack.js.org
Superagent - https://visionmedia.github.io/superagent/

