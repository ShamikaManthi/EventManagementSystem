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
  Dimensions, 
  MapView,
  Image,
  TextInput,
  Platform
 } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer,Card } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

const ITEM_WIDTH = Dimensions.get('window').width 

export default class FoodsBeverages extends Component {

  constructor(props) {
    super(props);
   
      this.state = {
      isLoading:true,
      
      clonedFoods:[],
      qty:0,
      price:0,
      fprice:0,
      quantity:0
      
     
    }
    // this.onpress=this.setOrder.bind(this);
  }  
  componentWillMount() { 
    var {params} = this.props.navigation.state;
    fetch(`http://oracleevents.projects.mrt.ac.lk:3002/displayShopProductsOnUser/${params.rowData.shopid}/`,
    {method: 'GET'})
    .then((response)=>response.json())
    .then((responseJson)=>{
        var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.setState({
            
            isLoading:false,
            clonedFoods: standardDataSource.cloneWithRows(responseJson.data)
        });
        this.onPress=this.onPress.bind(this);
    })
    
}
  

render() {

  var {params} = this.props.navigation.state;
    console.log(this.state.clonedFoods)
    console.log(params.rowData.shopid)
  if(this.state.isLoading){
    return(
        <View>
            <ActivityIndicator/>
        </View>
    )
}
// this.state.clonedFoods.map((data) => {
//   console.log('this is going to display index');
//  // console.log(index),
//   console.log('this is going to display data');
//   //console.log(data)})
  return (
    <View>
      
      <ListView dataSource={this.state.clonedFoods}
      renderRow={
        (rowData)=> 
        <ScrollView>
        <Content>
          <Card style={styles.cardItem}>
          <Row style={styles.row}>
            <Col  itemWidth={ITEM_WIDTH/2} style={{ flex: 1}}><Image source={{uri: rowData.image}} style={{width: 120, height: 80, flex: 1}}/></Col>
            <Col itemWidth={ITEM_WIDTH/2} style={{ alignSelf:'stretch', flex: 1,padding:15,}}>
            <Text style={styles.text}>Name: {rowData.name}</Text>
            <Text style={styles.text}>Price: {rowData.price}</Text>
            <Text style={styles.text}>Category: {rowData.category}</Text>
            <Text style={styles.text}>Available Amount: {rowData.amount}</Text>
            <View>
            <TextInput placeholder="Quantity"
                       onChangeText={(qty)=>this.setState({qty})}
                       value={this.state.qty}/></View>

            <Button block style={{height:30}} >
            <Text style={{color:'white'}}>BUY IT NOW</Text>
            </Button ><Text></Text>
            <Button block style={{height:30}}>
            <Text style={{color:'white'}}>ADD TO CART</Text>
            </Button ><Text></Text>
            <Button block style={{height:30}}>
            <Text style={{color:'white'}}>CANCEL</Text>
            </Button >          
            </Col>
            </Row>
          </Card>  
        </Content>  
        </ScrollView>
      }
      />
      <Footer>
        <View>
      <Text style={{fontSize:16}}>selected Items:  {parseInt(this.state.qty)}     </Text>
      <Text style={{fontSize:16}}>Price:  {this.state.fprice}     </Text>
      <Text style={{fontSize:16}}>Total price:  {this.state.price}     </Text>
        </View></Footer>
     </View>
    
)



}
onPress(){
  console.log('pressed');
}
    
}
const styles = StyleSheet.create({
  foodBox:{
    borderWidth : 1,
    borderColor: 'black',
    paddingBottom: 2,
    paddingTop: 2,
    alignSelf:'stretch',
    padding:25,
    backgroundColor:'white',
    
  },
  row:{
    flex:1,
    // alignSelf:'stretch',
    
  },
  cardItem:{
    height:250,
  },
  text:{
    fontFamily:'Roboto',
    color:'#1119b2'
  }
})