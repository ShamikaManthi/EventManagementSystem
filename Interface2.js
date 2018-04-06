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
  ActivityIndicator, 
  FlatList,
  Image} from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import  GridList  from 'react-native-grid-list';
import { GridTile } from 'material-ui/GridList/GridTile';

const items = [
    { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' } },
    { thumbnail: { uri: 'https://lorempixel.com/200/200/city' } },
    { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' } },
    { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
  ];
   
  export default class Interface2 extends Component {
    renderItem = ({ item, index }) => (
        <View style={styles.item}>
        <View style={styles.flex} />
      <Image style={styles.image} source={item.thumbnail} />
      <Text style={styles.name}>
            {item.title}
          </Text>
      </View>
    );
   
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.welcome}>
              Grid Layout
            </Text>
            <View style={styles.flex}>
          <GridList
            showSeparator
            data={items}
            numColumns={2}
            renderItem={this.renderItem}
          />
          
          </View>
        </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop: 20,
    },
    image: {
     padding: 10,
      height: 250,
      borderRadius: 10,
    },
    flex: {
        flex: 1,
      },
      item: {
        height: 250,
        backgroundColor: '#CCCCCC',
        padding: 10,
      },
  });