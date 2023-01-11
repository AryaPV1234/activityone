import { useState } from "react";
import { Link } from "react-router-dom";
import classes from'./AboutUs.module.css';

const NavBar = () =>{



    return (
    <div className={classes.buttons}>
      <li>
        <Link to='/about'>
      <div className={classes.bttn} >About Us</div>
      </Link>
      </li>
        
      <li>
      <Link to="/login"><div className={classes.bttn}>Login</div></Link>
      </li>
      
      
    </div>
    
    
    );
  }
  export default NavBar;