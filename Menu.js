import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  Alert, 
  ScrollView,
  AlarmManager,
  ActivityIndicator } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';

const tilesData = [
    {
      img: 'images/grid-list/00-52-29-429_640.jpg',
      title: 'Breakfast',
      author: 'jill111',
    },
    {
      img: 'images/grid-list/burger-827309_640.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
    },
    {
      img: 'images/grid-list/camera-813814_640.jpg',
      title: 'Camera',
      author: 'Danson67',
    },
    {
      img: 'images/grid-list/morning-819362_640.jpg',
      title: 'Morning',
      author: 'fancycrave1',
    },
    {
      img: 'images/grid-list/hats-829509_640.jpg',
      title: 'Hats',
      author: 'Hans',
    },
    {
      img: 'images/grid-list/honey-823614_640.jpg',
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      img: 'images/grid-list/vegetables-790022_640.jpg',
      title: 'Vegetables',
      author: 'jill111',
    },
    {
      img: 'images/grid-list/water-plant-821293_640.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
  ];
  
export default class Movie extends Component {
render(){
    return(
        <View style={styles.root}>
        <GridList
        cellHeight={180}
        style={styles.gridList}
        >
        {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        > </GridTile>
            ))}
        </GridList>
        </View>
    )
}
}

const styles = StyleSheet.create({
     root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
});
