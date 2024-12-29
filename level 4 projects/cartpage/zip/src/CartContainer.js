import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>Products In Cart</h2>
          <h4 className='empty-cart'>Your cart is empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}

        <div className='cart-total'>
          <h4>
        
          </h4>
        </div>
        <button className='btn clear-btn'>
          clear cart
        </button>
     
    </section>
  )
}

export default CartContainer
