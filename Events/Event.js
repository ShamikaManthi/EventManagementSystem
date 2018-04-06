import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  ImageBackground
} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer,Thumbnail,Card,CardItem } from 'native-base';
import { StackNavigator,} from 'react-navigation';
const util =require('util');

const showTimes=[
  {date:'1st of Octomber 2017' ,time:'8.30am - 12.30pm'},
  {date:'1st of November 2017' ,time:'9.30am - 12.30pm'},
  {date:'1st of December 2017' ,time:'7.30am - 12.30pm'},
  {date:'1st of August 2017' ,time:'10.30am - 12.30pm'}
]
const venues=[
  {venue:'CR&FC' ,venueLocation:'CR&FC Ground'},
  {venue:'Nelum Pokuna' ,venueLocation:'Hall 1'},
  {venue:'Nelum Pokuna' ,venueLocation:'Hall 2'},
  {venue:'Nelum Pokuna' ,venueLocation:'Hall 3'}
]

export default class Event extends Component {
    static navigationOptions = {
        title: 'Hello',
      };
  constructor(props){
		super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {	
      userDataSource1: ds.cloneWithRows(showTimes),
      userDataSource2: ds.cloneWithRows(venues)
		};
		
}
  render() {
    console.log("this.props.navigation.state=" +util.inspect(this.props.navigation.state, false, null));
    var {params} = this.props.navigation.state;
    return (
      <Container >
          <ImageBackground style={styles.headerBackground} source={require('../Login/headerbg.jpg')}>
        <Content>
        <Content padder style={{backgroundColor:'black'}}>
        <Thumbnail  square source={{uri: 'http://www1.pictures.zimbio.com/gi/Enrique+Iglesias+Heroes+Concert+Show+Y4N3yobszgUl.jpg'}} 
                    style={styles.Thumbnail} />
        <Title style={{color:'white',fontSize:25}}>{params.name}</Title>
        </Content>
        <ScrollView>
        <Content>
            <Card transparent>
              <CardItem>
                  <Body>
                  <Text style={{color:'blue',fontWeight: 'bold'}}>
                      Date/Time
                  </Text >
                  <Text style={{color:'red' ,fontWeight: 'bold'}}>
                     Show Times
                  </Text>
                  {/* <ListView 
                          dataSource={this.state.userDataSource1}
                          renderRow={this.renderRow1.bind(this)}
                      /> */}
                      <View>
                          <Text style={{color:'black',  fontWeight: 'bold'}}>{params.datetime}-</Text>
                          <Text style={{color:'black'}}></Text>
                     </View>
                  </Body>
              </CardItem>
              </Card>
              <Card>
              <CardItem>
                <Body>
                <Text style={{color:'blue',fontWeight: 'bold'}}>
                      Location
                  </Text >
                  <ListView 
                          dataSource={this.state.userDataSource2}
                          renderRow={this.renderRow2.bind(this)}
                      />
                  </Body>
                </CardItem>
              </Card>
              <Card>
              <CardItem>
                  <Body>
                  <Text style={{color:'blue',fontWeight: 'bold'}}>
                      Booking Details
                  </Text >
                  </Body>
              </CardItem>
              </Card>
              <Card>
              <CardItem>
                  <Body>
                  <Text style={{color:'blue',fontWeight: 'bold'}}>
                      Booking Details
                  </Text >
                  </Body>
              </CardItem>
              </Card>
              <Card>
              <CardItem>
                  <Body>
                  <Text style={{color:'blue',fontWeight: 'bold'}}>
                      Booking Details
                  </Text >
                  </Body>
              </CardItem>
              </Card>
        </Content>
        </ScrollView>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
  renderRow2(params){
    return(
        <View>
            <Text style={{color:'black',  fontWeight: 'bold'}}>{params.venue}-</Text>
            <Text style={{color:'black'}}>{params.venue}</Text>
        </View>
    )
  }
  
}
const styles = StyleSheet.create({
headerBackground:{
    flex:1,
    width:null,
    alignSelf:'stretch'
  },
  Thumbnail:{
    height: 200, 
    width: null, 
    flex: 1

  }

})
AppRegistry.registerComponent('Event', () => Event);