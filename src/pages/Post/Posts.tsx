import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { cartAction } from '../../store/slices/cartSlice';

function Post() {
const dispatch = useDispatch();

  return (
    <div>Post
      <Button onClick={() => {
        dispatch(cartAction.addToCart({id:1, name:"deneme",price:50}))
      }}>Sepete Ekle</Button>
    </div>    
  )
}

export default Post