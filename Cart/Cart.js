import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ToolbarAndroid,
    TouchableOpacity,
    ActivityIndicator,
    ImageBackground
  } from 'react-native';
  import React, {Component} from 'react';
  
  import * as firebase from 'firebase';
  import { StackNavigator,} from 'react-navigation';
  import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Button,Card,Icon,
    List,ListItem,Thumbnail} from 'native-base';
  // Styles specific to the account page
  const util =require('util');
  export default class Cart extends Component {
  
    static navigationOption= {
      title:'First Comp',
    };
  
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      }
    }
  
    componentWillMount() {
      // get the current user from firebase
      const userData = firebase.auth().currentUser;
      if(userData){
      this.setState({
        user: userData,
        loading: false
      });
    }else{
      console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
      console.log('no users');
      alert('Please Login');
      //this.props.navigation.navigate('LoginForm')
  
    }
  
    }
    render(){
        if(this.state.isLoading){
            return(
            <Content>
             <Spinner color='blue' />
          </Content>
            )
        }
        return(
            <Container>  
            <Content>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-note-a8f4e.appspot.com/o/events%2Fjustice.jpg?alt=media&amp;token=4cd5a705-24f3-4317-8864-8573a6bb3491' }} />
                </Left>
                <Body>
                <Text>Event Name:Justige Leadge</Text>
                  <Text>Show : </Text>
                  <Text>Venue: Savoy Colombo</Text>
                  <Text>Date: 2018-01-24</Text>
                  <Text>Time:</Text>
                  <Text>Seat Type: 6.00PM</Text>
                  <Text>Amount: 600</Text>
                </Body>
                <Right>
                  
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
  

        )
    }
  }  
