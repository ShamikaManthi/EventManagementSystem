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
  Image} from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import Home from './Home/HomeMovie';
import * as firebase from "firebase";
import Event from './Events/Component2';
import GridLayout from 'react-native-layout-grid';

export default class Movie extends Component {

    render(){
        return(
            <FlatList/>
            {
                [
                    {
                      img: 'events-n-exb-2015.jpg',
                      title: 'Events',
                      author: 'jill111',
                    },
                    {
                      img: 'image.jpg',
                      title: 'Concert',
                      author: 'pashminu',
                    },
                    {
                      img: 'digital-movie-theater.jpg',
                      title: 'Movie',
                      author: 'Danson67',
                    },
                    {
                      img: '48.jpg',
                      title: 'Drama',
                      author: 'fancycrave1',
                    },
                    {
                        img: 'events-n-exb-2015.jpg',
                        title: 'Events',
                        author: 'jill111',
                    },
                    {
                        img: 'image.jpg',
                        title: 'Concert',
                        author: 'pashminu',
                    },
                    {
                        img: 'digital-movie-theater.jpg',
                        title: 'Movie',
                        author: 'Danson67',
                    },
                    {
                        img: '48.jpg',
                        title: 'Drama',
                        author: 'fancycrave1',
                    },
                  ]
            }
        )
    }
}