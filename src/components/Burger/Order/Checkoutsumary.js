import React from 'react';
import Burger from '../Buger'
import './Checkoutsumary.css'
const Checksum = (props) => {
   return <div className='ckout'>
    <h1>YOUR BURGER IS READY HOPE IT TASTES DELICIOUS</h1>
    <Burger ingredients={props.ingredeints}></Burger>
    <button onClick={props.back}>BACK</button>
    <button onClick={props.continue}>CONTINUE</button>
   </div>
    
}

export default Checksum;
    



