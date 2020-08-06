import React from 'react';

const Cncbtn = (props) => {
    return (
    <div>
        <button onClick={props.close}>back</button>
        <button onClick={props.continue}>continue</button>
    </div>
    )
}

export default Cncbtn;