import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Inbox extends Component {
    static navigationOptions = {
        tabBarLabel: 'Inbox'
    }
    render(){
        return(
            <View>
                <Text>hi there</Text>
            </View>
        )
    }
}
