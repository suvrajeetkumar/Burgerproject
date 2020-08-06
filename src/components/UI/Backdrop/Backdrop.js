import React from 'react';
import './BackDrop.css';

const BackDrop = (props) => {
    return<div className = 'backdrop' onClick={props.clicked}></div>  
}

export default BackDrop ;
