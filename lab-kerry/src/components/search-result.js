import React from 'react';

class SearchResultList extends React.Component {

	resultList() {
		if(!this.props.searchDone) {
			return <div></div>
		} else if (this.props.loading) {
			return <p> Scrubbing trolls...</p>
	} else if (this.props.results.length === 0) {
		return <p>No results.</p>
	} else {
		return this.props.results.map((result, index) => { 
			console.log('subreddit', result)
			return <div className="sub-reddit" key={index}> 
			<pre>Post Name: {result.data.title}</pre>
			<pre>Upvotes: {result.data.ups}</pre>
			</div>
		});
	}
	}

	render() {
		return (
			<div>
		{this.resultList()}
		</div>
		)
	};
};

module.exports = SearchResultList;