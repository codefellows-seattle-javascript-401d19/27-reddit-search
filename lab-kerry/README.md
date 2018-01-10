## Lab 27 Reddit Search Engine

#### Description
This application fetches a list between 0 and 100 posts from Reddit from any valid subreddit entered into the input box.  Each entry in this list consists of the post's name (which is also a clickable link), a thumbnail image (if present), the post's author, and how many upvotes it currently has.  It exhibits behavior while loading and gives feedback if no articles are found.

###### App Component
The App component is the top level of the application, where the state lives.  It contains the search/fetch functionality and renders the SearchForm and SearchResultList components to the DOM.

###### SearchForm Component
The SearchForm component does the heavy lifting for App.  It handles the input form entry which is held in its own state before being accessed by App.  It binds the context of global `this` to the functionality for handling the subreddit and result limit, and general search functionality.  If a valid subreddit is provided, it will convey this information to the App via lifting state. Additionally, this component defines via the render function the full details of the SearchForm that will be sent to the DOM by App.

###### SearchResultList Component
The SearchResultList component provides logic to the potential search queries and exhibits specific behavior during load time and if no results are found.  If a correct subreddit is queried and results are returned, it maps out these results to display on the DOM.


