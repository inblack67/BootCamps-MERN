import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Preloader from './Preloader'
import userImg from '../../img/anonymous.jpg'

const Navbar = ({ logout, authState: { loading, isAuthenticated } }) => {

    const onLogOut = e => {
        logout()
    }

    const guestLinks = (
        <Fragment>
        <li><Link to="/bootcamps">Bootcamps</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/about">About</Link></li>
        </Fragment>
      )
    
      const authLinks = (
          <Fragment>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/bootcamps">Bootcamps</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#!" onClick={onLogOut}>Logout</a></li>
          </Fragment>
      )

    return (
        <nav className='red'>
            <div className="nav-wrapper">
            <a href="#!" className='left sidenav-trigger show-on-large' data-target='mobile-nav'><i className="material-icons">menu</i></a>
                <Link to="/" className="brand-logo center"><i className="left material-icons">devices
                </i>BootCamps</Link>
                <ul className="right hide-on-med-and-down">
                    { !loading && isAuthenticated ? authLinks : guestLinks }
                </ul>
            </div>

    <ul id="mobile-nav" className='sidenav'>
        <li>
        <div className="user-view">
        <div className="background grey darken-4">
        </div>
        <Link to="/"><img className="circle" src={userImg} /></Link>
        <Link to="/"><span className="white-text name">Aman Bhardwaj</span></Link>
        </div>
        </li>

        <li><a href="https://github.com/inblack67" target="_blank" rel='noopener noreferrer' className='center'><i className="fab fa-github fa-3x red-text"></i></a></li>
        <li><div className="divider"></div></li>
        <li><a href='#!' className="subheader">Where'd you wanna go?</a></li>
        { isAuthenticated ? authLinks : guestLinks}
    </ul>
        </nav>
    )
}

Navbar.propTypes = {
    authState: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    authState: state.AuthState
})

export default connect(mapStateToProps, { logout })(Navbar)
