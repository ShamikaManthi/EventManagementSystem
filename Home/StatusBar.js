import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    AlarmManager
  } from 'react-native';
  import { Container, Header, Content, Card, CardItem,
     Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


export default class StatusBar extends Component {
  render() {
    return (
      
      <Header style={styles.outcontainer} >
      
      <Text style={styles.headingtitle} >{this.props.title}</Text>
      </Header>
      
    );
  }
}
const styles = StyleSheet.create({
        outcontainer: {
          backgroundColor: '#111111'
          },
        headingtitle: {
          color: 'blue',
          fontWeight: '400',
          fontSize: 30,
          textAlign:'center'
        }
})
AppRegistry.registerComponent('StatusBar', () => StatusBar);