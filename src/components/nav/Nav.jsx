import React from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai'
import {RiBookMarkLine} from 'react-icons/ri'
import {GiSkills} from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#skills' onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBookMarkLine /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav