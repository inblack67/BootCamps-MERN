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
            <div className="container" style={{'marginBottom': '15rem'}}>
                <h3>Welcome {name}</h3>
                <p className="flow-text">You are the {role.charAt(0).toUpperCase() + role.slice(1)}</p>

                <Fragment>
                        <Link to='/bootcamps' className='btn black'>Get All Bootcamps</Link>
                    { role === 'admin' && <Link to='/users' className='btn red secondary-content'>Get All Users</Link> }
                </Fragment>
                <br/><br/>
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
