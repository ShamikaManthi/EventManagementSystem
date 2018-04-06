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
  MapView,
  AsyncStorage,
  TextInput
 } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

export default class Buy2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            price:0,
            
        }
            
        }
    componentWillMount(){
        var {params} = this.props.navigation.state;
        //var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
   
     
       }
       render(){
        var {params} = this.props.navigation.state;
        // this.setState({
        //     price:price+parseInt(params.price)
        // })
           return(
              
               <Content>
                   <Title style={{color:'brown'}}>Payments:</Title>
                   <Title style={{color:'brown'}}>Your claimed price :{params.price}</Title>
                  
        </Content>

           )
       }
    }