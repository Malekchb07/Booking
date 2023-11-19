import React, { useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";


export const Navbar = () => {

  const { user } = useContext(AuthContext);


  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">Swift Bookings</span></Link>
        {user ? user.username :
          (<div className="navItems">
            <button className="navButton"><Link to='/registre' style={{ color: 'inherit', textDecoration: 'none' }} >Register</Link></button>
            <button className="navButton"><Link to='/login' style={{ color: 'inherit', textDecoration: 'none' }} >Login</Link></button>
          </div>)}
      </div>
    </div>
  )
}

export default Navbar;