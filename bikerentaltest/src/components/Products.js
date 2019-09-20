import React from 'react';
import bikeData from '../data/bikerentals.json'
import { Card } from 'semantic-ui-react'
import ProductCard from './ProductCards'
function Products() {
  return (
    <div>
    <h1> Welcome to Bike Selection page</h1>
    <Card.Group>
       { bikeData.products.filter(product=>product.product_type === "bike").map( product=> <ProductCard 
        key={product.id}
        item={product} /> ) }
    </Card.Group>
    <h2> Please select an add-on for your Bike </h2>
    <Card.Group>
       { bikeData.products.filter(product=>product.product_type !== "bike").map( product=> <ProductCard 
        key={product.id}
        item={product} /> ) }
    </Card.Group>
    </div>
  );
}

export default Products;