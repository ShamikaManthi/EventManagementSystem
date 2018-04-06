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
  ActivityIndicator} from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import Home from './Home';
import Sample from './Sample';
import * as firebase from "firebase";
import StatusBar from './StatusBar';
import SearchBar from '../SearchBar';
import Event from '../Events/Component2'
const util =require('util');

export default class Json extends Component {

  
     constructor(props) {
        super(props);
        
        this.state = {
            isLoading:true,
            clonedMovies:[]
        }
    }


    componentDidMount() { 
        fetch('http://oracleevents.projects.mrt.ac.lk:3002/recentevents')
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
    //console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
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
              (rowData)=><Text>Title:{rowData.name},</Text>
          }
         // enableEmptySections={true}    //if there are no any title match to given title
      />  
      </View>
  )
  }
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
  