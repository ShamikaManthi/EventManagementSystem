import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import * as firebase from "firebase";
import LoginForm from './LoginForm';
import Login from './Login';
import Profile from './Profile';
import PasswordReset from './PasswordReset';
import Component1 from '../Home/Component1';

const Navigation4 = StackNavigator({
    Profile: {screen:Profile},
    PasswordReset: { screen: PasswordReset},
    LoginForm: {screen: LoginForm } ,
    Home:{screen:Component1}
},{
  headerMode:'none'
}

);
export default Navigation4;