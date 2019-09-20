    import React from 'react';
import CartItem from './CartItem'
import { Container, Icon, Button } from 'semantic-ui-react'
import CheckOutModal from './CheckOutModal'



function Cart(props) {
    return (
        <React.Fragment>
            <br/>
     
     {props.list.length > 0 ? 

        <React.Fragment>

         <Container>
         <h2><Icon size='big' color='purple' name='shopping cart' /></h2>

            {props.list.map(item=> <CartItem key={item.id} item={item}/> )}
         </Container>
         <br/>
        
        <CheckOutModal list={props.list}/><br/><br/>
        
        </React.Fragment> 
        : null}
    
    </React.Fragment>
    );
}

export default Cart;