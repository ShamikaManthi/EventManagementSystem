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
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body,Button,Icon} from 'native-base';
import RegProfile from '../Login/RegProfile';

export default class ThirdScreen extends Component{
    static navigationOptions ={
        tabBarLabel:'Screen 3',
        
        drawerIcon: <Image style={{height:24,width:24}}
        source={require('../Add_user_icon_(blue).svg.png')}
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
            <Title>Register</Title>
          </Body>
        </Header>    
        <RegProfile/>    
        </Container>
        );    
    }

}