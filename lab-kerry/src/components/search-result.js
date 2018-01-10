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
			return <div className="sub-reddit" key={index}> SubReddit: {result.subReddit} &nbsp;
			Posts: {result.posts}
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