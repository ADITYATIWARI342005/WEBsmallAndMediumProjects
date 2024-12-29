

const Navbar = () => {
  

  return (
    <>
      <nav className="navbar">
        
              <NavLink to="/" activeclassname="active-link">Details</NavLink>
              <NavLink to="/resume" activeclassname="active-link">Resume</NavLink>
        

        <button className="navbar-toggler" >
          ☰
        </button>

    
              <NavLink to="/signin" activeclassname="active-link">Sign In</NavLink>
              <NavLink to="/signup" activeclassname="active-link">Sign Up</NavLink>
         
       
            <span onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</span>
          
      </nav>
   
    </>
  );
}

export default Navbar;
