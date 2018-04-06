import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer,Thumbnail,Card,CardItem } from 'native-base';
import Drama from '../Drama';
import Tab4Naviga from './Tab4Naviga';
export default class Tab4 extends Component {
    static navigationOptions = {
        tabBarLabel: 'Dramas'
    }
    render() {
      return (
  <Container style={styles.container}>
        <Tab4Naviga/>
 </Container>
);
}
}
const styles = StyleSheet.create({



});