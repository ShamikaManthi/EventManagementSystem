import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer,Thumbnail,Card,CardItem } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Component1 from '../Home/Component1';
import MainScreen from '../MainScreen';

export default class Tab1 extends Component {
    static navigationOptions = {
        tabBarLabel: 'Recents Events'
    }
    render() {
      return (
        <Container style={styles.container}>
           <MainScreen/> 
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    
      
  
});