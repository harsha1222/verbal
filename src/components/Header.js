import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div>

        <Link className='links' to='/'>
          HOME
        </Link>

        <Link className='links' to='/about'>
            ABOUT US
          </Link>
      </div>

      <nav className='navbar'>
        <ul>


          <Link className='links' to='/login'>
            ADMIN
          </Link>

          

          <Link className='links' to='/userlogin'>
            USER
          </Link>
         

          <Link className='links' to='/checkin'>
            CHECKIN
          </Link>
          <Link className='links' to='/support'>
            SUPPORT
          </Link>
         
          
        </ul>
      </nav>
    </header>
  )
}

export default Header
