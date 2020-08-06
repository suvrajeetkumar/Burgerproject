import React from 'react';
import './Modal.css';
import BackDrop from '../Backdrop/Backdrop';
import Auxo from '../../../container/Hoc/Auxo';


const Modal = (props) => {
    let modal=<div></div>;
    if (props.purchasing) {
        modal = 
        <Auxo>
        <BackDrop clicked={props.removemodal}/>
        <div className='Modal'>
                    {props.children}
        </div>
        </Auxo>
        }
    
      
    
    return modal;
        
    };
    

export default Modal;