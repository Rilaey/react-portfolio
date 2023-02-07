import React from 'react'
import Navlinks from '../components/Nav/Navlinks'
import ProjectHeader from '../components/Project/ProjectHeader'

export default function Projects() {
  return (
    <div>
    <section className="container test">
      <div className="row">
        <div className="col-12 nav-header">
          <h1 className="top-head">Welcome To My Portfolio</h1>
        </div>
      </div>
    </section>
    <Navlinks />
    {<ProjectHeader />}
  </div>
  )
}
