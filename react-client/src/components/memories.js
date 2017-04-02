import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 500,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://www.goodfood.com.vn/images/I_home.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://latestvegannews.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-31-at-8.42.12-AM.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://goodfoodonmontford.com/media/PORK.BUN.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://www.bbcgoodfood.com/sites/default/files/doughnuts500-350.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/02/harissa-chicken-traybake.jpg?itok=tt3UYJEu',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--17958_12.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://sapphirical.files.wordpress.com/2012/05/goodfood.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://betheme.muffingroupsc.netdna-cdn.com/be/goodfood/wp-content/uploads/2014/05/home_goodfood_blog2-960x750.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Memories = (props) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {props.photos.map((photo) => (
        <GridTile
          key={photo.public_id}
          title={photo.original_filename}
          subtitle={<span>by <b>{photo.original_filename}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={photo.url} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Memories;