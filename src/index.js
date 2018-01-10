import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import WizardForm from './components/wizard-school-form'


class App extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {
    return (
      <WizardForm/>
    )
  }
}
console.log('hello');
ReactDOM.render(<App/>, document.getElementById('content'));