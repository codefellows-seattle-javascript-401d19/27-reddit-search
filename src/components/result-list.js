import React from 'react'

class ResultList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            results: [
                {language: 'javascript', rating: 8},
                {language: 'java', rating: 8},
                {language: 'python', rating: 8},
                {language: 'c#', rating: 8}
            ]
        }
    }


    render() {
        return (
            <div>
                Language: {results[0].language} Rating: {rating}
                
            </div>
        )
    }
}

module.exports = ResultList