import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import * as firebase from "firebase";
import Movie from '../Movie';
import Event from '../Events/Component2';

const Navigation5 = StackNavigator({
    
    Component1: {screen: Movie } ,
    Event: { screen: Event},
},{
    headerMode:'none'
}
);
export default Navigation5;