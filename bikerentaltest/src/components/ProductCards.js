import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import QuantityModal from './QuantityModal'

const ProductCards = (props) => (
  
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.item.image}
        />
        <Card.Header>{props.item.name}</Card.Header>
        <Card.Meta>${parseFloat(props.item.price).toFixed(2)}</Card.Meta>
        <Card.Description>
          <strong>{props.item.product_type}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <QuantityModal item={props.item} addToCart={props.addToCart}/>
          
          
        </div>
      </Card.Content>
    </Card>
    
  
)

export default ProductCards;