import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ToolbarAndroid,
    TouchableOpacity,
    ActivityIndicator
  } from 'react-native';
  import React, {Component} from 'react';
  import Login from './Login';
  import LoginForm from './LoginForm';
  import * as firebase from 'firebase';
  import { StackNavigator,} from 'react-navigation';

  export default class Header extends Component{
    render(){
        return(
            <ImageBackground style={styles.headerBackground} source={require('./headerbg.jpg')}>
            <View style={styles.header}>
            <View style={styles.profilepicWrap}>
              <Image  style={styles.profilepic} source={require('./account_circle.png')}/>
            </View>  
                <Text style={styles.email_text}>   {this.state.user.email}</Text>
                </View>
            </ImageBackground> 
        )

    }

  }

  const styles = StyleSheet.create({
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
        width:180,
        height:180,
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
        fontSize:16,
        color:'#fff',
        fontWeight:'bold'
        
        
      },
  
  
  });