import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form';
import SearchResultList from './components/search-result'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			topics: [],
			searchDone: false,
			loading: false,
			error: false,
			errorClass: '',
		}
		this.search = this.search.bind(this);
	}
	search(subReddit, maxResults) {
		this.setState({ loading: true, searchDone: true, error: false, className: 'none'})
		fetch(`http://www.reddit.com/r/${subReddit}.json?limit=${maxResults}`)
			.then(this.handleErrors)
			.then((response) => response.json())
			.then((responseJson) => responseJson.data.children)
			.then(foo => {
			this.setState({ results: foo, loading: false, searchDone: true })
			})
			.catch((error) => {
				this.setState({loading: false, searchDone: true, error: true})
				console.error(error);
			});
	}

	handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

	render() {
		return (
			<div>
				<SearchForm 
					submitSearch={this.search} />
				<SearchResultList
					topics={this.state.topics}
					searchDone={this.state.searchDone}
					loading={this.state.loading} />
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
