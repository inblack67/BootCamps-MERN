import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Preloader from '../../dumb/Preloader'

const Dashboard = ({ authState: { loading, user } }) => {

    while(loading || !user){
        return <Preloader />
    }

    const { name, email, _id, role } = user

    return (
        
        <Fragment>
        <div className='container center'>
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{name}</span>
                    <span>
                        <i className="material-icons prefix">email</i>
                        <p>{email}</p>
                    </span>
                    <p>{role}</p>
                <div className="card-action">
                    <Link to='/update-details'>Manage Account</Link>
                </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

Dashboard.propTypes = {
    authState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    authState: state.AuthState
})

export default connect(mapStateToProps, {  })(Dashboard)
