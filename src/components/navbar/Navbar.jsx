import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#features'>Features</a></p>
    <p><a href='#screenshots'>Screenshots</a></p>
    <p><a href='#download'>Download</a></p>
    <p><a href='#review'>Review</a></p>
    <p><a href='#contact'>Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const menuClass = toggleMenu ? 'navbar-menu_container navbar-menu_container_down' : 'navbar-menu_container'
  
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <p>Appson</p>
        </div>
      </div>

      <div className='navbar-sign'>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='navbar-menu_upperContainer'>
        <div className='navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
        </div>
        <div className={menuClass}>
            <div className='navbar-menu-container_links'>
              <Menu />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar