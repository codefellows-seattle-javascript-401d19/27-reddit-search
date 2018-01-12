import React from 'react';

class SearchForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			subReddit: '',
			maxResults: '',
		};
		this.search = this.search.bind(this);
		this.handleSubReddit = this.handleSubReddit.bind(this);
		this.handleMaxResults = this.handleMaxResults.bind(this);
	}

	handleSubReddit(event) {
		this.setState(
			{subReddit: event.target.value}
		);
	}

	handleMaxResults(event) {
		this.setState(
			{maxResults: event.target.value}
		);
	}


	search(event) {
		event.preventDefault();
		this.props.submitSearch(this.state.subReddit, this.state.maxResults)
		}

	render() {
		return ( 
			<div id="reddit-search">
				<form onSubmit={this.search}>
					<p><input className={this.state.className} id="subreddit-search" type="text" 
							placeholder="Which Sub-Reddit??" 
							value={this.state.subReddit} 
							onChange ={this.handleSubReddit}
							 />
					</p>

					<p><input id="max-results-search" type="number" 
							min="0" 
							max="100" 
							placeholder="Max Results (0 - 100)" 
							value={this.state.maxResults} 
							onChange={this.handleMaxResults}
							 /> 
					</p>
					<input type="submit" />
			</form>	
		</div>
		)
	}
}

module.exports = SearchForm;