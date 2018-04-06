/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Alert
} from 'react-native';


import * as firebase from 'firebase';

export default class LoginComponent1 extends Component {
  render() {
    
    
    return (
      
      <View ><Text style={styles.title} >Hi there</Text></View>
    );
  }
}
const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: 'black'
    
  },
  title: {
    color:'white'
  }
} );
AppRegistry.registerComponent('Component1', () => Component1);
