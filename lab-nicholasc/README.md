# Lab 27 Reddit Search Bar

## Author: Nicholas Carignan

## Node Package dependencies
1. "babel-core": "^6.26.0",
1. "babel-loader": "^7.1.2",
1. "babel-plugin-transform-object-rest-spread": "^6.26.0",
1. "babel-preset-es2015": "^6.24.1",
1. "babel-preset-react": "^6.24.1",
1. "cowsay": "^1.2.1",
1. "css-loader": "^0.28.8",
1. "extract-text-webpack-plugin": "^3.0.2",
1. "faker": "^4.1.0",
1. "html-webpack-plugin": "^2.30.1",
1. "lodash": "^4.17.4",
1. "node-sass": "^4.7.2",
1. "react": "^16.2.0",
1. "react-dom": "^16.2.0",
1. "resolve-url-loader": "^2.2.1",
1. "sass-loader": "^6.0.6",
1. "style-loader": "^0.19.1",
1. "superagent": "^3.8.2",
1. "webpack": "^3.10.0",
1. "webpack-dev-server": "^2.10.0"

## Setup
  clone the repo by typing in

  `git clone https://github.com/ncarignan/27-reddit-search.git`

  then install the packages with

   `npm install`

  then the app is ready to be setup by running

   `npm run build`

   or if you want to make modifications to the code on the fly

   ` npm run watch`
## App
The app keeps track of the state of the search. When a search is performed, the state changes to loading and when it completes the results are saved and displayed and the state leaves loading.

The app also responds to errors by outlining the search box in red, upon completing a successful search, the failed search state ends and the error outline is removed.
