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
  AsyncStorage
 } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import HTML from 'react-native-render-html';
import PinchZoomView from 'react-native-pinch-zoom-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import {Row,Cell,EditableCell} from 'react-native-data-table';
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
export default class Concert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datas:{},
            vipprice:0,
            odcprice:0,
            clonedSeatPlan:[],
            content:[],
            isLoading:false,
            sum:0,
            counter:0,
            price:0,
            shopid:'',
            clonedParams:'',
            carparkingid:'',
            date:''

            
        }
        this.onPress = this.onPress.bind(this);
        this.selectCell = this.selectCell.bind(this);
        this.seatPlan=this.seatPlan.bind(this);
        this.setPrice=this.setPrice.bind(this);
        this.getPrice=this.getPrice.bind(this);
        this.getSelectedCells=this.getSelectedCells.bind(this);
        this.displayNumberOfSeats=this.displayNumberOfSeats.bind(this);
        this.displayPrice=this.displayPrice.bind(this);
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }
    componentWillMount(){
        var {params} = this.props.navigation.state;
        var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
         clonedSeatPlan: params.rowData.seats,
         odcprice:params.rowData.odcprice,
         vipprice:params.rowData.vipprice,
         clonedParams:params.rowData.shopid,
         carparkingid:params.rowData.carparkingid,
         date:params.rowData.date
      })
   
     
       }
render(){
    var {params} = this.props.navigation.state;
    console.log(this.state.clonedParams)
        //clonedShopid=this.state.clonedParams.shopid;
    //console(clonedShopid)
    return(
        <Content>
       <PinchZoomView>
        <Title style={{color:'#ff0295'}}> Seat Plan </Title>  
        <Text>
        <Text>
        <MaterialIcons name="favorite" size={12} style={{color:'#0d14e5'}}></MaterialIcons>
        <Text style={{color:'#0d14e5' ,fontWeight: '500'}}> VIP price: {params.rowData.vipprice}  </Text></Text>
        <Text>
        <MaterialIcons name="favorite" size={12} style={{color:'#3d0268'}}></MaterialIcons>
        <Text style={{color:'#3d0268' ,fontWeight: '500'}}>   ODC price: {params.rowData.odcprice}  </Text></Text></Text>
        <Text><Text>
        <MaterialIcons name="favorite" size={12} style={{color:'#db0fc6'}}></MaterialIcons>
        <Text style={{color:'#db0fc6' ,fontWeight: '500'}}> VIP-Reserved     </Text></Text>
        <Text>
        <MaterialIcons name="favorite" size={12} style={{color:'#f9ea16'}}></MaterialIcons>
        <Text style={{color:'black' ,fontWeight: '500'}}>    ODC-Reserved     </Text></Text>
        <Text>
        <MaterialIcons name="favorite" size={12} style={{color:'#070707'}}></MaterialIcons>
        <Text style={{color:'black' ,fontWeight: '500'}}>    Others </Text></Text></Text>
        <Title style={{color:'#070707'}}> Front Side </Title>  
        <ScrollView  >
            {this.seatPlan(this.state.clonedSeatPlan)}
        </ScrollView>
        </PinchZoomView>
        <Footer >
            
            <TouchableOpacity onPress={this.displayNumberOfSeats}><Text style={{fontSize:16}}>selected seats: {this.state.counter}  </Text></TouchableOpacity>
            <TouchableOpacity onPress={this.displayPrice}><Text style={{fontSize:16}}>Total price: {this.state.price}   </Text></TouchableOpacity>
            
            {/* <Button  block onPress={()=>this.props.navigation.navigate('FoodsBeverages',{shopid:this.state.clonedParams,price:this.state.price})
                      }>
                        <Text style={{color:'white', fontSize:16}}>Foods & Beverages</Text>
                      </Button> */}
            <View>          
            <Button  full info onPress={()=>this.props.navigation.navigate('CarPark',{carparkingid:this.state.carparkingid,date:this.state.date,price:this.state.price})
                      }>
                        <Text style={{color:'white', fontSize:16}}>CarPark Booking</Text>
            </Button>          
           </View>
            </Footer>
            </Content>
       
       
    )
    
}
displayNumberOfSeats(){
    return(
        Alert.alert(
            'Alert Title',
           'You have selected,'+this.state.counter+' number of seats',
            [
            {text: 'OK', onPress: () => console.log('Buy it now'), style: 'cancel'},
            ],
            { cancelable: false }
          )
        )
}

