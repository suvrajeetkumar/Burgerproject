import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'
import './orderbutton.css'

const lebellist = [
    {label:'Meat', type:'Meat'},
    {label:'Salad', type:'Salad'},
    {label:'Cheese', type:'Cheese'},
    {label:'Bacon', type:'Bacon'},
];

const BuildControls = (props) => {
    return <div className='BuildControls'>
        <p>TOTAL AMOUNT : {props.price}</p>
        {lebellist.map(cntl => {
        return <BuildControl 
        label={cntl.label}
        key={cntl.label}
        added={() => props.addingredient(cntl.type)}
        removed={() => props.removeingredient(cntl.type)}/>

    })}
    <button className='OrderButton' disabled={!props.purchasable} onClick={props.purchasing}>place order</button>
    </div>
}

export default BuildControls;