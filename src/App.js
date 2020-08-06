import React from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerIngridient from './components/Burger/BurgerIngredients/BurgerIngreint';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import BackDrop from './components/UI/Backdrop/Backdrop'
import Checkout from './container/Checkout/Checkout'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <p>toolbar</p>
      <Route path='/'exact component={BurgerBuilder}></Route>
      <Route path='/checkout/:meat/:salad/:cheese/:bacon/:price' component={Checkout}></Route>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
