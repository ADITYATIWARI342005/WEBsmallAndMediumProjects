
const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  






  


    // Enhanced email regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }

    
    
      toast.success("Signed in successfully");
  
        toast.error("Invalid email or password");
    
        toast.error("Error signing in");
    
  

  return (
    <div className="signin-container">
      <form  className="signin-form">
        <h2 className='Signintext'>Sign In</h2>

        
        <input type="email" id="email"  />

       
        <input type="password" id="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signin;
