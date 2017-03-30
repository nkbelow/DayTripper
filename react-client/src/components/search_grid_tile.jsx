import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchDialogModal from './search_dialog.jsx';


class SearchGridTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.clickImage = this.clickImage.bind(this);
  };

  handleClose () {
    this.setState({open: false});
  };

  handleOpen () {
    this.setState({open: true});
  };

  clickImage () {
    window.open(this.props.result.url);
  };

  render () {
    return (
      <GridTile
        key={this.props.result.id}
        title={this.props.result.name}
        actionPosition="left"
        titlePosition="top"
        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        cols={3}
        rows={2}
        actionIcon={<IconButton onClick={this.handleOpen}><StarBorder color="white" />
        <SearchDialogModal
          createEvent={this.props.createEvent}
          result={this.props.result}
          handleClose={this.handleClose}
          open={this.state.open}
        />
        </IconButton>}
      > 
        <img 
          className = "tile"
          onClick={this.clickImage} 
          src={this.props.result.image_url}
        />
      </GridTile>
    )    
  }
};

export default SearchGridTile;