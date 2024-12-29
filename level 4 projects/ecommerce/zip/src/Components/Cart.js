
export const Cart = ({ user }) => {

   
    return (
        <>
            <Navbar />
            <div className="hero"> 
            <>
                {shoppingCart.length !== 0 && <h1 className='title-products'>Cart</h1>}
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>no items in your cart or slow internet causing trouble (Refresh the page) or you are not logged in</div>
                            <div><Link to="/">Return to Home page</Link></div>
                        </>
                    }
                    
                        <div className='cart-card' >

                            <div className='cart-img'>
                             
                            </div>

                            <div className='cart-name'></div>

                            <div className='cart-price-orignal'>Rs {}.00</div>

                            <div className='inc' >
                                <Icon  />
                            </div>

                            <div className='quantity'></div>

                            <div className='dec' >
                                <Icon />
                            </div>

                            <div className='cart-price'>
                                Rs {}.00
                            </div>

                            <button className='delete-btn' >
                                <Icon  />
                            </button>
                        </div>
                    
                
                    <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Cart-Summary
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{}</span>
                        </div>
                        <div className='cart-summary-quantity'>
                            <span>Total Qty</span>
                            <span>{}</span>
                        </div>
                        <Link to='/cashout' >
                            <button >
                                Cash on delivery
                        </button>
                        </Link>
                    </div>
                </div>
            </>
 
 
  
</div>
           
        </>
    )
}