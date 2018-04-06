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
import Tab2Naviga from './Tab2Naviga';
export default class Tab2 extends Component {
    static navigationOptions = {
        tabBarLabel: 'Concert'
    }
    render() {
      return (
        <Container style={styles.container}>
               <Tab2Naviga/>
        </Container>
      );
    }
  }
  const styles = StyleSheet.create({
    
      
  
});