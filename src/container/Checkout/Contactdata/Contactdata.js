import React, { Component } from 'react';
import './Contactdata.css';
import axios from '../../Hoc/Axios'
import {Route,Link} from 'react-router-dom'
import Input from '../../../components/UI/Input/Input'
class Cntdata extends Component {
    state={

        orderform:{        
            name:{
                inputtype: 'input',
                inputconfig: {
                    type:'text', 
                    name:'name', 
                    placeholder:'enter your name'
                },
                value:''
            },
            email:{
                inputtype: 'input',
                inputconfig: {
                    type:'email', 
                    name:'email', 
                    placeholder:'enter your email'
                },
                value:''
            },
            street:{
                inputtype: 'input',
                inputconfig: {
                    type:'text', 
                    name:'street', 
                    placeholder:'enter your street'
                },
                value:''
            },
        pincode:{
            inputtype: 'input',
            inputconfig: {
                type:'text', 
                name:'name', 
                placeholder:'enter your name'
            },
            value:''
        },
        dilevery:{
            inputtype: 'select',
            inputconfig:{
                options:[
                    {value: 'fastest' , displayValue : 'fastest'},
                    {value: 'cheapest' , displayValue : 'cheapest'}
                ],
                value:''
            }
        }
    },

        ingredeints:{
            Meat:Number(this.props.ingredeints['Meat']),
            Cheese:Number(this.props.ingredeints['Cheese']),
            Salad:Number(this.props.ingredeints['Salad']),
            Bacon:Number(this.props.ingredeints['Bacon'])
        },
        price:Number(this.props.price),
        name:'',
        email:'',
        address:{
            street:'',
            pincode:''
        }
    }

    orderbtn =(event)=>{
        event.preventDefault();
        let orderlist={};
        for( let i in this.state.orderform){
            orderlist[i] = this.state.orderform[i].value
        }
        const order = {
        ingredeints: this.state.ingredeints,
        price: this.state.price,
        order:  orderlist
    }
    console.log(order.ingredeints)
    axios.post('/orders.json',order)
        .then(response => 
            console.log(response)
            );
    // this.props.history.push('/');
    }

    eventchangedhandler= (event,inputidentifier) => {
        const updatedform={...this.state.orderform};
        const updatedform2={...updatedform};
        updatedform2.value=event.target.value;
        updatedform[inputidentifier]=updatedform2
        this.setState({orderform:updatedform})
    }

    render(){
        const elementarray = [];
        for(let key in this.state.orderform){
            elementarray.push({
                id:key,
                config:this.state.orderform[key]
            })
        };
     let form = elementarray.map(keey => (
            <Input 
            key={keey.id}
            inputtype={keey.config.inputtype}
            inputconfig={keey.config.inputconfig}
            value={keey.config.value}
            eventchange={(event) => this.eventchangedhandler(event,keey.id)}
            ></Input>
        ))

        return(
            <div className='cdata'>
                <h1>Enter your contact details please</h1>
            <form className='form' onSubmit={this.orderbtn}>
            {form}
                <button onClick={this.orderbtn}><Link to='/'>Order</Link></button>
                
            </form>
            </div>
            
        )
    }
}

export default Cntdata;