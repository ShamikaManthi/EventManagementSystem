import React, { Component } from 'react';
import { AppRegistry, ScrollView,View,Text,StyleSheet,Image,ImageBackground } from 'react-native';
import App from './App';
import Test1 from './Test1';
// import LoginForm from './Login/LoginForm';
// import Login from './Login/Login';
// import Register from './Login/Register';
// import RegisterForm from './Login/RegisterForm';
 import * as firebase from "firebase";
// import Profile from './Login/Profile';
import FirstScreen from './ToFirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen';
import FourthScreen from './Screen/FourthScreen';
import FifthScreen from './Screen/FifthScreen';
import Json from './Home/Json';
import Anim from './Home/Anim';
import Profile from './Login/Profile';
import LoginForm from './Login/LoginForm';
import DrawerPage from './DrawerPage';
import Component1 from './Home/Component1';
import Interface from './Interface';
import Interface2 from './Interface2';
import HomeNavi from './HomeNavi';
//import SeatPlan from './SeatPlan/SeatPlan';

import { StackNavigator,TabNavigator,DrawerNavigator,DrawerItems } from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import RecentEvent from './Interfaces/RecentEvent';
var config = {
    apiKey: "AIzaSyB3JKVnDtYMlz0qqqeB456_d8jZPPkL6S4",
    authDomain: "event-48918.firebaseapp.com",
    databaseURL: "https://event-48918.firebaseio.com",
    projectId: "event-48918", 
    storageBucket: "event-48918.appspot.com",
    messagingSenderId: "724603602751"
  };
  firebase.initializeApp(config);

  const userData = firebase.auth().currentUser;
  const CustomDrawerContentComponent = (props)=>(
    <Container>
      <Header style={{height:220,backgroundColor:'#000f28'}}>
        <Body>
        <ImageBackground style={styles.drawerImage} source={require('./Login/headerbg.jpg')}>
                <View style={styles.profilepicWrap}>
                <Image  style={styles.profilepic} source={require('./Login/account_circle.png')}/>
                <Text style={styles.email_text}>{firebase.auth().currentUser?firebase.auth().currentUser.email:'No User'}</Text>
                 </View>
                </ImageBackground>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...props}/>
          </Content>
      </Container>
  )

  const DrawerExample = DrawerNavigator(
    {
      
        Home:{ screen:FirstScreen,},
        Login:{screen:SecondScreen,},
        Register:{screen:ThirdScreen,},
        Account:{screen:FourthScreen,},
        Messages:{screen:FifthScreen,},
        
      },  
      { initialRouteName:'Home',
        contentComponent:CustomDrawerContentComponent,
        drawerOpenRoute:'DrawerOpen',
        drawerCloseRoute:'DrawerClose',
        drawerToggleRoute:'DrawerToggle'
      },
        {
          //contentComponent:props=><DrawerPage{...props}/>
          // initialRouteName:"Home"
        }
    );
    const MainNavigation = StackNavigator({
      Home:{ screen:DrawerExample,},
      LoginForm: {screen: SecondScreen } ,
      Profile: { screen: FourthScreen},
      RegisterForm: { screen: ThirdScreen},
  },
  
  );
  const styles = StyleSheet.create({
    drawerImage:{
      flex:1,
      height:220,
      width:null,
      alignSelf:'stretch',
      
      //borderRadius:75
    },
    headerBackground:{
      
      width:null,
      height:175,
      //alignSelf:'stretch'
    },
    header:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      padding:20,
      backgroundColor:'rgba(0,0,0,0.5)',
    },
    profilepicWrap:{
      marginTop:50,
      width:null,
      height:125,
      borderRadius:100,
      borderColor:'rgba(0,0,0,0.4)',
      borderWidth:16,
      alignItems:'center',
      justifyContent:'center',
    },
    profilepic:{
      flex:1,
      width:75,
      // height:0,
      // alignSelf:'stretch',
      borderRadius:100,
      borderColor:'#fff',
      borderWidth:1
    },
    email_text: {
      //marginTop:20,
      fontSize:15,
      color:'#fff',
      // fontWeight:'bold'
  },
  })

AppRegistry.registerComponent('Project1', () => DrawerExample);
