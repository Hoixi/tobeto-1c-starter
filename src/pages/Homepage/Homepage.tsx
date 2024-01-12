import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Homepage() {
  const cartState = useSelector((state: any) => state.cart)
  
  return (
    <div>
      {cartState.cartItems.length || 0} adet ürün sepette
      
      <br />
      <Link to={'/posts'}>Posts</Link>
    </div>
  )
}

export default Homepage