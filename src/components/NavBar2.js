import React from 'react';
import {Link} from 'react-router-dom'

const NavBar2=()=>{
  return(
    <nav>
    <div>
      <i style={{marginLeft:25}}>Welcome to Where is My Book</i>
      <ul id="nav-mobile" style={{marginRight:20}}>
        <li><Link to="/"><i>Go Back to home</i></Link></li>
      </ul>
    </div>
    </nav>
  )
}

export default NavBar2;