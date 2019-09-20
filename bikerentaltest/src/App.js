import React from 'react';
import './App.css';
import Products from './components/Products'
import Cart from './components/Cart'


class App extends React.Component {

    state = {
        cartList: []
    }

    AddToCart = (e, item) => {
        let quantity = e.target.previousSibling.previousSibling.value
        if (quantity <= 0) {
            return alert("quantity must be positive value")
        }

        let itemObj = { ...item, quantity }
        this.setState(prevState => {
            return { cartList: [...prevState.cartList, itemObj] }
        })
        return alert("Item added to cart")
    }

    render() {


        return (
            <div className="App">
         <Products addToCart={this.AddToCart}/>
         <Cart list={this.state.cartList}/>
        

        </div>
        );
    }
}

export default App;