import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
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
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const PhotoScroller = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default PhotoScroller;