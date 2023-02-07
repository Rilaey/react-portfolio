import React from 'react'
import BackyardSportsLogo from '../../img/BackyardSportsLogo1.png'
import '../../css/index.css'

export default function ProjectOne() {
  return (
    <section className='container'>
        <div className="row projects-card">
            <div className="col-6">
                <img src={ BackyardSportsLogo } alt='logo' className='sports-logo'/>
            </div>
            <div className="col-6 project-bio">
                <h2>Backyard Sports</h2>
                <h4>Built with Handlebars, CSS, SQL, Javascript, and Node</h4>
                <p>Assemble your team with Backyard Sports. With this application 
                    connect with people who have the same sport interest as you. After
                    connecting with your team hop into the chat room and talk with your
                    teammates in real time. 
                </p>
            </div>
        </div>
    </section>
  )
}
