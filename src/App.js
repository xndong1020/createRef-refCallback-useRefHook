import React, { Component } from 'react'
import MyInput from './MyInput'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef()
  }

  handleSubmit = () => {
    console.log(this.textInput.current.value)
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <MyInput ref={this.textInput} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default App
