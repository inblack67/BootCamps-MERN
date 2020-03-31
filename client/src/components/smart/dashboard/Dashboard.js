import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Preloader from '../../dumb/Preloader'

const Dashboard = ({ authState, authState: { loading, user } }) => {

    while(loading || !user){
        return <Preloader />
    }

    const { name, email, _id, role } = user

    return (
        <div>
            <h1>Welcome { name } </h1>
        </div>
    )
}

Dashboard.propTypes = {
    authState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    authState: state.AuthState
})

export default connect(mapStateToProps, {  })(Dashboard)
