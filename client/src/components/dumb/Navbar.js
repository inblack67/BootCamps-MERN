import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Preloader from './Preloader'

const Navbar = ({ logout, authState: { loading, isAuthenticated } }) => {

    const onLogOut = e => {
        logout()
    }

    const guestLinks = (
        <ul className="right hide-on-small-only">
        <li><Link to="/bootcamps">Bootcamps</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
      )
    
      const authLinks = (
        <ul className="right hide-on-small-only">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/bootcamps">Bootcamps</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#!" onClick={onLogOut}>Logout</a></li>
      </ul>
      )

    return (
        <nav className='blue'>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center"><i className="prefix fab fa-react"></i>BootCamps</Link>
                <ul className="right">
                    { !loading && isAuthenticated ? authLinks : guestLinks }
                </ul>
            </div>
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
