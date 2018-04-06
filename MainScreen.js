import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import * as firebase from "firebase";
import LoginForm from './Login/LoginForm';
import Login from './Login/Login';
import Register from './Login/Register';
import RegisterForm from './Login/RegisterForm';
import Profile from './Login/Profile';
import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen';
import FourthScreen from './Screen/FourthScreen';
import Component1 from './Home/Component1';
import Json from './Home/Json';
import Event from './Events/Component2';
import MainScreen from './MainScreen';
import Concert from './Concert';
import Movie from './Movie';
import Drama from './Drama';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';
import SeatPlan from './SeatPlan/SeatPlan';
import FoodsBeverages from './FoodsBeverages/FoodsBeverages';
import CarPark from './CarPark/CarPark';
import Order from './Order/Order';
import Cart from './Cart/Cart';
import Buy from './SeatPlan/Buy';
import Buy2 from './SeatPlan/Buy2';


const Navigation = StackNavigator({
    
    Component1: {screen:Component1},
    Profile: { screen: Profile},
    Concert :{screen:Concert},
    Movie: {screen:Movie},
    Drama: {screen:Drama},
    Event:{screen:Event},
    Login: {screen: Login } ,
    LoginForm: {screen: LoginForm } ,
    Register: { screen: Register},
    SeatPlan:{screen:SeatPlan},
    FoodsBeverages:{screen:FoodsBeverages},
    CarPark:{screen:CarPark},
    Order:{screen:Order},
    Cart:{screen:Cart},
    Buy:{screen:Buy},
    Buy2:{screen:Buy2}
    
},{
     headerMode:'none',
  // navigationOptions:{
  // headerStyle:{backgroundColor:'black'},
  // headerTitleStyle:{color:'white'},
  // title:'My navi',
  
  // },
}
// {
//     tabBarPosition: 'Top',
//     swipeEnabled: true,
    
//   }
);
// var MainScreenNavigator = TabNavigator({
//     Tab1: {screen: Tab1},
//     Tab2: {screen: Tab2},
//     Tab3: {screen: Tab3},
//     Tab4: {screen: Tab4},
// },
// {
//     tabBarPosition: 'Top',
//     swipeEnabled: true,

// });

// MainScreenNavigator.navigationOptions = {
//     title: 'Top example'
// };

export default Navigation;