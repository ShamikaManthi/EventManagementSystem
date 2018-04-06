import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  ImageBackground,
  Image,
  ActivityIndicator,FlatList
} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer,Thumbnail,Card,CardItem } from 'native-base';
import { StackNavigator,} from 'react-navigation';
import * as firebase from "firebase";
const util =require('util');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Component3 from './Component3';


export default class Component2 extends Component {
    static navigationOption= {
        title:'Second Component1',
      };

      constructor(props) {
        super(props);
       
          this.state = {
          isLoading:false,
          clonedShows:[],
          clonedMovies:[],
          
          orderKey:''
        }
        this.onpress=this.setOrder.bind(this);
      }  
      componentWillMount(){
        var {params} = this.props.navigation.state;
        var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
         clonedShows: standardDataSource.cloneWithRows(params.rowData.shows)
      });


       }
    render(){
      //console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
       var {params} = this.props.navigation.state;

 
        
        // Object.entries(this.state.clonedShows._dataBlob.s1).map((data) => {
        //   console.log('this is going to display data');
        //   console.log(data[0]);
        // }
    //  )
        if(this.state.isLoading){
          return(
              <View>
                  <ActivityIndicator/>
              </View>
          )
      }
      
      
        return(
        <Container>
         <Button full style={{backgroundColor:'#424242'}} onPress={()=>{
            this.props.navigation.navigate('Component1')
          }}><Left><Text style={{color:'#fff' ,fontSize:16}}>BACK</Text></Left>
        </Button>
        <Content style={styles.container} >
        <Content>
             <Image  source={{uri: params.rowData.image}} 
                style={{width: 400, height: 500, }}/>
                 <Title style={styles.eventTitle}>{params.rowData.name}</Title>

                 <Card>
                      <Title style={{color:'#03A9F4'}}>Description</Title>
                      <Text style={styles.cardText}>{params.rowData.description}</Text>
                   
                   <Title style={{color:'#00E676'}}>Shows</Title>
                   </Card>
                   </Content> 
          <ListView 
          dataSource={this.state.clonedShows}
          renderRow={
            (rowData)=>
              <Card ><Text>
                      {/* <MaterialIcons name="theaters" size={24} style={{color:'#FF3D00'}}> */}
                      <Text style={{color:'#FF3D00',fontSize:16,fontWeight:'bold',textAlignVertical:'center'}}>   VENUE            :</Text>
                      {/* </MaterialIcons> */}
                      <Text style={styles.cardText} >   {rowData.district}</Text></Text>
                      <Text>
                      <Text style={{color:'#76FF03',fontSize:16,fontWeight:'bold',textAlignVertical:'center'}}>   LOCATION     :</Text>
                      <Text style={styles.cardText}>    {rowData.venue}</Text></Text>
                      <Text>
                      <Text style={{color:'#304FFE',fontSize:16,fontWeight:'bold',textAlignVertical:'center'}}>   DATE               :</Text>
                      <Text style={styles.cardText}>    {rowData.date}</Text></Text>
                      <Text>
                      <Text style={{color:'#EC407A',fontSize:16,fontWeight:'bold',textAlignVertical:'center'}}>   START TIME :</Text>
                      <Text style={styles.cardText}>    {rowData.time}</Text></Text>
                      

                      
                      <Button  block onPress={()=>{
                                      //console.log('this'+rowData)
                      this.props.navigation.navigate('SeatPlan',{rowData})|this.setOrder(rowData,params.rowData.name)|console.log('name'),console.log(params.rowData.name)} 
                      }>
                        <Text style={{color:'white', fontSize:16}}>Book Now</Text>
                      </Button>
                      <View><Text></Text>
                        </View>
                       <Button  block onPress={()=>this.props.navigation.navigate('FoodsBeverages',{rowData})
                      }>
                        <Text style={{color:'white', fontSize:16}}>Foods & Beverages</Text>
                      </Button> 
                       <View><Text></Text>
                        </View> 
                      {/* <Button  block onPress={()=>this.props.navigation.navigate('CarPark',{rowData})
                      }>
                        <Text style={{color:'white', fontSize:16}}>CarPark Booking</Text>
                      </Button> */}
                     
                   </Card> 
           }
         />
            </Content> 
            </Container>
        )


    }
    setOrder(rowData,name){
      console.log('fdjjjjjjabfhdbvhafjdvbafb')
      console.log(name)
      console.log(rowData.showid)
      console.log(rowData.eventid)
      console.log(rowData.carparkingid)
      console.log(rowData.shopid)
      console.log(rowData.date)
      fetch('http://oracleevents.projects.mrt.ac.lk:3002/addOrder/Justice League/-L3T1dNLiZ23tLTqX0zs/-L0xHaQO2rOJor4XYW5X/-L3Sw1dKdkYur4W4tQVn/-L32NtnB-ospy1OKhHt2/2018-01-24/', 
      {method: 'GET',
        })
     
        .then( (response) => {
          this.setState({
            orderKey: response}
      
              );
      }).catch(function(err) {
        
        console.log(err+'error')
      })
     console.log('//orderkey'+this.state.orderKey)
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
    fontSize:16,
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