


export const Cashout = () => {

 


    

 
                    setSuccessMsg('Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds');
               
    return (
        <>
            <Navbar  />
            <div className='container'>
                <br />
                <h2>Cashout Details</h2>
                <br />
               <div className='success-msg'></div>
                <form >
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' required
                        disabled />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                         disabled />
                    <br />
                    <label htmlFor="Cell No">Cell No</label>
                    <input type="number" className='form-control' required />
                    <br />
                    <label htmlFor="Delivery Address">Delivery Address</label>
                    <input type="text" className='form-control' required />
                    <br />
                    <label htmlFor="Price To Pay">Price To Pay</label>
                    <input type="number" className='form-control' required disabled />
                    <br />
                    <label htmlFor="Total No of Products">Total No of Products</label>
                    <input type="number" className='form-control' required disabled />
                    <br />
                    <button type="submit" >SUBMIT</button>
                </form>
               
            </div>
        </>
    )
}
