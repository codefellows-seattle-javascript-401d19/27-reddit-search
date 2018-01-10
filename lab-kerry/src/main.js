import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form';
import SearchResultList from './components/search-result'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			results: [],
			searchDone: false,
			loading: false,
		}
		this.search = this.search.bind(this);
	}
	search(subReddit, maxResults) {
		console.log()
		this.setState({ loading: true, searchDone: true })
		fetch(`http://www.reddit.com/r/${subReddit}.json?limit=${maxResults}`)
			.then((response) => response.json())
			.then((responseJson) => responseJson.data.children)
			.then(foo => {
			this.setState({ results: foo, loading: false, searchDone: true })
			})
			.catch((error) => {
				console.error(error);
			});
	}
	

	render() {
		return (
			<div>
				<SearchForm 
					submitSearch={this.search} />
				<SearchResultList
					results={this.state.results}
					searchDone={this.state.searchDone}
					loading={this.state.loading} />
			</div>
		)

	}
}


ReactDOM.render(<App />, document.getElementById('root'));
