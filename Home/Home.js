import React, { Component } from 'react';
import { Image ,StyleSheet,TouchableHighlight,View,Text} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button,
   Icon, Left, Body, Right,Title } from 'native-base';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation'; 


export default class Home extends Component {
  constructor(props){
		super(props);
		
		this.state = {
			counter:0
			
    };
    
	
}
componentWillMount(){

}
  render() {
    //console.log(this.props.rowData)
    return (
     
        <Content style={styles.outcontainer}>
          <Card >
            <CardItem style={styles.container}>
              <Left>
                <Thumbnail source={require('./Oracle2.png')} />
                <Body >
                  <Title style={{color:'white'}}>{this.props.rowData.name}            </Title>
                  <Text note>default</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={styles.container} >
              <Image source={{uri: this.props.rowData.image}} 
             style={{width: 400, height: 500, flex: 1}}
              />
            </CardItem>
            <CardItem style={styles.container}>
              
                <Button transparent onPress={this.likeCounter.bind(this)} >
                  <Icon active name="thumbs-up"/>
                  <Text style={{color:'blue'}}>{this.state.counter}</Text>
                </Button>
            </CardItem>
          </Card>
        </Content>
    );
  }
   likeCounter(){
    this.state.counter=this.state.counter+1
    console.log(this.state.counter)
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black'
    },
    outcontainer: {
      backgroundColor: '#111111'
      }
});