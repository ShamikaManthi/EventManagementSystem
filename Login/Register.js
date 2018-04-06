import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View,Image,Text,KeyboardAvoidingView,ToolbarAndroid} from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Component1 from './LoginComponent1';
import * as firebase from 'firebase';


export default class Register extends Component {
	static navigationOption = {
        title:'Register'
    };
	constructor(props){
		super(props);
		
		this.state = {
			id:false
		};

}
	render(){
		const content = this.state.id ? <Component1/>:
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
		<View style={styles.logoContainer}>
		<Image 
		style={styles.logo}
		source={require('../Oracle2.png')}/>
		<Text style={styles.title}>look it and make it</Text>
		</View>
		<View style={styles.formContainer}>
		<RegisterForm/>
		<Text style={styles.title}>Powered by react-native</Text>
		</View>
		</KeyboardAvoidingView>	;
		
		return(
		<View style={styles.container}>
		{content}
		</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	logo: {
		width: 200,
		height: 200
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		fontWeight: '100',
		marginTop: 10,
		fontSize: 15,
		textAlign: 'center',
		opacity: 0.6
	}
});
AppRegistry.registerComponent('Login', () => Login);
//AppRegistry.registerComponent('AuthFirebase', () => App);