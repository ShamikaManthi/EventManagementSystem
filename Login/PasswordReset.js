import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View,TextInput,TouchableOpacity,Text,AsyncStorage,
	navigator,ActivityIndicator,ToolbarAndroid ,KeyboardAvoidingView,Image,ImageBackground} from 'react-native';
import * as firebase from 'firebase';
import Login from './Login';
import { StackNavigator,} from 'react-navigation';
const util = require('util');

export default class PasswordReset extends Component{
    static navigationOption = {
        title:'LoginForm'
    };
	constructor(props){
		super(props);
		
		this.state = {
			loading: false,
			email:'',
      pass1:'',
			pass2:'',
			pass0:'',
			id:this.props.id
			
		};
		
		//this.signup=this.signup.bind(this);
}
	render(){
		console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
		
		const content = this.state.loading ? <ActivityIndicator size="large"/> :
		
			<View  style={styles.container}>
		
				<TextInput 
							placeholder="Email"
							placeholderTextColor="rgba(255,255,255,10)"
							returnKeyType="next"
							ref={(input)=>this.emailInput=input}
							onSubmitEditing={()=>this.passwordInput0.focus()}
							onChangeText={(email)=>this.setState({email})} //
							keyboardType='email-address'
							value={this.state.email}   							//
							style={styles.input}
					/>
						<TextInput 
							placeholder="Old Password"
							placeholderTextColor="rgba(255,255,255,10)"
							returnKeyType="go"
							secureTextEntry
							style={styles.input}
              ref={(input)=>this.passwordInput0=input}
              onSubmitEditing={()=>this.passwordInput1.focus()}
							onChangeText={(pass0)=>this.setState({pass0})} //
							value={this.state.pass0} //
					/>
				<TextInput 
							placeholder="New Password"
							placeholderTextColor="rgba(255,255,255,10)"
							returnKeyType="go"
							secureTextEntry
							style={styles.input}
              ref={(input)=>this.passwordInput1=input}
              onSubmitEditing={()=>this.passwordInput2.focus()}
							onChangeText={(pass1)=>this.setState({pass1})} //
							value={this.state.pass1} //
					/>
          <TextInput 
							placeholder="Confirm New Password"
							placeholderTextColor="rgba(255,255,255,10)"
							returnKeyType="go"
							secureTextEntry
							style={styles.input}
							ref={(input)=>this.passwordInput2=input}
							onChangeText={(pass2)=>this.setState({pass2})} //
							value={this.state.pass2} //
					/>
					
			<TouchableOpacity onPress={this.changePass.bind(this)} 
			style={styles.buttonContainer}>
			<Text style={styles.buttonText}>Submit
			</Text>
			</TouchableOpacity>
		
			</View>
			;
		return(	
		
			<KeyboardAvoidingView behavior="padding" style={styles.container1}>
			<ToolbarAndroid
				style={styles.toolbar}
				title="Sign" />
			<ImageBackground style={styles.headerBackground} source={require('./headerbg.jpg')}>
			<View style={styles.logoContainer}>
		
			
			</View>
			<View style={styles.formContainer}>
			
				{content}
			<Text style={styles.title}>Powered by react-native</Text>
			</View>
			</ImageBackground> 
			</KeyboardAvoidingView>	
			
		
		);
  }
  async changePass() {
    //console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
    try {
			this.setState({
				loading:true
			});
			await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass0)
				.then((userData) => { 
					console.log('Old password and email are correct');
					// AsyncStorage.setItem('userData', JSON.stringify(userData));
				
		var user = firebase.auth().currentUser;
		if(this.state.pass1 ===this.state.pass2){
		var newPassword = this.state.pass1;
		var auth = firebase.auth();
		var emailAddress = this.state.email;
    
		user.updatePassword(newPassword).then(function() {
		console.log('password changed');
		auth.sendPasswordResetEmail(emailAddress).then(function() {
			console.log('password changed email is sent');
				// Email sent.
				alert("Password changed successfully");
				this.setState({
					loading: false
				})
      }).catch(function(error) {
        console.log(error);
        // An error happened.
			});
			
      // Update successful.
    }).catch(function(error) {
			console.log(error);
			this.setState({
				email: '',
				pass1: '',
				pass0: '',
				pass2: '',
				loading: false,
				//id:true
			});
      // An error happened.
		});
	}
	else{
		alert("Passwords do not match with each other");
	}
	})
	
  }catch (error) {
		this.setState({
			loading:true,
			email: '',
			pass1: '',
			pass0: '',
			pass2: '',
		});
		console.log(error.toString())
		alert("Account login failed: " + error.message );
		this.setState({
			loading:false
		});
	}

}
}

const styles = StyleSheet.create({
  container:{
    padding:20
},
container1: {
flex: 1,
backgroundColor: 'black'
},
input:{
    height: 40,
backgroundColor:'rgba(255,255,255,0.2)',
marginBottom: 25,
color: 'white',
paddingHorizontal: 15,
fontSize:20
},
buttonContainer:{
    backgroundColor: 'rgba(255,255,255,0.4)',
paddingVertical: 8,

},
buttonText:{
    textAlign: 'center',
fontWeight: '900',
color: 'black',
},
logo: {
width: 100,
height: 100
},
logoContainer: {
alignItems: 'center',
flexGrow: 2,
//justifyContent: 'center'
},
title: {
color: 'white',
fontWeight: '100',
marginTop: 10,
fontSize: 15,
textAlign: 'center',
opacity: 0.6
},
headerBackground:{
    flex:1,
    width:null,
    alignSelf:'stretch'
  },
});