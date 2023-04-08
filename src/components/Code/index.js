import {Component} from 'react'

import './index.css'

class Code extends Component {
  state = {saveButton: false, textInput: ''}

  updateTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  toggleButton = () => {
    this.setState(prevState => ({saveButton: !prevState.saveButton}))
  }

  render() {
    const {saveButton, textInput} = this.state
    const buttonParagraph = saveButton ? (
      <p>{textInput}</p>
    ) : (
      <input
        value={textInput}
        onChange={this.updateTextInput}
        className="input-element"
        type="text"
      />
    )
    const button = saveButton ? 'Edit' : 'Save'
    return (
      <div className="mainContainer">
        <div className="innerContainer">
          <h1 className="heading">Editable Text Input</h1>
          <div className="editableContainer">
            {buttonParagraph}
            <button className="btn" type="button" onClick={this.toggleButton}>
              {button}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Code
