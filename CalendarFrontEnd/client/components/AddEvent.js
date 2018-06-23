import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form, Input, TextArea } from 'semantic-ui-react'

class AddEvent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eventName: '',
      eventDescription: '',
      // startTime: ,
      // endTime: 
    }

    //Bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const key = evt.target.name;
    const value = evt.target.value;
    const stateUpdate = {};
    stateUpdate[key] = value;
    this.setState(stateUpdate);
  }

  handleSubmit = () => {
    const { eventName, eventDescription, startTime, endTime } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }

  render() {
    return (
      <Modal trigger={ <Icon name="add" id="addEventButton" />} basic size='small'>
        <Header content="Add New Event:" />
        <Modal.Content>
        <Form inverted>
          <Form.Field 
            control={Input}
            label='Event Name'
            placeholder='Event name'
            name='eventName'
            onChange={this.handleChange}
          />
          <Form.Field
            control={TextArea}
            label='Event Description'
            placeholder='Description of the event'
            name='eventDescription'
            onChange={this.handleChange}
            />
        </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted>
              <Icon name='checkmark' />Submit
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AddEvent;
