import React from 'react';
import '../../css/index.css';
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'
import ProjectThree from './ProjectThree'

export default function ProjectHeader() {
  return (
    <div className='main-body'>
    <div className='main-head'>
        <h2 className='header-txt'>Projects</h2>
    </div>
        {<ProjectOne />}
        {<ProjectTwo />}
        {<ProjectThree />}
    </div>
  )
}
