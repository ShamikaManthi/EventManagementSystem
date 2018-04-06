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
  Image,
  ImageBackground,
  Dimensions,
  FlatList
 } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import GridLayout from 'react-native-layout-grid';
import {Column as Col, Row} from 'react-native-flexbox-grid';

const ITEM_WIDTH = Dimensions.get('window').width

export default class RecentEvent extends Component {

    // renderGridItem = (item) => (
        
          
    //     );

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

      componentWillMount() { 
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
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Grid Layout
      </Text>
      <View style={styles.flex}>
      <FlatList 
      numColumns={2}
      data={this.state.clonedMovies}
       renderItem={
        ({item})=> 
        <View style={styles.item}>
          <TouchableOpacity>
            <View style={styles.flex} />
            <ImageBackground style={{width:ITEM_WIDTH/2}} source={{uri: item.image}} >
            <Footer style={styles.footer}>
            <View >
            <Text>
            <Text style={styles.text}>{item.name}      </Text>
            <Icon  onpress name='star' style={{fontSize: 25, color: 'white'}}/>
           </Text>
  
            <Left>
            <Text style={styles.text2}>by Oracle Events                        </Text>
            </Left>
            </View>
            </Footer>
  
           </ImageBackground></TouchableOpacity>
          </View> 
      }
      />
     </View>
     </View>
        );
    console.log('this is important')
    console.log(index)
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    flex: {
      flex: 1,
      
    },
    item: {
      height: 290,
      backgroundColor: '#CCCCCC',
      
      //padding: 10,
    },
    name: {
      fontSize: 12,
      textAlign: 'center',
      color: '#000000'
    },
    image: {
      //padding: 10,
       height: 290,
       width:null,
       alignSelf:'stretch',
      
     },
   text: {
    //height: '68',
    color:'white',
    fontSize:20,
    fontWeight:'300',
    textAlign: 'justify',
   } ,
   text2: {
    //height: '68',
    color:'white',
    fontSize:13,
    fontWeight:'300',
    textAlign: 'auto',
   } ,
   footer:{
     backgroundColor: 'rgba(0,0,0,0.6)',
     height: 68,
     width:null,
     marginTop:222,
    // paddingHorizontal: 0,
     
    // alignSelf:'stretch',
   } ,
   
  innercontainer: {
    backgroundColor: '#000',
    flex:1
    }
  });