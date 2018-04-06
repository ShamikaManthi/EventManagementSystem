import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import * as firebase from "firebase";
import Concert from '../Concert';
import Event from '../Events/Component2';

const Navigation4 = StackNavigator({
    
    Component1: {screen: Concert } ,
    Event: { screen: Event},
},{
   headerMode:'none'
    }

);
export default Navigation4;