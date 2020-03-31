import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='blue'>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center"><i className="prefix fab fa-react"></i>BootCamps</Link>
                <ul className="right">
                    <li><Link to='/bootcamps'>BootCamps</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
