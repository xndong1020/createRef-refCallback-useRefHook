import React, { Component } from 'react'
import MyInput from './MyInput'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef()

    this.state = {
      text: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    // ref is used on an HTML element, the ref created in the constructor with React.createRef() receives the underlying DOM element as its current property.
    // this.setState({ text: this.textInput.current.value })

    // 由于ref 现在指向一个custom component, 所以目前this.textInput.current 的value 是这个MyInput component
    console.log('handleInputChange', this.textInput.current, e.target.value)
  }

  render() {
    const { text } = this.state
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        {/* <input
          type="text"
          ref={this.textInput}
          onChange={this.handleInputChange}
        /> */}
        <MyInput ref={this.textInput} handleChange={this.handleInputChange} />
        <h3>{text}</h3>
      </div>
    )
  }
}

export default App
