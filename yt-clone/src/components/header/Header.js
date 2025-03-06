import React from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

function Header({handleToggleSidebar}) {
  return (
    <div className='border border-dark header'>
      <FaBars 
        className='header_menu'
         size={26}
         onClick={() => handleToggleSidebar()}
      />
      <img src='https://img.icons8.com/?size=100&id=19318&format=png&color=000000' alt='logo' className='header_logo'/>
      <form>
        <input type='text' placeholder='Search' />
        <button type='submit'><AiOutlineSearch size={22} /></button>
      </form>

      <div className='header_icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src='https://cdn-icons-png.flaticon.com/256/5087/5087579.png' alt='' />
      </div>
    </div>
  )
}

export default Header
