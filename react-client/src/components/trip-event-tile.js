import React from 'react';
import TripEventEntry from './trip-event-entry.js';

class TripEventTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    //bind methods here
  };
  //add new methods here

  render() {

    const tile = 
      {
        img: 'http://www.goodfood.com.vn/images/I_home.jpg',
        title: 'Breakfast',
        author: 'jill111',
      };

    return (
      <div className="container tripEventTile">
        <div className="row">
          <div className="col-md-2 col-xs-12">
            <img src={tile.img} className="img-thumbnail img-responsive" style={{height: 100}}/>
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
            <button className="btn-primary btn-lg" style={{width: 154.5}}>Add Memory</button>
            <button onClick={this.props.showMemories} className="btn-info btn-lg">Show Memories</button>
          </div>
        </div>
      </div>
    );
  };
};

export default TripEventTile;

