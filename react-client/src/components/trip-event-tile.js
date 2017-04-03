import React from 'react';
import TripEventEntry from './trip-event-entry.js';
import PictureModal from './picture-modal.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TripEventTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      picModalOpen: false,
    };
    //bind methods here
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };
  //add new methods here
  handleOpen() {
    this.setState({picModalOpen: true})
  }
  handleClose() {
  this.setState({open: false});
};


  //move picture modal methods here
  //pass state to picture modal
  //render picture modal with open attribute set to the props being passed

  render() {

    // const tile =
    //   {
    //     img: 'http://www.goodfood.com.vn/images/I_home.jpg',
    //     title: 'Breakfast',
    //     author: 'jill111',
    //   };

    return (
      <div className="container tripEventTile">
        <div className="row">
          <div className="col-md-2 col-xs-12">
            <img src={this.props.event.image_url} className="img-thumbnail img-responsive" style={{height: 100}}/>
          </div>

          <div className="col-md-2  col-xs-12">
            <TripEventEntry
            index={this.props.index}
            event={this.props.event}
            events={this.props.events}
            removeEvent={this.props.removeEvent}
            updateEvent={this.props.updateEvent}/>
          </div>

          <div className="col-md-2  col-xs-12">
            <button onClick={this.handleOpen} className="btn-primary btn-lg" style={{width: 154.5}}>Add Memory</button>
            <button onClick={this.props.showMemories} className="btn-info btn-lg">Show Memories</button>
          </div>
          <MuiThemeProvider>
            <PictureModal
            open={this.state.picModalOpen}
            handleClose={this.handleClose}
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  };
};

export default TripEventTile;

