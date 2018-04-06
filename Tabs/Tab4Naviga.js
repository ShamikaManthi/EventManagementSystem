import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import * as firebase from "firebase";
import Drama from '../Drama';
import Event from '../Events/Component2';

const Navigation6 = StackNavigator({
    
    Component1: {screen: Drama } ,
    Event: { screen: Event},
},{
  headerMode:'none'
}
);
export default Navigation6;