displayPrice(){
    return(
        Alert.alert(
            'Alert Title',
           'your claimed payment is Rs, '+this.state.price,
            [
            {text: 'Cancel', onPress: () => {this.setState({
                counter:0,
                price:0,
                
            })|console.log('Cancel Pressed')}, style: 'cancel'},
            {text: 'Buy it Now', onPress: () => {this.props.navigation.navigate('Buy',{price:this.state.price})
            console.log('Buy it now')}},
            
            {text: 'Add to Cart', onPress: () => {this.props.navigation.navigate('Cart',{price:this.state.price})
        
                
                console.log('Added to the cart')}},
            ],
            { cancelable: false }
          )
        )
    
}
   
seatPlan(clonedSeatPlan){
    try{
    // console.log('this is going to');
   // console.log(this.state.clonedSeatPlan);
    
           return(
            
         clonedSeatPlan.map((data,index) => {
                    // console.log('this is going to display index');
                    // console.log(index),
                    // console.log('this is going to display data');
                    // console.log(data)
            return(
                <ScrollView horizontal >
                   <View style={styles.seatPlan}>
                 
                    <Row>
                    <TouchableOpacity onPress={() =>this.setPrice(data[0],index,0)}><Col style={this.selectCell(data[0])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[1],index,1)}><Col style={this.selectCell(data[1])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[2],index,2)}><Col style={this.selectCell(data[2])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[3],index,3)}><Col style={this.selectCell(data[3])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[4],index,4)}><Col style={this.selectCell(data[4])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[5],index,5)}><Col style={this.selectCell(data[5])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[6],index,6)}><Col style={this.selectCell(data[6])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[7],index,7)}><Col style={this.selectCell(data[7])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[8],index,8)}><Col style={this.selectCell(data[8])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[9],index,9)}><Col style={this.selectCell(data[9])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[10],index,10)}><Col style={this.selectCell(data[10])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[11],index,11)}><Col style={this.selectCell(data[11])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[12],index,12)}><Col style={this.selectCell(data[12])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[13],index,13)}><Col style={this.selectCell(data[13])}><Text >o</Text></Col></TouchableOpacity> 
                    <TouchableOpacity onPress={() =>this.setPrice(data[14],index,14)}><Col style={this.selectCell(data[14])}><Text >o</Text></Col></TouchableOpacity> 

                    </Row>
                    
                   </View> 
                </ScrollView>
                  
)
      
               }
                )
            )
   
        }catch (error) {
            
            console.log(error.toString())
          }
}
selectCell(data){

    return(
    content = (data==='erase')? styles.gridErase:
    (data==='VIP-reserved') ?styles.gridVIPreserved:
    (data==='VIP')?styles.gridVIP:
    (data==='odc')?styles.gridodc:
    (data==='odc-reserved')?styles.gridodcreserved:
    (data==='')?styles.grid:styles.grid)
   
}

