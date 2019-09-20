import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const Checkout = (cart) => {
    if (cart.filter(item => item.product_type === "bike").length > 0) {
        alert("DEMO SITE, real site would now take card payment")
    } else return alert("Customer must add a Bike to the order before checking out")
}

const totalPrice = (cart) => {
    const eachItem = (item) => {
        let price = item.price
        let quant = parseInt(item.quantity)
        return price * quant
    }
    
    if (cart.length > 1) {
        return parseFloat(cart.reduce((prev, item) => eachItem(prev) + eachItem(item))).toFixed(2)
    } else {
        return parseFloat(eachItem(cart[0])).toFixed(2)
    }
}

const CheckOutModal = (props) => (
    <Modal 
  size="fullscreen"
  closeIcon 
  trigger={
    <Button>Checkout</Button>} 
  centered={false}>
    <Modal.Header>CHECKOUT</Modal.Header>
    <Modal.Content >
      
      <Modal.Description>
        <Header>CONFIRM</Header>
        <ul>
        {props.list.map(product=><div>
          <li>Product:{product.name} <br/>
          Product type:{product.product_type}<br/>
          
          Unit Price:${parseFloat(product.price).toFixed(2)} <br/>
          Quantity: {product.quantity} <br/>
          </li></div>)}
        <li>Total Price: $ {totalPrice(props.list)}</li>
        </ul>
       <Button onClick={()=>Checkout(props.list)}size='huge'>Payment</Button>
       
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default CheckOutModal;