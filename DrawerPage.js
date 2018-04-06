import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer,Thumbnail,Card,CardItem } from 'native-base';

import * as firebase from "firebase";
//const util =require('util');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
export default class DrawerPage extends Component {

    
      
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
        }
      }

    componentWillMount() {
        // get the current user from firebase
        const userData = firebase.auth().currentUser;
        if(userData){
        this.setState({
          user: userData,
          loading: false
        });
      }else{
          this.setState({
              user:{
                  email:'No User'
              }
          })
      }
    }

    render(){
        return(
            <View>
            <View>
                <ImageBackground style={styles.headerBackground} source={require('./Login/headerbg.jpg')}>
                <View style={styles.profilepicWrap}>
                <Image  style={styles.profilepic} source={require('./Login/account_circle.png')}/>
                <Text style={styles.email_text}>{this.state.user.email}</Text>
                 </View>
                </ImageBackground>
                
             </View>  
             <View>
              
             <Button full light style={styles.titleContainer} onPress={this.gotoHome.bind(this)}>
             <Left>
             <Icon active name="home"  style={{color:'#1A237E'}}/>
             </Left>
             <Left>
             <Text style={styles.drawerText}>Home</Text>
             </Left>
           </Button>
           <Button full light style={styles.titleContainer} onPress={this.gotoReg.bind(this)}>
             <Left>
             <Icon active name="ios-person-add-outline"  style={{color:'red'}}/>
             </Left>
             <Left>
             <Text style={styles.drawerText}>Register</Text>
             </Left>
           </Button>
           <Button full light style={styles.titleContainer} onPress={this.gotoLog.bind(this)}>
             <Left>
             <Icon active name="ios-lock-outline"  style={{color:'#1A237E',fontSize:35}}/>
             </Left>
             <Left>
             <Text style={styles.drawerText}>Login</Text>
             </Left>
           </Button>
           <Button full light style={styles.titleContainer} onPress={this.gotoProf.bind(this)}>
             <Left>
             <Icon active name="ios-person"  style={{color:'#1A237E'}}/>
             </Left>
             <Left>
             <Text style={styles.drawerText}>Profile</Text>
             </Left>
           </Button>
          
           </View>
             </View>
        )
    }
    gotoHome(){
        this.props.navigation.navigate('Home');
    }
    gotoReg(){
        this.props.navigation.navigate('RegisterForm');
    }
    gotoLog(){
        this.props.navigation.navigate('LoginForm');
    }
    gotoProf(){
        this.props.navigation.navigate('Profile');
    }

}

const styles = StyleSheet.create({
	container: {
    backgroundColor: '#000',
    flex:1
    },
    outcontainer: {
      backgroundColor: '#111111'
      },
      email_container: {
        padding: 20
      },
      primaryButton:{
       
      },
      buttonContainer:{
      backgroundColor: 'rgba(255,255,255,0.2)',
      paddingVertical: 10,
      marginBottom:10,
      alignItems:'center',
      justifyContent:'center',
    },
    body:{
      
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
      width:null,
      height:175,
      borderRadius:100,
      borderColor:'rgba(0,0,0,0.4)',
      borderWidth:16,
      alignItems:'center',
      justifyContent:'center',
    },
    profilepic:{
      flex:1,
      width:75,
      //height:5,
      //alignSelf:'stretch',
      borderRadius:100,
      borderColor:'#fff',
      borderWidth:4
    },
    email_text: {
      marginTop:20,
      fontSize:20,
      color:'#fff',
      fontWeight:'bold'
      
      
    },
    primaryButtonText:{
      color:'white',
      fontWeight:'bold',

    },
    drawerText:{
        fontWeight:'bold',
        fontSize:16,
        color:'#1A237E'
    }


});