onPress(data){
 return(
    alert = (data==='erase')?alert('you selected cell is invalid'):
    (data==='VIP-reserved') ?alert('you selected cell is reserved'):
    (data==='VIP')?alert('valid selection'):
    (data==='odc')?alert('valid selection'):
    (data==='odc-reserved')? alert('you selected cell is reserved'):
    (data==='')?alert('you selected cell is invalid'):alert('you selected cell is invalid')
 )
}
getSelectedCells(){

    return(
        console.log(this.state.counter)
    )
}
setPrice(data,index,value){
    try{
    if(data==='erase'){
        
            Alert.alert(
                'Alert Title',
               'Sorry, You selected seat is invalid',
                [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {
                    this.state.counter=this.state.counter+0,
                    this.state.price=this.state.price+0|
                    console.log('you press ok'+this.state.price)
                    }},
                ],
                { cancelable: false }
              )
            }

           else if(data==='VIP-reserved'){
            
                // this.state.counter=this.state.counter+0,
                // this.state.price=this.state.price+0
                // console.log(this.state.price)
                Alert.alert(
                    'Alert Title',
                    'Sorry, You selected seat is reserved',
                     [
                     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                     {text: 'OK', onPress: () => {
                         this.state.counter=this.state.counter+0,
                         this.state.price=this.state.price+0|
                         console.log('you press ok'+this.state.price)}},
                     ],
                     { cancelable: false }
                   )
           }
           else if(data==='VIP'){
            
            Alert.alert(
                'Alert Title',
                'You selected seat is VIP, Do you wish to confirm it ?',
                 [
                 {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                 {text: 'OK', onPress: () => {
                     this.state.counter=this.state.counter+1,
                     this.state.price=this.state.price+this.state.vipprice|
                     console.log('you press ok'+this.state.price)
                     
                     let seatCat = Object.assign({}, this.state.clonedSeatPlan);
                     seatCat[index][value] = 'VIP-reserved';
                     this.setState({seatCat});
                    }},
                 ],
                 { cancelable: false }
               )
           }
           else if(data==='odc'){
           
            Alert.alert(
                'Alert Title',
                'You selected seat is ODC, Do you wish to confirm it ?',
                 [
                 {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                 {text: 'OK', onPress: () => {
                     this.state.counter=this.state.counter+1,
                     this.state.price=this.state.price+this.state.odcprice|
                     console.log('you press ok'+this.state.price)
                     
                     let seatCat = Object.assign({}, this.state.clonedSeatPlan);
                     seatCat[index][value] = 'odc-reserved';
                     this.setState({seatCat});
                    }},
                 ],
                 { cancelable: false }
               )
           }
           else if(data==='odc-reserved'){
            
            Alert.alert(
                'Alert Title',
                'Sorry, You selected seat is reserved',
                 [
                 {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                 {text: 'OK', onPress: () => {
                     this.state.counter=this.state.counter+0,
                     this.state.price=this.state.price+0|
                     console.log('you press ok'+this.state.price)}},
                 ],
                 { cancelable: false }
               )
           }
           else{
            
            Alert.alert(
                'Alert Title',
               'Sorry, You selected seat is invalid',
                [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {
                    this.state.counter=this.state.counter+0,
                    this.state.price=this.state.price+0|
                    console.log('you press ok'+this.state.price)}},
                ],
                { cancelable: false }
              )
           }
        }catch(err){
            console.log(err)
        }

}
getPrice(){
    
        return(
            console.log(this.state.price)
        )
    }
}
const styles = StyleSheet.create({
    container: {
     
      alignItems:'center', 
      alignSelf:'stretch'
      },
      row:{
        flex:1,
        
      },
      seatPlan:{
        alignItems:'center', 
        
      },
      grid:{
          borderWidth : 1,
          borderColor: 'black',
          paddingBottom: 2,
          paddingTop: 2,
        //   paddingLeft:5,
          padding:7,
          backgroundColor:'#070707',
         
         // flexDirection: 'row'
      },
      gridErase:{
        borderWidth : 1,
        borderColor: 'black',
        paddingBottom: 2,
        paddingTop: 2,
        // paddingLeft:5,
        padding:7,
        backgroundColor:'#8c95a3',
        // width:50,
        // height:50,
       // flexDirection: 'row'
    },
    gridVIPreserved:{
        borderWidth : 1,
        borderColor: 'black',
        paddingBottom: 2,
        paddingTop: 2,
        // paddingLeft:5,
        padding:7,
        backgroundColor:'#db0fc6',
       // width:50,
       // height:50,
        //flexDirection: 'row'
    },
    gridVIP:{
        borderWidth : 1,
        borderColor: 'black',
        paddingBottom: 2,
        paddingTop: 2,
        // paddingLeft:5,
        padding:7,
        backgroundColor:'#0d14e5',
        // width:50,
        // height:50,
        // flexDirection: 'row'
    },
    gridodc:{
        borderWidth : 1,
        borderColor: 'black',
        paddingBottom: 2,
        paddingTop: 2,
        // paddingLeft:5,
        padding:7,
        backgroundColor:'#3d0268',
        // width:50,
        // height:50,
        // flexDirection: 'row'
    },
    gridodcreserved:{
        borderWidth : 1,
        borderColor: 'black',
        paddingBottom: 2,
        paddingTop: 2,
        // paddingLeft:5,
        padding:7,
        backgroundColor:'#f9ea16',
        // width:50,
        // height:50,
        // flexDirection: 'row'
    },
      cellText:{
          fontSize:1
      }
    
      
      
    
  });