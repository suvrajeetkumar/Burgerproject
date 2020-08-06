import React from 'react';

const ordersum  = (props) => {
    const ingredeintsum = Object.keys(props.ingredeints).map(
        keysid => {
        return <p>{keysid} = {props.ingredeints[keysid]}</p>
        }
    );

    return (
        <div>
            <p style={{color:'red'}}>YOUR ORDER HAS BEEN PLACED</p>
            <p>{ingredeintsum}</p>
        </div>
    )
};

export default ordersum;