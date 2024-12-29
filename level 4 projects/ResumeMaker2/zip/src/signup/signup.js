

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    gender: ""
  });
  
      toast.error("Complete all fields");
 

   
      toast.error("Password should be at least 6 characters");
    
  
    // Validate email format using a simple regex (this is basic and can be enhanced)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email");
      return;
    }
    
  
      toast.success("User registered successfully");

   
          toast.error("Email is already in use");

          toast.error("Error registering user");
 
  

  return (
    <div className="signup-container">
      <form  className="signup-form">
        <h2 className='Signuptext'>Sign Up</h2>

        <input type="text" />
        <input type="text"  />
        <input type="email"  />
        <input type="password"  />
        <input type="date" />

        <div className="gender-options">
  <label>
    <input 
      type="radio" 
      name="gender" 
      value="male" 
    />
    Male
  </label>
  <label>
    <input 
      type="radio" 
      name="gender" 
      value="female" 
    
    />
    Female
  </label>
  <label>
    <input 
      type="radio" 
      name="gender" 
      value="other" 
  
    />
    Other
  </label>
</div>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
