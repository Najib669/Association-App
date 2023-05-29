import React from 'react'
import ShopBody from '../Components/ShopBody'

import ShopHeader from '../Components/ShopHeader'

const Shop = ({handleAddProduct,cartItems}) => {
  return (
    <div> 
    <ShopHeader cartItems={cartItems}></ShopHeader>
    <ShopBody  handleAddProduct={handleAddProduct}></ShopBody>
    </div>
  )
}

export default Shop