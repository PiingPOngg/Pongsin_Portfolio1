import React from 'react'
import './About.css'
import ME from '../../asset/proFace.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Entry Level</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Completed Projects</small>
            </article>
          </div>

          <p>
            Hello, I am Pongsin Lertchawalit (Pong). I am a fresh graduate from University of Wollongong (Bachelor's of Computer Science in Digital System Security). 
            I am looking for companies that are in need of a frontend developer or a software engineer. 
            I express great interest in coding and I’m keen to explore more coding related projects.
          </p>
          <div className='contact__me-btn'>
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About