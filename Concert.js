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
import Home from './Home/HomeConcert';
import * as firebase from "firebase";
import Event from './Events/Component2'

export default class Concert extends Component {
    
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
      fetch('http://oracleevents.projects.mrt.ac.lk:3002/recenteventscat/Concert')
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
    
      <View 
      //style={styles.container}
       >
    
      <ListView 
          dataSource={this.state.clonedMovies}
          renderRow={
            (rowData)=> 
              // if(rowData.category==='concert'){
              //   return(
              //   console.log(this.state.clonedMovies.category))
              // }
            
            <ScrollView 
            style={styles.outcontainer}
            >  
            <TouchableOpacity 
              onPress={()=>this.props.navigation.navigate('Event',{rowData
                //title:'abc live',venue:'venue1',datetime:'10th of Sept 2017',time:'06.00 AM'
                })}
            >
            
            <Home rowData={rowData}/>
            
            </TouchableOpacity>
            </ScrollView>
            }
            
        
          enableEmptySections={true}    //if there are no any title match to given title
      />
      </View>
  )
  }
  
    //  constructor(props) {
    //     super(props);
    //     this.state = {
    //       dataSource: new ListView.DataSource({
    //         rowHasChanged: (row1, row2) => row1 !== row2,
    //       }),
    //       dataSource2: new ListView.DataSource({
    //         rowHasChanged: (row1, row2) => row1 !== row2,
    //       })
    //     };
    //     this.itemsRef = firebase.database().ref('event').orderByValue(); //Order results by child values
    //     this.showref  = firebase.database().ref('show').orderByValue();
    //     this.listenForItems(this.itemsRef);
    //     this.listenForShows(this.showref);
    //     console.ignoredYellowBox = [
    //     'Setting a timer'
    // ];
    //   }
    
      // listenForItems(itemsRef) {
      //   itemsRef.on('value', (snap) => {
      //     // get children as an array
      //     var items = [];
      //     var date =[];
      //     snap.forEach((child) => {
      //      if(child.child('category').val()==='concert'){
      //       items.push({
      //         title: child.child('name').val(),
      //         state: child.child('status').val(),
      //         category: child.child('category').val(),
      //         description: child.child('description').val(),
              //shows: child.child('shows').val(),
              // venue1: child.child('venue/venue').val(),
              // venue2: child.child('venue/hall').val(),
              // starttime: child.child('starttime').val(),
              // endtime: child.child('endtime').val(),
              // datetime: child.child('date&time').val(),
              // venue: child.child('venue').val(),
              // time: child.child('time').val(),
        //      _key: child.key
        //     });
        // }
              // get children as an array
        //       snap.child('shows').forEach((child) => {
        //        console.log(child.child('date').val());
        //         date.push({
        //           date: child.child('date').val(),
        //           _key: child.key
        //       })
        //     }) 
          
        // });
        
      //     this.setState({
      //       dataSource: this.state.dataSource.cloneWithRows(items)
      //     });
    
      //   });
      // }
      // listenForShows(showRef) {
      //   showRef.on('value', (snap) => {
      //     // get children as an array
      //     var shows = [];
      //     snap.forEach((child) => {
      //       shows.push({
      //         name: child.child('name').val(),
      //         date: child.child('date').val(),
      //         venue1: child.child('venue/venue').val(),
      //         venue2: child.child('venue/hall').val(),
      //         starttime: child.child('starttime').val(),
      //         endtime: child.child('endtime').val(),
      //        _key: child.key
      //       });
      //     });
    
      //     this.setState({
      //       dataSource2: this.state.dataSource2.cloneWithRows(shows)
      //     });
    
      //   });
      // }
      
      // componentDidMount() {
      //   this.listenForItems(this.itemsRef);
      //   this.listenForShows(this.showref);
      // }
    // render() {
      
    // return (
    //     <View 
    //     //style={styles.container}
    //     >
    //     <ListView 
    //         dataSource={this.state.dataSource}
    //         dataSource2={this.state.dataSource2}
    //         renderRow={this.renderRow.bind(this)}
    //         enableEmptySections={true}    //if there are no any title match to given title
    //     />
    //     </View>
    // )
    // }
    //   renderRow(items){
       // console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
        //var {navigate}=this.props.navigation;
       // console.log(items);
       
      //  return(
      //         <ScrollView 
      //         style={styles.outcontainer}
      //         >  
      //         <TouchableOpacity 
      //           onPress={()=>this.props.navigation.navigate('Event',{items
      //             //title:'abc live',venue:'venue1',datetime:'10th of Sept 2017',time:'06.00 AM'
      //             })}
      //         >
              
      //         <Home items={items}/>
              
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
    
