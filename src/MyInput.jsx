import React, { Component } from 'react'

export default class MyInput extends Component {
  handleInputChange = e => {
    const { handleChange } = this.props
    handleChange(e)
  }
  render() {
    return (
      <>
        <input type="text" onChange={this.handleInputChange} />
      </>
    )
  }
}
