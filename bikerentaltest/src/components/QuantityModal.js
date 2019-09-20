import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const QuantityModal = (props) => (
    <Modal 
  size="tiny"
  closeIcon 
  trigger={
    <Button>Add to Cart</Button>} 
    centered={false}>
    <Modal.Header>{props.item.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.item.image} />
      <Modal.Description>
        <Header>Quantity</Header>
        <input type="number" name="Quantity" placeholder={0}/><br/>
      {/**Becareful if changing <input> element, quantity is linked to the addToCart function
      changing this may break the quantity functionality.
      look at App.js AddToCart function to see how it interacts **/}
        <Button basic color='green'
          onClick={(e)=>props.addToCart(e,props.item)}>
            Add to cart
          </Button>
       
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default QuantityModal