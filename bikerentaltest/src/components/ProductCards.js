import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const ProductCards = (props) => (
  
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.item.image}
        />
        <Card.Header>{props.item.name}</Card.Header>
        <Card.Meta>${props.item.price}</Card.Meta>
        <Card.Description>
          <strong>{props.item.product_type}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Add to cart
          </Button>
          
        </div>
      </Card.Content>
    </Card>
    
  
)

export default ProductCards;