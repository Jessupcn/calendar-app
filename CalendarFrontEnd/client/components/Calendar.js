import React, {Component} from 'react'

/**
 * COMPONENT
 */
class Calendar extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.loadInitialData()
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}