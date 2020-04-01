import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Preloader from '../../dumb/Preloader'

const Dashboard = ({ authState: { loading, user, isAuthenticated } }) => {

    while(loading || !user){
        return <Preloader />
    }

    const { name, email, _id, role } = user

    return (
        
        <Fragment>
            <div className="container">
                <h3>Welcome {name}</h3>
                <p className="flow-text">You are the {role}</p>
                    { role === 'admin' && <Fragment>
                        <Link to='/users' className='btn red left'>Get All Users</Link>
                        <br/><br/><br/>
                    </Fragment> }
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
