import React, { Component } from 'react';
import { Image ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button,
   Icon, Left, Body, Right } from 'native-base';
import { StackNavigator,} from 'react-navigation'; 

export default class Sample2 extends Component {
    render() {
        
        return (
        
      <Content >  
          <Card style={styles.box}>
            <CardItem >
              <Left>
                <Thumbnail source={require('./Oracle2.png')} />
                <Body >
                  <Text style={{color:'#02183d'}}>{this.props.items.title}</Text>
                  <Text note>default</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={styles.container} >
              <Image source={{uri: 'http://www1.pictures.zimbio.com/gi/Enrique+Iglesias+Heroes+Concert+Show+Y4N3yobszgUl.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
 
        );
    }
}
const styles = StyleSheet.create({
	container: {
        backgroundColor: 'white',
        height:200,
        width:200
 
    },
    box:{
        borderColor:'#02183d',
        borderWidth:5
    },
    text:{
        
    },
    outcontainer: {
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center'

        }
    
	
});