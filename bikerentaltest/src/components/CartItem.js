import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'

function CartItem(props) {

    return (
        <React.Fragment>
     <Grid >
        <Grid.Column>
          <Segment>
              
            <h3>{props.item.name}</h3>
            <h3>Quantity: {props.item.quantity}</h3>
            <h4>Total price ${props.item.price * props.item.quantity}</h4>
            <h4></h4>
            <h4></h4>
          </Segment>
        </Grid.Column>
     </Grid>

    </React.Fragment>
    );
}

export default CartItem;