import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    
    Image
  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import {  } from 'react-native-elements';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body,Button,Icon,Card,Item,Input} from 'native-base';
import App from '../App';
import HomeNavi from '../HomeNavi';
import SearchBar from '../SearchBar';
import Cart from '../Cart/Cart';
import * as firebase from "firebase";

export default class FirstScreen extends Component{

    static navigationOptions ={
        drawerLabel: 'Home',
        drawerIcon:
            <Image style={{height:24,width:24}}
              source={require('../download.png')}
             // style={[styles.icon, {tintColor: tintColor}]}
            />,
         contentOptions: {
            activeTintColor: '#e91e63',
            itemsContainerStyle: {
                 marginVertical: 0,
                },
            iconContainerStyle: {
                opacity: 1
                }
      }

    }
    constructor(props){
        super(props);
        this.state ={
            search:''
        }
        this.searchbar=this.searchbar.bind(this);
        this.showref  = firebase.database().ref();
        
    }

    
    
    onPress(){
        // console.log('this is cart');
        return(
            <View>
                <Cart/>
                </View>
        )
    }
    render(){
        return (
        <Container>
         <Header style={{backgroundColor:'#27045b'}}>
            <Button transparent
                onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                title='Open DrawerNavigator'>
            <Icon name='menu' color='white' />
            </Button>
           
            <Right/>
            <Button>
                  <Icon name='cart' onPress={()=>this.props.navigation.navigate('Cart')}
                  //{()=>this.props.navigation.navigate('Cart')}
                  />
            </Button>
            </Header>
             
            <Header searchBar rounded>
          <Item>
            <Icon name="search"  />
            <Input 
            placeholder='Search'
            returnKeyType="search"
           onSubmitEditing={this.searchbar}
            onChangeText={(search)=>this.setState({search})}
           value ={this.state.search}
            />
          </Item>
        </Header>
            
         <HomeNavi/>
           
        </Container>
        );    
    }
    searchbar(){
        try{
            const searchRef = showref.child('show').orderByChild('name').startAt(this.state.search);
        console.log(searchRef);
        }catch(error){
          console.log(error.toString())
        }
    }

}
const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    cardContainer:{
      flex:1,
      
    },
    Title:{
       justifyContent:'center',
       marginTop:18,
       fontSize:20,
    }
  });