

export const AddProducts = () => {





    setError('Please select a valid image type (jpg or png)');




    toast.success('Product added successfully!'); // toast message
    navigate('/'); // navigating to the home page


    return (
        <div>
            <form  >
                <label >Product Name</label>
                <input type="text" />
                <br />
                <label>Product Price</label>
                <input type="number" />
                <br />
                <label >Product Image</label>
                <input type="file" id="file"  />
                <br />
                <button type="submit" >ADD</button>
            </form>
           
        </div>
    )
}
