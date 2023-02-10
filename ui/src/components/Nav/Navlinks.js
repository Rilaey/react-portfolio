import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navlinks() {
  let location = useNavigate();

  return (
    <div className='nav-links'>
        <a className='link' onClick={() => location('/')}>About Me</a>
        <a className='link' onClick={() => location('/projects')}>Projects</a>
        <a className='link' href='https://github.com/Rilaey'>Github</a>
        <a className='link' href='https://www.linkedin.com/in/riley-newhart-667b43128/'>LinkedIn</a>
        <a className='link' href='https://docs.google.com/document/d/1gner4IKZKi82utzKT7yQvoN6UxOz9slGSdbjiIV_LgM/edit'>Resume</a>
        <a className='link' onClick={() => location('/contact')}>Contact Info</a>
    </div>
  )
}
