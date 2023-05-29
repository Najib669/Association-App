import React from 'react'
import ProductCart from './ProductCart'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../Actions/productAction'
import "./ShopBody.css"
const ShopBody = ({handleAddProduct}) => {

  const products = useSelector(state=>state.productReducer.products)
  const dispatch=useDispatch()
  useEffect(()=>{
         dispatch(getProducts())
       },[])  
   console.log(products)
  return (
    <div className='container'>
     {products.map((product)=><ProductCart product={product} className ='prod' handleAddProduct={handleAddProduct}/>)}
   </div>
    )
}

export default ShopBody