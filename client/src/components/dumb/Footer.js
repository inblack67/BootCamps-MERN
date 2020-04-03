import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
<footer className="page-footer black" style={{'flex': '1 0 auto'}}>
  <div className="container">
  <div className="row">
  <div className="col l6 s12">
  <h5 className="white-text">BootCamps</h5>
  <a href="https://github.com/inblack67" target="_blank" rel='noopener noreferrer'>
  <i className="fab fa-github fa-2x red-text left"></i>
  </a>
  </div>
  <div className="col l4 offset-l2 s12">
  <ul>
  <li><Link to='/about' className='white-text'>About</Link></li>
  </ul>
  </div>
  </div>
  </div>
  <div className="footer-copyright">
  <div className="container">

  © 2020 Copyright BootCamps
  </div>
  </div>
  </footer>
    )
}

export default Footer
