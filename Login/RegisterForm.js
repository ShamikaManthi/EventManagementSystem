import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View,TextInput,TouchableOpacity,Text,AsyncStorage,
	navigator,ActivityIndicator,ToolbarAndroid,KeyboardAvoidingView,StatusBar,Image,ImageBackground } from 'react-native';
import * as firebase from 'firebase';
import Login from './Login';
import { StackNavigator,} from 'react-navigation';
const util = require('util');

export default class LoginForm extends Component{
    static navigationOption = {
        title:'Register'
    }
    constructor(props){
		super(props);
		
		this.state = {
			loading: false,
			email:'',
            pass:'',
            pass2:'',
			id:this.props.id
			
		};
		this.signup=this.signup.bind(this);
}
    render(){
        const content = this.state.loading ? <ActivityIndicator size="large"/> :
        <View behavior="padding" style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <TextInput 
                    placeholder="Email" 
                    placeholderTextColor="rgba(255,255,255,10)" 
                    returnKeyType="next"
                    onSubmitEditing={()=>this.passwordInput.focus()}
                    onChangeText={(email)=>this.setState({email})}
                    value={this.state.email}
                    keyboardType='email-address'
                    style={styles.input}/>
        <TextInput 
                    placeholder="Password" 
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,10)" 
                    returnKeyType="next"
                    ref={(input) => this.passwordInput = input}
                    onSubmitEditing={()=>this.passwordInput1.focus()}
                    onChangeText={(pass)=>this.setState({pass})}
                    value={this.state.pass}
                    style={styles.input}/>
        <TextInput 
                    placeholder="Confirm Password" 
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,10)" 
                    returnKeyType="go"
                    ref={(input) => this.passwordInput1 = input}
                    onChangeText={(pass2)=>this.setState({pass2})}
                    value={this.state.pass2}
                    style={styles.input}/>    
        
        <TouchableOpacity onPress={this.signup} style={styles.buttonContainer}>
        <Text  style={styles.buttonText}>SIGNUP</Text>    
        </TouchableOpacity>
        </View>
        return(
            // <View style={styles.container1}>            
            <KeyboardAvoidingView behavior="padding" style={styles.container1}>
            <ImageBackground style={styles.headerBackground} source={require('./headerbg.jpg')}>
            <View style={styles.logoContainer}>
            {/* <Image 
            style={styles.logo}
            source={require('../Oracle2.png')}/> */}
            {/* <Text style={styles.title}>look it and make it</Text> */}
            </View>
            <View style={styles.formContainer}>
                {content}
            <Text style={styles.title}>Powered by react-native</Text>
            </View>
            </ImageBackground> 
            </KeyboardAvoidingView>	 
            // </View>
                
        );

    }
    async signup() {
        if(this.state.pass===this.state.pass2){
		try {
			this.setState({
				loading:true
			});
			await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
			 		.then((userData) => {
                            // this.props.navigation.navigate('Login')
                            this.props.navigation.navigate('Profile')
						    alert('Your account was created!');
					 })
			console.log('Signed up');
			this.setState({
				// Clear out the fields when the user logs in and hide the progress indicator.
				email: '',
                pass: '',
                pass2:'',
				loading: false
			  });
		} catch (error) {
			this.setState({
				loading:true
			});
			console.log(error.toString()+">>signup")
			alert("Account creation failed: " + error.message );
			this.setState({
                loading:false,
                email: '',
                pass: '',
                pass2:'',
			});
        }
    }
    else{
        alert("password do not match with each");
        this.setState({
            // Clear out the fields when the user logs in and hide the progress indicator.
            email: '',
            pass: '',
            pass2:'',
            loading: false
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