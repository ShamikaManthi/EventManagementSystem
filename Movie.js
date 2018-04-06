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
  ActivityIndicator } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import Home from './Home/HomeMovie';
import * as firebase from "firebase";
import Event from './Events/Component2'
export default class Movie extends Component {
    
     static navigationOption= {
       title:'First Component1',
     };
  
     constructor(props) {
      super(props);
      this.state = {
        isLoading:true,
        clonedMovies:[]
      }
      console.ignoredYellowBox = [
        'Setting a timer'
    ];
      }
    
      componentDidMount() { 
        fetch('http://oracleevents.projects.mrt.ac.lk:3002/recenteventscat/Movie')
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
                // if(rowData.category==='Films')
              
              <ScrollView 
              style={styles.outcontainer}
              >  
              <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Event',{rowData})}
              >
              
              <Home rowData={rowData}/>
              
              </TouchableOpacity>
              </ScrollView>
              }
          
            enableEmptySections={true}    //if there are no any title match to given title
        />
        </View>
    );
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
      
    
