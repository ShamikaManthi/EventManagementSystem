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
  Dimensions, 
  MapView
 } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import HTML from 'react-native-render-html';
import PinchZoomView from 'react-native-pinch-zoom-view';

export default class Order extends Component {
    
        constructor(props) {
            super(props);
            this.state = {
                datas:{},
                vipprice:0,
                odcprice:0,
                clonedOrder:[],
                isLoading:false,
            }
            console.ignoredYellowBox = [
                'Setting a timer'
            ];
        }
        componentWillMount() { 
            var {params} = this.props.navigation.state;
        fetch('http://oracleevents.projects.mrt.ac.lk:3002/addOrder', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                showid : params.rowData.showid,
                name  : params.rowData.name,
                eventid  : params.rowData.eventid ,
                carparkingid   : params.rowData.carparkingid ,
                shopid   : params.rowData.shopid  ,
                date    : params.rowData.date
              
            }),
          })
          .then((response)=>response.json())
          .then((responseJson)=>{
              var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      
              this.setState({
                  
                  clonedOrder: standardDataSource.cloneWithRows(responseJson.data)
    
              });
          })
        }
    render(){
        var {params} = this.props.navigation.state;
        console.log(this.state.clonedOrder)
        return(
           <View><Text>Hi </Text></View>
           
        )
        
    }
       
    
    }
    const styles = StyleSheet.create({
        container: {
         
          alignItems:'center', 
          alignSelf:'stretch'
          },
          row:{
            flex:1,
            
          },
          seatPlan:{
            alignItems:'center', 
            
          },
          grid:{
              borderWidth : 1,
              borderColor: 'black',
            //   paddingBottom: 5,
            //   paddingTop: 5,
            //   paddingLeft:5,
              padding:5,
              backgroundColor:'#070707',
             
             // flexDirection: 'row'
          },
          gridErase:{
            borderWidth : 1,
            borderColor: 'black',
            // paddingBottom: 5,
            // paddingTop: 5,
            // paddingLeft:5,
            padding:5,
            backgroundColor:'#8942f4',
            // width:50,
            // height:50,
           // flexDirection: 'row'
        },
        gridVIPreserved:{
            borderWidth : 1,
            borderColor: 'black',
            // paddingBottom: 5,
            // paddingTop: 5,
            // paddingLeft:5,
            padding:5,
            backgroundColor:'#db0fc6',
           // width:50,
           // height:50,
            //flexDirection: 'row'
        },
        gridVIP:{
            borderWidth : 1,
            borderColor: 'black',
            // paddingBottom: 5,
            // paddingTop: 5,
            // paddingLeft:5,
            padding:5,
            backgroundColor:'#0d14e5',
            // width:50,
            // height:50,
            // flexDirection: 'row'
        },
        gridodc:{
            borderWidth : 1,
            borderColor: 'black',
            // paddingBottom: 5,
            // paddingTop: 5,
            // paddingLeft:5,
            padding:5,
            backgroundColor:'#3d0268',
            // width:50,
            // height:50,
            // flexDirection: 'row'
        },
        gridodcreserved:{
            borderWidth : 1,
            borderColor: 'black',
            // paddingBottom: 5,
            // paddingTop: 5,
            // paddingLeft:5,
            padding:5,
            backgroundColor:'#f9ea16',
            // width:50,
            // height:50,
            // flexDirection: 'row'
        },
          cellText:{
              fontSize:1
          }
        
          
          
        
      });