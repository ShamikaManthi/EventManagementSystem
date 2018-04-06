import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import * as firebase from "firebase";
import FirstScreen from './Screen/FirstScreen';
import Cart from './Cart/Cart';
import LoginForm from './Login/LoginForm';

const ToFirstScreen = StackNavigator({
    
    FirstScreen: {screen: FirstScreen } ,
    Cart: { screen: Cart},
    LoginForm:{screen:LoginForm}
},{
   headerMode:'none'
    }

);
export default ToFirstScreen;