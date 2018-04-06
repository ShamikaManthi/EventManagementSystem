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
import RegisterForm from './RegisterForm';
import Profile from './Profile';
import PasswordReset from './PasswordReset';

const Navigation3 = StackNavigator({
    
  RegisterForm: {screen: RegisterForm } ,
    Profile: { screen: Profile},
    PasswordReset: { screen: PasswordReset},
},{
  headerMode:'none'
}
);
export default Navigation3;