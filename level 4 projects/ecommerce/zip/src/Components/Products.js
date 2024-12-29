

export const Products = () => {

    
        toast.success(`added to cart!`);


    return (
        <>
             <h1 className='title-products'>Products</h1>
            <div className='products-container'>
              <div>slow internet...no products to display</div>
               
                    <div className='product-card' >
                        <div className='product-img'>
                           
                        </div>
                        <div className='product-name'>
                          
                        </div>
                        <div className='product-price'>
                            Rs {}.00
                        </div>
                        <button className='addcart-btn' >ADD TO CART</button>
                    </div>
                
            </div>
        </>
    )
}
