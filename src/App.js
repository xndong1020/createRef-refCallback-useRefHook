import React, { Component } from 'react'
import './App.css'

class App extends Component {
  setTextInputRef = element => {
    this.textInput = element
  }

  focusTextInput = () => {
    // Focus the text input using the raw DOM API
    if (this.textInput) this.textInput.focus()
  }

  handleChange = () => {
    console.log(this.textInput.value)
  }

  componentDidMount() {
    // autofocus the input on mount
    this.focusTextInput()
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
          onChange={this.handleChange}
        />
        {/* <input type="text" ref={x => (this.textInput = x)} onChange={this.handleChange}/> */}
      </div>
    )
  }
}

export default App
