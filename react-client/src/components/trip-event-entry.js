import React from 'react';
import { 
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap';

class TripEventEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifOptions: false,
      ifEditEvent: false,
      description: '',
      start: '',
      end: ''
    }
    this.ifOptions = this.ifOptions.bind(this);
    this.ifEditEvent = this.ifEditEvent.bind(this);
    this.onRemoveEvent = this.onRemoveEvent.bind(this);
    this.onUpdateEvent = this.onUpdateEvent.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
  };

  ifOptions() {
    this.setState({
      ifOptions: !this.state.ifOptions
    })
  };

  ifEditEvent() {
    this.setState({
      ifEditEvent: !this.state.ifEditEvent,
      ifOptions: false,
    })
  };

  onDescChange(e) {
    this.setState({
      description: e.target.value
    })
  };

  onStartChange(e) {
    this.setState({
      start: e.target.value
    })
  };

  onEndChange(e) {
    this.setState({
      end: e.target.value
    })
  };

  onUpdateEvent() {
    var newEventInfo = {
      location: {location: this.props.event.location},
      newInfo: {description: this.state.description,
                start: this.state.start,
                end: this.state.end}
    };
    this.props.updateEvent(newEventInfo);
    this.ifOptions();
    this.ifEditEvent();
  };

  onRemoveEvent() {
    console.log('DELETED EVENT:', this.props.events[this.props.index]);

    const selectedEvent = this.props.events[this.props.index];
    this.props.removeEvent(selectedEvent)
  };

  render() {
    const eventStyle = {
      width: '100%',
      fontSize: 18,
      paddingBottom: 15,
      cursor: 'pointer'
    };

    const eventStyleIfOptions = {
      width: '100%',
      fontSize: 18,
      cursor: 'pointer'
    };

    const formStyle = {
      width: '100%',
      fontSize: 18,
    };

    if (this.state.ifEditEvent) {
      return (
        <li style={{width:600}}>
          <Form >

            <FormGroup controlId="description">
              <ControlLabel>description</ControlLabel>
              {' '}
              <FormControl 
                placeholder={this.props.event.description}
                type="text"
                onChange={this.onDescChange}
                style={{width:600, marginBottom:10}}
              />
            </FormGroup>
            {' '}
            </Form>
            <Form inline>
            <FormGroup controlId="startTime">
              <ControlLabel>start</ControlLabel>
              {' '}
              <FormControl 
                placeholder={this.props.event.start}
                type="text"
                onChange={this.onStartChange} 
                style={{width:150}}
              />
            </FormGroup>
            {' '}

            <FormGroup controlId="endTime">
              <ControlLabel>end</ControlLabel>
              {' '}
              <FormControl 
                placeholder={this.props.event.end}
                type="text"
                onChange={this.onEndChange} 
                style={{width:150}} 
              />
            </FormGroup>
            {' '}

            <Button style={{margin: 10}} onClick={this.onUpdateEvent}>UPDATE</Button>
            <Button style={{margin: 10}} onClick={this.ifEditEvent}>CANCEL</Button>
          </Form>
        </li>
      )
    };

    if (this.state.ifOptions) {
      return (
        <li>
          <div style={eventStyleIfOptions} onClick={this.ifOptions}>
            {this.props.event.description} – from {this.props.event.start} to {this.props.event.end}
            <div>
            at {this.props.event.location} ({this.props.event.address})
            </div>
          </div>

          <div>
            <Button style={{marginBottom: 10}} onClick={this.onRemoveEvent}>REMOVE</Button>
            <Button style={{marginBottom: 10}} onClick={this.ifEditEvent}>EDIT</Button>
          </div>
        </li>
      )

    } else {
      return (
        <div>
          <div style={eventStyle} onClick={this.ifOptions}>
            {this.props.event.description} – from {this.props.event.start} to {this.props.event.end}
            <div>
            at {this.props.event.location} ({this.props.event.address})
            </div>
          </div>
        </div>
      )
    }
  };
};

export default TripEventEntry;