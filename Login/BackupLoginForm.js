import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View,TextInput,TouchableOpacity,Text,AsyncStorage,
	navigator,ActivityIndicator,ToolbarAndroid ,KeyboardAvoidingView,Image} from 'react-native';
import * as firebase from 'firebase';
import Login from './Login';
import { StackNavigator,} from 'react-navigation';
const util = require('util');

export default class LoginForm extends Component{
    static navigationOption = {
        title:'LoginForm'
    };
	constructor(props){
		super(props);
		
		this.state = {
			loading: false,
			email:'',
			pass:'',
			id:this.props.id
			
		};
		this.login=this.login.bind(this);
		this.gotoProfile = this.gotoProfile.bind(this);
		//this.signup=this.signup.bind(this);
}
	render(){
		console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
		
		const content = this.state.loading ? <ActivityIndicator size="large"/> :
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<View style={styles.container}>
				<TextInput style={styles.text}
							placeholder="Email"
							placeholderTextColor="rgba(255,255,255,0.7)"
							returnKeyType="next"
							onSubmitEditing={()=>this.passwordInput.focus()}
							onChangeText={(email)=>this.setState({email})} //
							value={this.state.email}   							//
							style={styles.input}
					/>
				<TextInput 
							placeholder="Password"
							placeholderTextColor="rgba(255,255,255,0.7)"
							returnKeyType="go"
							secureTextEntry
							style={styles.input}
							ref={(input)=>this.passwordInput=input}
							onChangeText={(pass)=>this.setState({pass})} //
							value={this.state.pass} //
					/>
					
			<TouchableOpacity onPress={this.login} 
			//onPress={()=>this.props.navigation.navigate()
			style={styles.buttonContainer}>
			<Text style={styles.buttonText}>LOGIN
			</Text>
			</TouchableOpacity>
			{/* <TouchableOpacity onPress={()=>navigate('Register')} 
			style={styles.buttonContainer}>
			<Text style={styles.buttonText}>SIGNUP
			</Text>
			</TouchableOpacity> */}
			</View>
			</KeyboardAvoidingView>	;
		return(	
			 <View style={styles.container}>
			<ToolbarAndroid
				style={styles.toolbar}
			title="Sign" />
            <View style={styles.body}> 
				{content}
			<Text style={styles.title}>Powered by react-native</Text>
			</View>
			</View>
			
		);
	}
async login() {
		try {
			this.setState({
				loading:true
			});
			await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
				.then((userData) => { 
					this.props.navigation.navigate('Profile')
					// AsyncStorage.setItem('userData', JSON.stringify(userData));
					console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
					alert('Successfully Logged In!');
					
                })
			console.log("Logged In!");
			//this.gotoProfile()
			this.setState({
				email: '',
				pass: '',
				loading: false,
				//id:true
			});
			//<Login id='1'/>
			console.log("hey");
		} catch (error) {
			this.setState({
				loading:true,
				email: '',
				pass: '',
			});
			console.log(error.toString()+"login>>")
			alert("Account login failed: " + error.message );
			this.setState({
				loading:false
			});
		}
	
	}
// signup(){
// 	this.props.navigation.navigate('Register')
// 	  }
gotoProfile(){
	console.log("here there");
	this.props.navigation.navigate('Profile')
}	 
async logout(){ 
	try{
		firebase.auth().onAuthStateChanged(firebaseUser=>{
		if(firebaseUser){ 
			console.log(firebaseUser);
		}else{
			console.log('not logged in');
		}
	});
	
}catch (error) {
	console.log(error.toString()+"logout>>")
}
}
} 
const styles = StyleSheet.create({
	container: {
		padding: 20,
		
	},
	container1: {
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
	input: {
		height: 40,
		backgroundColor:'rgba(255,255,255,0.2)',
		marginBottom: 30,
		color: 'white',
		paddingHorizontal: 15,
		fontSize:20
	},
	buttonText: {
		color: 'white',
		fontSize: 30
	},
	buttonContainer: {
		backgroundColor: 'rgba(255,255,255,0.4)',
		paddingVertical: 10,
		marginBottom:10
	},
	buttonContainer2: {
		backgroundColor: 'rgba(255,255,255,0.1)',
		paddingVertical: 10,
		marginBottom:10
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: '900',
		color: 'black',
	},
	text: {
		fontSize: 30
	},title: {
		color: 'white',
		fontWeight: '100',
		marginTop: 10,
		marginBottom:5,
		fontSize: 15,
		textAlign: 'center',
		opacity: 0.6
	}
	
});
AppRegistry.registerComponent('LoginForm', () => Login);


<Title style={styles.Title}>
            <Text style={{color:'#D500F9'}}>O</Text><Text style={{color:'#0D47A1'}}>R
            </Text><Text style={{color:'#FFFF00'}}>A</Text><Text style={{color:'#D50000'}}>C</Text>
            <Text style={{color:'#fff'}}>L</Text><Text style={{color:'#E91E63'}}>E</Text>
            <Text style={{color:'#00C853'}}>__E</Text><Text style={{color:'#FFC107'}}>V</Text><Text style={{color:'#F4511E'}}>E</Text>
            <Text style={{color:'#fff'}}>N</Text><Text style={{color:'#78909C'}}>T</Text><Text style={{color:'#00E676'}}>
            S</Text></Title>