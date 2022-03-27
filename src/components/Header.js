import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.scss'

const Header = () => {
  const [active, setActive] = useState(false)
  const  showItem = () => {
    setActive(!active)
  }
  return (
    <div className='header'>
      <div className="header__container">

        <div className="header__text">
          <h1>GRAD.</h1>
        </div>
        <nav className={active ? 'navbar active' : 'navbar'}>
          <ul>
            <li>
              <Link to='/'>Verzameling</Link>
            </li>
            <li>
              <Link to='/'>Merk</Link>
            </li>
            
            <li>
              <Link to='/'>Contact</Link>
            </li>
            <li >
              <Link to='/' onClick={showItem}>Menu</Link>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  )
}

export default Header
