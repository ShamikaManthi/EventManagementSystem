import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

class Seatallocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{},
            vipprice:0,
            odcprice:0
        }
        this.updateSeatAllocation = this.updateSeatAllocation.bind(this);
    }

    updateSeatAllocation(){
        axios.post('http://localhost:3002/updateSeatAfterUserBuy', {
            eventid:this.props.match.params.eventId,
            showid:this.props.match.params.showId,
            seats:this.state.datas.seats,
            
            
          })
          .then(function (response) {
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });

    axios.post('http://localhost:3002/updateSeatsOnOrder', {
            orderid:this.props.match.params.orderId,
            vip:this.state.vipprice,
            odc:this.state.odcprice,
            
            
          })
          .then(function (response) {
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });
}
    
    componentWillMount() {
        axios.post('http://localhost:3002/displayShowDetailsToUser', {
            eventid:this.props.match.params.eventId,
            showid:this.props.match.params.showId
                })
                .then( (response) => {
                  this.setState({datas: response.data.data},() => {
                                   });
                  
                })
                .catch( (error) => {
                  console.log("event error",error);
                });
    }

    getSeatNum(value1,value2,value3){
        console.log('value1',value1 );
        console.log('value2',value2 );
        console.log('value2',value3 );
        if(value3==='VIP'){
            console.log(this.state.datas.vipprice);
            let jasper = Object.assign({}, this.state.datas.seats);
            console.log(this.state.datas);
            jasper[value1][value2] = 'VIP-reserved';
            this.setState({jasper});
            
            this.setState(prevState => ({
                vipprice: prevState.vipprice + this.state.datas.vipprice
              }));
        }if(value3==='VIP-reserved'){
            let jasper = Object.assign({}, this.state.datas.seats);
            console.log(this.state.datas);
            jasper[value1][value2] = 'VIP';
            this.setState({jasper});
            this.setState(prevState => ({
                vipprice: prevState.vipprice - this.state.datas.vipprice
              }));
        }if(value3==='odc'){
            let jasper = Object.assign({}, this.state.datas.seats);
            console.log(this.state.datas);
            jasper[value1][value2] = 'odc-reserved';
            this.setState({jasper});
            console.log(jasper);
            this.setState(prevState => ({
                odcprice: prevState.odcprice + this.state.datas.odcprice
              }));
        }if(value3==='odc-reserved'){
            let jasper = Object.assign({}, this.state.datas.seats);
            console.log(this.state.datas);
            jasper[value1][value2] = 'odc';
            this.setState({jasper});
            console.log(jasper);
            this.setState(prevState => ({
                odcprice: prevState.odcprice - this.state.datas.odcprice
              }));
        }
    
    }
    

    render() {
        console.log(this.state.datas.seats);
        if(this.state.datas.seats !== undefined){
            var m =  Object.entries(this.state.datas.seats).map((description, i) => {  
                console.log('des',description);
                console.log('des-1',description[1]);
                return (
                  
                <div>
                <div>
                 <tr>
                <td key={i} className={description[1][0]} onClick={this.getSeatNum.bind(this,i,0,description[1][0])}>
                <p  > </p>
                </td>
                <td className={description[1][1]} onClick={this.getSeatNum.bind(this,i,1,description[1][1])}>
                <p key={i}>  </p>
                </td>
                <td  className={description[1][2]} onClick={this.getSeatNum.bind(this,i,2,description[1][2])}>
                <p key={i}>  </p>
                </td> 
                <td  className={description[1][3]} onClick={this.getSeatNum.bind(this,i,3,description[1][3])}>
                <p key={i}>  </p>
                </td>        
                <td  className={description[1][4]} onClick={this.getSeatNum.bind(this,i,4,description[1][4])}>
                <p key={i}>  </p>
                </td>     
                <td  className={description[1][5]} onClick={this.getSeatNum.bind(this,i,5,description[1][5])}>
                <p key={i}>  </p>
                </td>     
                <td  className={description[1][6]} onClick={this.getSeatNum.bind(this,i,6,description[1][6])}>
                <p key={i}>  </p>
                </td>     
                <td  className={description[1][7]} onClick={this.getSeatNum.bind(this,i,7,description[1][7])}>
                <p key={i}>  </p>
                </td>  
                </tr>
                </div>
                </div>
                        )
                });
        }
        

        
        return (
            <div className="container-new">
                Seat allocation
                <p>{this.props.match.params.eventId}</p>
                <p>{this.props.match.params.showId}</p>
                <p>{this.props.match.params.orderId}</p>
                <p>VIP Price - {this.state.vipprice}</p>
                <p>ODC Price - {this.state.odcprice}</p>
                <div className="col-lg-12">
                                    <div className="col-lg-2">Preview</div> 
                                    <div className="col-lg-8">{m}</div>
                                    </div>
                <div><button className="btn btn-default" onClick={this.updateSeatAllocation}>Submit</button></div>
                <Link className="btn btn-default" to={`/Carparking/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Edit Car Park Date</Link>

            </div>
        );
    }
}

export default Seatallocation;