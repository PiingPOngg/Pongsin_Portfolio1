import React from 'react'
import './Portfolio.css'
import IMG1 from '../../asset/demo1.jpg'
import IMG2 from '../../asset/darkmode.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>Expenses Report</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/PiingPOngg/react-basic' className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href='https://react-expense-report-pongsin.netlify.app/' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="img2" />
          </div>
          <h3>Darkmode</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/PiingPOngg/Pongsin-React-Darkmode' className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href='https://pongsin-react-darkmode.netlify.app/' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio