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
  MapView
 } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import PinchZoomView from 'react-native-pinch-zoom-view';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class Concert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datas:{},
            threewheelerprice:0,
            carprice:0,
            clonedCarpark:[],
            content:[],
            isLoading:false,
            sum:0,
            counter:0,
            price:0,totalprice:0
          
        }
        this.onPress = this.onPress.bind(this);
        this.selectCell = this.selectCell.bind(this);
        this.slotPlan=this.slotPlan.bind(this);
        //this.setPrice=this.setPrice.bind(this);
        this.getPrice=this.getPrice.bind(this);
        this.getSelectedCells=this.getSelectedCells.bind(this);
        this.displayNumberOfSeats=this.displayNumberOfSeats.bind(this);
        this.displayPrice=this.displayPrice.bind(this);
        console.ignoredYellowBox = [
        'Setting a timer'
        ];
      }

    componentWillMount() { 
        var {params} = this.props.navigation.state;
    fetch(`http://oracleevents.projects.mrt.ac.lk:3002/displayCarPark/${params.carparkingid}/${params.date}/`, 
    {method: 'GET',
        })
    .then((response)=>response.json())
    .then((responseJson)=>{
        var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.setState({
            totalprice:parseInt(params.price),
            isLoading:false,
            clonedCarpark: responseJson,
            carprice:parseInt(responseJson.carprice),
            threewheelerprice:parseInt(responseJson.threewheelerprice)
        });
    }).catch(function(err){
        console.log(err)
    })
    
}

render(){
    var {params} = this.props.navigation.state;
    console.log(this.state.totalprice)
    console.log(this.state.clonedCarpark.carparkslot)
    return(
        <Content>
       <PinchZoomView>
        <Title style={{color:'#ff0295'}}> CarParking Slots Plan </Title>  
        <Text>
        <Text>
        <MaterialIcons name="favorite" size={12} style={{color:'#0d14e5'}}></MaterialIcons>
        <Text style={{color:'#0d14e5' ,fontWeight: '500'}}> Threewheeler price: {this.state.clonedCarpark.carprice}    </Text></Text>
        <Text>
        <MaterialIcons name="favorite" size={12} style={{color:'#3d0268'}}></MaterialIcons>
        <Text style={{color:'#3d0268' ,fontWeight: '500'}}>   Car price: {this.state.clonedCarpark.threewheelerprice}    </Text></Text></Text>
        <Text><Text>
        <MaterialIcons name="favorite" size={12} style={{color:'#db0fc6'}}></MaterialIcons>
        <Text style={{color:'#db0fc6' ,fontWeight: '500'}}> Threewheeler-Reserved     </Text></Text>
        <Text>
        <MaterialIcons name="favorite" size={12} style={{color:'#f9ea16'}}></MaterialIcons>
        <Text style={{color:'black' ,fontWeight: '500'}}>    Car-Reserved     </Text></Text>
        </Text>
        <Title style={{color:'#070707'}}> Front Side </Title>  
        <ScrollView  >
            {this.slotPlan(this.state.clonedCarpark.carparkslot)}
        </ScrollView>
        </PinchZoomView>
        <Footer >
        <TouchableOpacity onPress={this.displayNumberOfSeats}><Text style={{fontSize:16}}>selected seats: {this.state.counter}   </Text></TouchableOpacity>
        <TouchableOpacity onPress={this.displayPrice}><Text style={{fontSize:16}}>price: {this.state.price}   </Text></TouchableOpacity>
        <TouchableOpacity onPress={this.displayPrice}><Text style={{fontSize:16}}>Total price: {this.state.totalprice}</Text></TouchableOpacity>    
           
            </Footer>
            </Content>
       
    )    
}

displayNumberOfSeats(){
    return(
        Alert.alert(
            'Alert Title',
           'You have selected,'+this.state.counter+' number of slots',
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
            {text: 'Buy it Now', onPress: () => {this.props.navigation.navigate('Buy',{price:this.state.totalprice})
            console.log('Buy it now')}},
            
            {text: 'Add to Cart', onPress: () => {this.props.navigation.navigate('Cart',{price:this.state.totalprice})
        
                
                console.log('Added to the cart')}},
            ],
            { cancelable: false }
          )
        )
    
}


