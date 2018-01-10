import React from 'react';


class WizardForm extends React.Component {
    constructor(props){
        super(props)


        this.handleInputChange = this.handleInputChange.bind(this)

        this.state = {
            name: ''
        }

        
    }

    handleInputChange() {
        console.log('changing')

        this.setState({name: event.target.value})
    }

    render() {
        return (
            <form>

                <div>
                    Name:
                    <input type="text" value={this.state.name} placeholder="YOYO" onChange={this.handleInputChange}/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        )
    }
}

module.exports = WizardForm