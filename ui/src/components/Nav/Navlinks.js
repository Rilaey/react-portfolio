import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navlinks() {
  let location = useNavigate();

  return (
    <div className='nav-links'>
        <a className='link' onClick={() => location('/')}>About Me</a>
        <a className='link' onClick={() => location('/projects')}>Projects</a>
        <a className='link'>Resume</a>
        <a className='link'>Contact Info</a>
    </div>
  )
}
