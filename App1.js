/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import * as firebase from "firebase";

import Inbox from './Messages/Inbox';
import Sent from './Messages/Sent';

var MessageNavigator = TabNavigator({
  Tab1: {screen: Inbox},
  Tab2: {screen: Sent},
  
  
},{
  //headerMode: 'none',
},

{
  tabBarPosition: 'Top',
  // swipeEnabled: true,
  scrollEnabled:true

});


export default MessageNavigator ;