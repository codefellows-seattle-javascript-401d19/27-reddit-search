import React from 'react';

class SearchResultList extends React.Component {

	resultList() {
			if(!this.props.searchDone) {
				return <div></div>
			} else if (this.props.loading) {
				return <p> Scrubbing trolls...</p>
			} else if (this.props.error === true) {
				console.log('made it to error',this.state);
				return <p>No topics.</p>
		} else if (this.props.topics.length === 0) {
			return <p>No topics.</p>
		} else {
			return this.props.topics.map((result, index) => { 
				console.log('subreddit', result)
				return <div className="sub-reddit" key={index}> 
					<a href={result.data.url}><pre><img src={result.data.thumbnail}></img></pre></a>
				<a href={result.data.url}><pre>Post Name: {result.data.title}</pre></a>
				<pre>Author: {result.data.author}</pre>
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