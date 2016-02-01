import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { count } = this.props

    return (
      <div>
        <span id='counter'>{ count }</span>
      </div>
    )
  }
}