slotPlan(clonedCarslot){
    try{
    console.log('this is going to');
   console.log(this.state.clonedCarpark);
    
           return(
            
            clonedCarslot.map((data,index) => {
                    console.log('this is going to display index');
                    console.log(index),
                    console.log('this is going to display data');
                    console.log(data)
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
        (data==='threewheeler-reserved') ?styles.gridVIPreserved:
        (data==='threewheeler')?styles.gridVIP:
        (data==='car')?styles.gridodc:
        (data==='car-reserved')?styles.gridodcreserved:
        (data==='')?styles.grid:styles.grid)
       
    }
    
    onPress(data){
     return(
        alert = (data==='erase')?alert('you selected cell is invalid'):
        (data==='threewheeler-reserved') ?alert('you selected cell is reserved'):
        (data==='threewheeler')?alert('valid selection'):
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
               'Sorry, You selected slot is invalid',
                [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {
                    this.state.counter=this.state.counter+0,
                    this.state.price=this.state.price+0,
                    this.state.totalprice=this.state.totalprice+0|
                    console.log('you press ok'+this.state.price)
                    }},
                ],
                { cancelable: false }
              )    
                
        }
    
               else if(data==='threewheeler-reserved'){
                
                Alert.alert(
                    'Alert Title',
                   'Sorry, You selected slot is reserved',
                    [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => {
                        this.state.counter=this.state.counter+0,
                        this.state.price=this.state.price+0,
                        this.state.totalprice=this.state.totalprice+0|
                        console.log('you press ok'+this.state.price)
                        }},
                    ],
                    { cancelable: false }
                  )  
               }
               else if(data==='threewheeler'){
                
                Alert.alert(
                    'Alert Title',
                    'You selected slot is threewheeler slot, Do you wish to confirm it ?',
                     [
                     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                     {text: 'OK', onPress: () => {
                         this.state.counter=this.state.counter+1,
                         this.state.price=this.state.price+this.state.threewheelerprice,
                         this.state.totalprice=this.state.totalprice+threewheelerprice|
                         console.log('you press ok'+this.state.price)

                         let slotCat = Object.assign({}, this.state.clonedCarpark.carparkslot);
                         slotCat[index][value] = 'threewheeler-reserved';
                         this.setState({slotCat});
                        }},
                     ],
                     { cancelable: false }
                   )
               }
               else if(data==='car'){
               
                Alert.alert(
                    'Alert Title',
                    'You selected slot is a car-slot, Do you wish to confirm it ?',
                     [
                     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                     {text: 'OK', onPress: () => {
                         this.state.counter=this.state.counter+1,
                         this.state.price=this.state.price+this.state.carprice,
                         this.state.totalprice=this.state.totalprice+carprice|
                         console.log('you press ok'+this.state.price)
                         
                         let slotCat = Object.assign({}, this.state.clonedCarpark.carparkslot);
                         slotCat[index][value] = 'car-reserved';
                         this.setState({slotCat});
                        }},
                     ],
                     { cancelable: false }
                   )
               }
               else if(data==='car-reserved'){
                
                Alert.alert(
                    'Alert Title',
                   'Sorry, You selected slot is reserved',
                    [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => {
                        this.state.counter=this.state.counter+0,
                        this.state.price=this.state.price+0,
                        this.state.totalprice=this.state.totalprice+0|
                        console.log('you press ok'+this.state.price)
                        }},
                    ],
                    { cancelable: false }
                  )  
               }
               else{
                
                return(
                    alert = (data==='erase')?alert('you selected cell is invalid'):
                    (data==='threewheeler-reserved') ?alert('you selected cell is reserved'):
                    (data==='threewheeler')?alert('valid selection'):
                    (data==='odc')?alert('valid selection'):
                    (data==='odc-reserved')? alert('you selected cell is reserved'):
                    (data==='')?alert('you selected cell is invalid'):alert('you selected cell is invalid')
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
          padding: 15,
          backgroundColor:'#070707',
         
      },
      gridErase:{
        borderWidth : 1,
        borderColor: 'black',
        padding: 15,
        backgroundColor:'#8c95a3',
        
    },
    gridVIPreserved:{
        borderWidth : 1,
        borderColor: 'black',
        padding: 15,
        backgroundColor:'#db0fc6',
       
    },
    gridVIP:{
        borderWidth : 1,
        borderColor: 'black',
        padding: 15,
        backgroundColor:'#0d14e5',
        
    },
    gridodc:{
        borderWidth : 1,
        borderColor: 'black',
        padding: 15,
        backgroundColor:'#3d0268',
      
    },
    gridodcreserved:{
        borderWidth : 1,
        borderColor: 'black',
        padding: 15,
        backgroundColor:'#f9ea16',
        
    },
      cellText:{
          fontSize:1
      }
    })