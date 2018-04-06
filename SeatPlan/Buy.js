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

export default class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text2:'',
            text1:'',
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
                   <TextInput
          style={{height: 40}}
          placeholder="Enter Credit card number"
          onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}   	
        />
         <TextInput
          style={{height: 40}}
          placeholder="Enter PIN"
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}   	
        />
        <Button full onPress={this.onPress}><Text>SUBMIT</Text></Button></Content>

           )
       }
       onPress(){
           
        Alert.alert(
            'Alert Title',
            'Your payment has Proceed',
            [
              
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          );
        
          
    //       fetch(`http://oracleevents.projects.mrt.ac.lk:3002//order/${params.price}/`, 
    //       {method: 'GET',
    //           }).then((response)=>response.json())
    //           .then((responseJson)=>{ 
    //             Alert.alert(
    //                 'Alert Title',
    //                 'Booking is added',
    //                 [
                      
    //                   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //                   {text: 'OK', onPress: () => console.log('OK Pressed')},
    //                 ],
    //                 { cancelable: false }
    //               )
    //           })
       }
}