import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Experience I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__title">
          <h3>Denso Wave Singapore</h3>
          <h5>September 2019 - February 2020</h5>
          <div className="experience__content">
            <article className="experience__details">
              <p>Interning at Denso Wave Singapore for over 6 months, has thought that there is no shortcut to success and the 
                professional skills are the key factor to achieve the success. Therefore, I constantly work hard to improve and 
                achieve my best in academics. Which led me to expertise in many skills such as coding skill, soldering skills and many more.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience