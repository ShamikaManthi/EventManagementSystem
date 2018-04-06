import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View,TextInput,TouchableOpacity,Text,AsyncStorage,
	navigator,ActivityIndicator,ToolbarAndroid ,KeyboardAvoidingView} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Content } from 'native-base';
import * as firebase from "firebase";
export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state ={
            search:''
        }
       
    }
  render() {
    return (
      <Content>
        <Header searchBar rounded>
          <Item>
            <Icon name="search"  />
            {/* <Input placeholder="Search" />
            <Icon name="people" /> */}
            <Input 
            placeholder='Search'
            returnKeyType="search"
            onSubmitEditing={this.searchbar}
            onChangeText={(search)=>this.setState({search})}
            value ={this.state.search}
            />
          </Item>
        </Header>
      </Content>
    );
  }
  
}