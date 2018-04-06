import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    
    Image
  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import { Icon } from 'react-native-elements';
import { Icon,Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body,Button} from 'native-base';
import Profile from '../Login/Profile';
import ProfLogin from '../Login/ProfLogin';

export default class FourthScreen extends Component{
    static navigationOptions ={
        tabBarLabel:'Screen 4',
        
        drawerIcon: <Image style={{height:24,width:24}}
        source={require('../user-male-circle-blue-512.png')}
       // style={[styles.icon, {tintColor: tintColor}]}
      />
    };
    render(){
        return (
        <Container> 
        <Header style={{backgroundColor:'#27045b'}}>
        <Left>    
        <Button transparent
            onPress={()=>this.props.navigation.navigate('DrawerOpen')}
            title='Open DrawerNavigator'>
            <Icon name='menu' />
            </Button>
            </Left>
            <Body>
            <Title>Account</Title>
          </Body>
        </Header>    
        <ProfLogin/>
        </Container>
        );    
    }

}