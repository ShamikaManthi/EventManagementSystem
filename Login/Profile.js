import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ToolbarAndroid,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import React, {Component} from 'react';
import Login from './Login';
import LoginForm from './LoginForm';
import * as firebase from 'firebase';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Button,Card,Icon} from 'native-base';
// Styles specific to the account page
const util =require('util');
export default class Profile extends Component {

  static navigationOption= {
    title:'First Comp',
  };

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
    //console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
    console.log('no users');
    alert('Please Login');
    this.props.navigation.navigate('LoginForm')

  }

  }
  
  render() {
    
    const content = this.state.loading ? <ActivityIndicator size="large"/> :
       this.state.user &&
       
       <ImageBackground style={styles.headerBackground} source={require('./headerbg.jpg')}>
       <View style={styles.header}>
       <View style={styles.profilepicWrap}>
         <Image  style={styles.profilepic} source={require('./account_circle.png')}/>
       </View>  
           <Text style={styles.email_text}>   {this.state.user.email}</Text>
           </View>
       
          
           <TouchableOpacity  onPress={this.logout.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.primaryButtonText}>Logout</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={this.changeEmail.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.primaryButtonText}>Change email</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={this.changePass.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.primaryButtonText}>Change password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.deleteAccount.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.primaryButtonText}>Delete Account</Text>
          </TouchableOpacity> 
          </ImageBackground> 
        
       
      ;
    return (
      <View style={styles.container}>
        
          {content}
       
      </View>
     
    );
  }

  logout() {
    // logout, once that is complete, return the user to the login screen.
    firebase.auth().signOut().then(function() {
      alert('Successfully Logged out!');
      console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
      this.props.navigation.navigate('Login');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
    // this.setState({
    //     user:''
    //     });
        
  }
  changeEmail() {
    var user = firebase.auth().currentUser;
    user.updateEmail("s.manthishamika@gmail.com")
    .then(function() {
      console.log('updated successfully');
      user.sendEmailVerification().then(function() {
        console.log('email is sent');
        // Email sent.
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
      // Update successful.
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
   
  }
  changePass() {
   // console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
    this.props.navigation.navigate('PasswordReset');
    
    }
   
  deleteAccount() {
    var user = firebase.auth().currentUser;
    
    user.delete().then(function() {
      console.log('Account is deleted');
      // User deleted.
    }).catch(function(error) {
      console.log(error);
      // An error happened.
    });
   
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
      flex:1,
      width:null,
      alignSelf:'stretch'
    },
    header:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      padding:20,
      backgroundColor:'rgba(0,0,0,0.5)',
    },
    profilepicWrap:{
      width:120,
      height:120,
      borderRadius:100,
      borderColor:'rgba(0,0,0,0.4)',
      borderWidth:16
    },
    profilepic:{
      flex:1,
      width:null,
      alignSelf:'stretch',
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

    }


});

AppRegistry.registerComponent('Profile', () => Profile);