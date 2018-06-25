import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Header,
  Icon,
  Modal,
  Form,
  Input,
  TextArea,
  Select
} from 'semantic-ui-react';
import { eventUpdate, createEvent } from '../redux_store';

// Options for time dropdown
const options = [
  { key: '0', value: '0', text: '12 am' },
  { key: '1', value: '1', text: '1 am' },
  { key: '2', value: '2', text: '2 am' },
  { key: '3', value: '3', text: '3 am' },
  { key: '4', value: '4', text: '4 am' },
  { key: '5', value: '5', text: '5 am' },
  { key: '6', value: '6', text: '6 am' },
  { key: '7', value: '7', text: '7 am' },
  { key: '8', value: '8', text: '8 am' },
  { key: '9', value: '9', text: '9 am' },
  { key: '10', value: '10', text: '10 am' },
  { key: '11', value: '11', text: '11 am' },
  { key: '13', value: '12', text: '12 pm' },
  { key: '14', value: '13', text: '1 pm' },
  { key: '15', value: '14', text: '2 pm' },
  { key: '16', value: '15', text: '3 pm' },
  { key: '17', value: '16', text: '4 pm' },
  { key: '18', value: '17', text: '5 pm' },
  { key: '19', value: '18', text: '6 pm' },
  { key: '20', value: '19', text: '7 pm' },
  { key: '21', value: '20', text: '8 pm' },
  { key: '22', value: '21', text: '9 pm' },
  { key: '23', value: '22', text: '10 pm' },
  { key: '12', value: '23', text: '11 pm' }
];

class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      eventName: '',
      eventDescription: '',
      startTime: '',
      endTime: ''
    };

    if (props.passedInEvent) {
      this.state = {
        modalOpen: false,
        eventName: this.props.passedInEvent.name,
        eventDescription: this.props.passedInEvent.description,
        startTime: '',
        endTime: ''
      };
    }

    //Bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt, { name, value }) {
    const change = {};
    change[name] = value;
    this.setState(change);
  }

  handleSubmit() {
    const { eventName, eventDescription, startTime, endTime } = this.state;
    const { passedInEvent, day, sendUpdate, addEvent } = this.props;
    const objToSend = {
      name: eventName,
      description: eventDescription,
      startTime: `2018-07-${day} ${startTime}:00:00`,
      endTime: `2018-07-${day} ${endTime}:00:00`
    };
    if (passedInEvent) objToSend.id = passedInEvent.id;
    passedInEvent ? sendUpdate(objToSend) : addEvent(objToSend);
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <Modal
        trigger={this.props.trigger}
        basic
        size="small"
        onOpen={() => this.setState({ modalOpen: true })}
        open={this.state.modalOpen}
        onClose={() => this.setState({ modalOpen: false })}
      >
        <Header content="Add New Event:" />
        <Modal.Content>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Field
              control={Input}
              label="Event Name"
              placeholder="Event name"
              name="eventName"
              value={this.state.eventName}
              onChange={this.handleChange}
            />
            <Form.Field
              control={TextArea}
              label="Event Description"
              placeholder="Description of the event"
              name="eventDescription"
              value={this.state.eventDescription}
              onChange={this.handleChange}
            />
            <Form.Group inline>
              <Form.Select
                fluid
                control={Select}
                label="Start Time:"
                options={options}
                placeholder="Select Time"
                name="startTime"
                onChange={this.handleChange}
              />
              <Form.Select
                fluid
                control={Select}
                label="End Time"
                options={options}
                placeholder="Select Time"
                name="endTime"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Button color="green" inverted>
              <Icon name="checkmark" />Submit
            </Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

/**
 * Map dispatch to props
 */

const mapDispatch = dispatch => {
  return {
    addEvent(event) {
      dispatch(createEvent(event));
    },
    sendUpdate(event) {
      dispatch(eventUpdate(event));
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    null,
    mapDispatch
  )(AddEvent)
);
