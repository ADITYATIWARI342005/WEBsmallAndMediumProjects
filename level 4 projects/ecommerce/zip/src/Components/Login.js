

export const Login = () => {


    const login = () => {
      
        if (!email || !password) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters.');
            return;
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            toast.error('Please enter a valid email.');
            return;
        }

      
            toast.success('Login successful!');
    
                toast.error('Incorrect email or password.');
      
                toast.error('Login failed.');
   
     
    return (
        <div className='container'>
            <br />
            <h2>Login</h2>
            <br />
            <form  >
                <label htmlFor="email">Email</label>
                <input type="email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" />
                <br />
                <button type="submit">LOGIN</button>
            </form>
          
        </div>
    )
}
