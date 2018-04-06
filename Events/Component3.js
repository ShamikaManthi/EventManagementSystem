import React, { Component } from 'react';
import { Image ,StyleSheet,TouchableHighlight,View,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button,
   Icon, Left, Body, Right } from 'native-base';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Component3 extends Component {


    render() {
        console.log('with component 3 '+this.props.rowData.date)
        return (
         
            <ScrollView 
            style={styles.outcontainer}
            > 
              <Text>{this.props.rowData.date}</Text>
              </ScrollView>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      //
      backgroundColor:'#424242'
      },
    cardContainer: {
      flex:1,
      width:null,
      alignSelf:'stretch',
      height:55,
      backgroundColor:'black'
    },  
    cardText: {
      color:'#311B92',
      //fontWeight:'900',
      fontSize:14,
      alignSelf:'stretch',
      
      
    },
    eventTitle:{
    backgroundColor:'#424242',
    color:'#fff',
    fontSize:25,
    fontFamily: 'PingFangSC-Thin',
    fontWeight:'900'
  
    },
    headerBackground:{
      flex:1,
      width:null,
      alignSelf:'stretch'
    },
    Thumbnail:{
      height: 300, 
      width: '100%', 
      flex: 1
    }
      
    
  });