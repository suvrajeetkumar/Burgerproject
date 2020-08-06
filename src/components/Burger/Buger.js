import React from 'react';
import BurgerIngreint from './BurgerIngredients/BurgerIngreint';
import './Burger.css';

let Burger = (props) => {
    let transingredients = Object.keys(props.ingredients).map(keysid => {
        return [...Array(props.ingredients[keysid])].map((_,index)=>{
            return (
                <BurgerIngreint key={keysid + index} type={keysid} />
            );
        });
    })
    .reduce((arr,el) => {
        return arr.concat(el);
    },[]);

if(transingredients.length === 0){
    transingredients = <p>add something</p>;
}

    return(
    <div className='Burger'>
    <BurgerIngreint type='BreadTop'/>
    {transingredients}
    <BurgerIngreint type='BreadBottom'/>
    </div>
    );
}

export default Burger;