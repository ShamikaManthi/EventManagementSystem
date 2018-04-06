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
  FlatList,
  ImageBackground,
  Image} from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer,Spinner } from 'native-base';
import Home from './Home/HomeMovie';
import * as firebase from "firebase";
import Event from './Events/Component2';
import GridLayout from 'react-native-layout-grid';
//import {GridList, GridTile} from 'material-ui/GridList';
//import { Subheader } from 'material-ui';


const tilesData = [
    // {
    //   img: 'events-n-exb-2015.jpg',
    //   title: 'Events',
    //   author: 'jill111',
    // },
    // {
    //   img: 'image.jpg',
    //   title: 'Concert',
    //   author: 'pashminu',
    // },
    // {
    //   img: 'digital-movie-theater.jpg',
    //   title: 'Movie',
    //   author: 'Danson67',
    // },
    // {
    //   img: '48.jpg',
    //   title: 'Drama',
    //   author: 'fancycrave1',
    // },
    // {
    //     img: 'events-n-exb-2015.jpg',
    //     title: 'Events',
    //     author: 'jill111',
    // },
    // {
    //     img: 'image.jpg',
    //     title: 'Concert',
    //     author: 'pashminu',
    // },
    // {
    //     img: 'digital-movie-theater.jpg',
    //     title: 'Movie',
    //     author: 'Danson67',
    // },
    // {
    //     img: '48.jpg',
    //     title: 'Drama',
    //     author: 'fancycrave1',
    // },
  ];
  const items = [
    { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' } },
    { thumbnail: { uri: 'https://lorempixel.com/200/200/city' } },
    { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' } },
    { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
  ];
  const images=[
   {img: require('./event.jpg'),title:'Recent Events    ', },
    { img:require('./concert.jpg'),title: 'Concerts             ',},
   { img:require('./movie.jpeg'),title: 'Movies               ',},
   { img:require('./48.jpg'),title: 'Dramas               ',}
  ]

export default class Interface extends Component {
    renderGridItem = (item) => (
      
        <View style={styles.item}>
        <TouchableOpacity onPress={() =>this.onPress(item.title)}>
          <View style={styles.flex} />
          <ImageBackground style={styles.image} source={item.img} >
          
          <Footer style={styles.footer}>
          <View >
          <Text>
          <Text style={styles.text}>{item.title}</Text>
          
          <Icon  onpress name='star' style={{fontSize: 23, color: 'white'}}/>
         
          </Text>

          <Left>
          <Text style={styles.text2}>by Oracle Events                        </Text>
          </Left>
          </View>
          </Footer>

         </ImageBackground></TouchableOpacity>
        </View> 
      );

      onPress(data){
        return(
           alert = (data==='Recent Events    ')?this.props.navigation.navigate('Component1'):
           (data==='Concerts             ') ?this.props.navigation.navigate('Concert'):
           (data==='Movies               ')?this.props.navigation.navigate('Movie'):
           this.props.navigation.navigate('Drama')
        )
       }

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
        // fetch('http://oracleevents.projects.mrt.ac.lk:3002/recentevents',
        // {method: 'GET'})
        // .then((response)=>response.json())
        // .then((responseJson)=>{
        //     var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
            this.setState({
                isLoading:false,
               // clonedMovies: standardDataSource.cloneWithRows(responseJson.data)
            });
        // })
        
    }
      render() {
        console.log(this.state.clonedMovies)
        if(this.state.isLoading){
          return(
          <Content>
           <Spinner color='blue' />
        </Content>
          )
      }
        const items = [];
        //TODO: Conventional For loop
        for (let x = 1; x <= 30; x++) {
          items.push({
            name: `Grid ${x}`,
            
          });
        }
        return (
         <View style={styles.flex}>
            
              <GridLayout
                items={images}
                itemsPerRow={2}
                renderItem={this.renderGridItem}
              />
             
            </View>
         
        );
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
        height: 263,
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
         height: 263,
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
       height: 80,
       width:null,
       marginTop:205,
      
     } ,
     
    innercontainer: {
      backgroundColor: '#000',
      flex:1
      }
    });