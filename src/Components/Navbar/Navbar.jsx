import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/Logo.png'
import cart from '../Assets/Cart.png'
import user from '../Assets/user.png'
import search_icon from '../Assets/search-icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt = "" />
        </div>

        <ul className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link style = {{textDecoration : 'none'}} to = '/'> <div className='navli'>Shop</div></Link>{menu === "shop" ? <div className="active"></div>:<></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link style = {{textDecoration : 'none'}} to = '/mens'> <div className='navli'>Men</div> </Link>  {menu === "mens" ? <div className="active"></div>:<></>}</li>
            <li onClick={() => {setMenu("womens")}}> <Link style = {{textDecoration : 'none'}} to = '/womens'> <div className='navli'>Women</div> </Link> {menu === "womens" ? <div className="active"></div>:<></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style = {{textDecoration : 'none'}} to = '/kids'> <div className='navli'>Kids</div> </Link>{menu === "kids" ? <div className="active"></div>:<></>}</li>
        </ul>

        <div className='nav-login-cart'>  

          <div class="searchBox">
            <input class="searchInput"type="text" name="" placeholder="Search" />
            <button class="searchButton" href="#">
                <img src= {search_icon} alt=''/>
            </button>
          </div>

          <Link to = '/login'><button className='user-button'><img src={user} alt="" /></button></Link>
          <Link to = '/cart'><img src={cart} alt="" /></Link> 
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
