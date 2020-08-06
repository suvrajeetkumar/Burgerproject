import React from 'react';
import './Input.css'

const Input = (props) => {
    let inputtp= null;
    switch(props.inputtype){
        case('input'): 
        inputtp = <input className='inputtp'                //input tag
        {...props.inputconfig}                                //  is
        value={props.value}
        onChange={props.eventchange}  />                             //distributed over multiple lines
        ;
        break;
        case('textarea'): 
        inputtp = <input className='inputtp' 
        {...props.inputconfig}
        value={props.value}
        onchanged={props.eventchange}  />;
        break;
        case('select'): 
        inputtp = (
        <select value={props.value}
        onChange={props.eventchange}>
            {props.inputconfig.options.map(options => (
                <option value={options.value} >{options.displayValue}</option>
            ))}
          
        </select>);
        break;
        default: inputtp = 
        <input className='inputtp' 
        {...props.inputconfig}
        value={props.value}
        onChange={props.eventchange}  />;
        break;
    }

    return (
        <div className='wrapper'>
            <label className='label'>{props.label}</label>
            {inputtp}
        </div>
    )
}

export default Input;