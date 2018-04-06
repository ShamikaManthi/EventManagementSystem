import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Sent extends Component {
    static navigationOptions = {
        tabBarLabel: 'Sent'
    }
    render(){
        return(
            <View>
                <Text>hi there</Text>
            </View>
        )
    }
}
