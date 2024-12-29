

export const Signup = () => {
  

    const signup = () => {
      

        // Basic validation checks
        if(!name || !email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        if(password.length < 6) {
            toast.error('Password should be at least 6 characters');
            return;
        }

                toast.success('Signup successful. Redirecting to login...');
               
                toast.error('Failed to store user details.');

                toast.error('Email is already in use.');
      
                toast.error('Signup failed.');
            }
       
    }

    return (
        <div className='container'>
            <br />
            <h2>Sign up</h2>
            <br />
            <form  >
                <label htmlFor="name">Name</label>
                <input type="text"  />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" />
                <br />
                <button type="submit" >SUBMIT</button>
            </form>
         
        </div>
    )
}
