import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
    <a href="/" className='footer__logo'>PiingPOng.React</a>

    <ul className='permalinks'>
        <li><a href='#' >Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </ul>

    <div className='footer__socials'>
        <a href="https://facebook.com/pongsin.l" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://instagram.com/pingpong.pl" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/pongsin-lertchawalit/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/PiingPOngg" target="_blank" rel="noreferrer"><AiFillGithub/></a>
    </div>

    <div className='footer__copyright'>
        <small>&copy; PiingPong React. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer