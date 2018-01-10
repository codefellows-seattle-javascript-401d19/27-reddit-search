import React from 'react';


class WizardForm extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <form>

                <div>
                    Name:
                    <input type="text" value="" placeholder="YOYO"/>
                </div>

            </form>
        )
    }
}

module.exports = WizardForm