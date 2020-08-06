import React, { Component } from 'react';
import Checkoutsum from '../../components/Burger/Order/Checkoutsumary'
import Contactdata from './Contactdata/Contactdata'
import {Route} from 'react-router-dom'
class Checkout extends Component {

state = {
    ingredeints:{
        Meat:Number(this.props.match.params.meat),
        Cheese:Number(this.props.match.params.cheese),
        Salad:Number(this.props.match.params.salad),
        Bacon:Number(this.props.match.params.bacon)
    },
    price:Number(this.props.match.params.price)
}

backbtn = () =>{
    this.props.history.goBack();
}

continuebtn = () => {
    this.props.history.push(this.props.match.url + '/Contactdata');
}



render(){
    return(
    <div>
    <Route path={this.props.match.url + '/Contactdata'} render={() => (<Contactdata ingredeints={this.state.ingredeints} price={this.state.price}/>)}></Route>
    <Checkoutsum 
    ingredeints={this.state.ingredeints}
    continue={this.continuebtn}
    back={this.backbtn}
    />
    
        </div>
    
    )
}

}

export default Checkout;