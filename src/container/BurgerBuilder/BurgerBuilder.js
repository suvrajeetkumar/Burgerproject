import React, { Component } from 'react';
import Burger from '../../components/Burger/Buger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Ordersum from '../../components/Burger/OrderSummary/OrderSummary'
import BackDrop from '../../components/UI/Backdrop/Backdrop'
import Cncbtn from '../../components/UI/Modal/Continueandclosebtn/Conandclrbtn';
import axios from '../Hoc/Axios'
class BugerBuilder extends Component {

state = {
    ingredients: null,
    price: 4,
    purchasable: false,
    purchasing:false
}

componentDidMount () {
    axios.get('https://burgerapp-8bf5d.firebaseio.com/ingredeints.json')
    .then(response => {
        this.setState({ingredients: response.data})
    })

   
}

updatepurchasestate = () => {
    const ingredeints = {...this.state.ingredients};
    const sum = Object.keys(ingredeints).map(
        keysid => (ingredeints[keysid])
    ).reduce((sum,el) => {
        return sum+el;
    },0)

    this.setState({purchasable: sum >= 0})
    console.log(sum);
}

purchasing = () => {
    this.setState({purchasing: true})
}

removemodalhandler = () => {
    this.setState({purchasing: false})
}

continue = () => {


this.props.history.push('/Checkout/' + this.state.ingredients['Meat'] + '/' + this.state.ingredients['Salad'] + '/' + this.state.ingredients['Cheese'] + '/' + this.state.ingredients['Bacon'] + '/' + this.state.price );

}

addingredienthandler=(type) => {
    let count = this.state.ingredients[type];
    count=count+1;
    const newingredient = {...this.state.ingredients};
    newingredient[type] =count;
    const newprice = this.state.price + 2;
    this.setState({ingredients: newingredient , price : newprice});
    this.updatepurchasestate();
}

removeingredienthandler=(type) => {
    let count = this.state.ingredients[type];
    count=count-1;
    if(count < 0){
        return;
    }
    const newprice = this.state.price - 2;
    const newingredient = {...this.state.ingredients};
    newingredient[type] = count;
    this.setState({ingredients: newingredient , price : newprice});
    this.updatepurchasestate();
}

    render () {
    let sum=null;
    let burger=null;
        if(this.state.ingredients){
            sum = (<div> 
               <Ordersum ingredeints={this.state.ingredients}/><Cncbtn continue={this.continue} close={this.removemodalhandler}/>
            </div>);

            burger = (<div>
                <Burger ingredients={this.state.ingredients} />
                 </div>
            );
        }

        return(
            <div>
                <Modal purchasing={this.state.purchasing} removemodal={this.removemodalhandler}>{sum}</Modal>
                {burger}
                <BuildControls addingredient={this.addingredienthandler} removeingredient={this.removeingredienthandler} purchasing={this.purchasing} purchasable={this.state.purchasable} price={this.state.price}/>
           
            </div>
        );
    }
}

export default BugerBuilder;