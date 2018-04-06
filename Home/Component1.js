/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  Alert, 
  ScrollView,
  AlarmManager,
  ActivityIndicator,
 } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
//import {VideoPlayer} from 'react-native-af-video-player'
import Home from './Home';
import Sample from './Sample';
import * as firebase from "firebase";
import StatusBar from './StatusBar';
import SearchBar from '../SearchBar';
import Event from '../Events/Component2'
const util =require('util');


export default class Component1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      clonedMovies:[]
      // dataSource: new ListView.DataSource({
      //   rowHasChanged: (row1, row2) => row1 !== row2,
      // })
      
    }
    // this.itemsRef = firebase.database().ref('event').orderByValue(); //Order results by child values
    // this.showref  = firebase.database().ref('event/show').orderByValue();
    
    //this.listenForItems(this.itemsRef);
    console.ignoredYellowBox = [
    'Setting a timer'
];
  }

  // listenForItems(itemsRef) {
  //   itemsRef.on('value', (snap) => {
  //     // get children as an array
  //     var items = [];
      
  //     snap.forEach((child) => {
  //       items.push({ 
  //         title: child.child('name').val(),
  //         state: child.child('status').val(),
  //         category: child.child('category').val(),
  //         description: child.child('description').val(),
  //         shows: child.child('shows').val(),
         
  //        _key: child.key
  //       });
  //         // get children as an array
  //   });

  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(items)
  //     });

  //   });
  // }
  
  componentDidMount() { 
    fetch('http://oracleevents.projects.mrt.ac.lk:3002/recentevents',
    {method: 'GET'})
    .then((response)=>response.json())
    .then((responseJson)=>{
        var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.setState({
            isLoading:false,
            clonedMovies: standardDataSource.cloneWithRows(responseJson.data)
        });
    })
    
}
  

render() {
    console.log(this.state.clonedMovies)
  if(this.state.isLoading){
    return(
        <View>
            <ActivityIndicator/>
        </View>
    )
}
return (
    <View>
  
    <ListView 
        dataSource={this.state.clonedMovies}
        
        
        renderRow={
          (rowData)=> 
          <ScrollView 
          style={styles.outcontainer}
          >  
          
          <TouchableOpacity 
            onPress={()=>
               //console.log(rowData)
              this.props.navigation.navigate('Event',{rowData})
            }
          >
          
          <Home rowData={rowData}/>
          
          </TouchableOpacity>
          </ScrollView>
      }
        
        enableEmptySections={true}    //if there are no any title match to given title
        
    />
    
    </View>
    
)
console.log('this is important')
console.log(index)
}
  // renderRow(clonedMovies){
   
  //   //var {navigate}=this.props.navigation;
  //  console.log(clonedMovies);
   
  //  return(
  //         <ScrollView 
  //         style={styles.outcontainer}
  //         >  
  //         <TouchableOpacity 
  //           onPress={()=>this.props.navigation.navigate('Event',{clonedMovies
  //             //title:'abc live',venue:'venue1',datetime:'10th of Sept 2017',time:'06.00 AM'
  //             })}
  //         >
          
  //         <Home clonedMovies={clonedMovies}/>
          
  //         </TouchableOpacity>
  //         </ScrollView> 
  //          );
  //       }
      } 
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'center', 
          backgroundColor:'#d7dce2'
          },
          
          
        
      });

AppRegistry.registerComponent('Component1', () => Component1);
