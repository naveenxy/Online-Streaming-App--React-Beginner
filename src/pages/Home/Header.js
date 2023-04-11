import React from 'react'
import { Link } from "react-router-dom";

import  './Header.css'
const Header = () => {
  return (
    <div class="header-content">
        
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        
        <Link to ="/login">
      <button type="button" class="btn btn-primary">Sign In</button>
      </Link>
 
  {/* <h1>Unlimited movies, TV shows and more.</h1>
  <h3>Watch anywhere. Cancel anytime.</h3>
  <p>Ready to watch? Enter your email to create or restart your membership.</p>
<form class="email-signup">
<input type="email" placeholder="Enter Email Address" required></input>
<button type="submit" >Get Started</button>
</form> */}

</div>

  )
}

export default Header
