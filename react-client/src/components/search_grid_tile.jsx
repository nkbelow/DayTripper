import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogExampleModal from './search_dialog.jsx';


class SearchGridTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen () {
    console.log("this.props.result", this.props.result)
    this.setState({open: true});
  };

  render () {
    return (      
      <GridTile
        key={this.props.result.id}
        title={this.props.result.name}
        actionPosition="left"
        titlePosition="top"
        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        cols={this.props.result.featured ? 2 : 1}
        rows={this.props.result.featured ? 2 : 1}
        actionIcon={<IconButton onClick={this.handleOpen}><StarBorder color="white" />
        <DialogExampleModal
          open={this.state.open}
        />
        </IconButton>}
      > 
        <img src={this.props.result.image_url} />
      </GridTile>
    )  
  }
}

export default SearchGridTile;