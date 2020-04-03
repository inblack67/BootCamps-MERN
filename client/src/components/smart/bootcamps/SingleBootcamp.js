import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSingleBootcamp } from '../../../actions/bootcamps'
import Preloader from '../../dumb/Preloader'
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteBootcamp } from '../../../actions/bootcamps'
import { withRouter, Link } from 'react-router-dom'

const SingleBootcamp = ({ history, authState, deleteBootcamp, getSingleBootcamp, match, bootcampState: { bootcamp, loading } }) => {

    useEffect(() => {
        getSingleBootcamp(match.params.id)
        // eslint-disable-next-line
    },[])

    useEffect(() => {
        M.AutoInit()
    })

    const onDelete = e => {
        deleteBootcamp(bootcamp._id)
        history.push('/bootcamps')
    }

    if(loading || !bootcamp){
        return <Preloader />
    }

    const { name, description, averageCost, photo, averageRating, location, careers } = bootcamp

    return (
        <div className="container">
            
            <h3>{name}</h3>

            <p className="flow-text">{description}</p>

                    { authState.isAuthenticated && ( authState.user.role === 'admin' || ( authState.user._id === bootcamp.user ) ) && <Fragment>
            <div className="fixed-action-btn">
            <Link to='/update-bootcamp' className="btn-floating waves-effect waves-light green btn-large"><i className="material-icons">mode_edit</i></Link>
                <ul>
                    <li>
                    <a href='#!' onClick={onDelete} className='btn-floating waves-effect waves-light red'><i className="material-icons">delete</i></a>
                    </li>
                </ul>
            </div>
            </Fragment> }

            <br/>
            <blockquote>Average Course Cost: <span className="red-text"><strong>${averageCost}</strong></span></blockquote>
            

            <br/>
            <hr/>
            <h4>Careers</h4>
            <br/>

            <ul className="collapsible">
            {  careers.map(career => (
            <li key={career}>
                <div className="collapsible-header"><i className="material-icons">whatshot</i>{career}</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            ))}
            </ul>

        </div>
    )
}

SingleBootcamp.propTypes = {
    getSingleBootcamp: PropTypes.func.isRequired,
    bootcampState: PropTypes.object.isRequired,
    authState: PropTypes.object.isRequired,
    deleteBootcamp: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    bootcampState: state.BootcampState,
    authState: state.AuthState
})

export default connect(mapStateToProps, { getSingleBootcamp, deleteBootcamp })(withRouter(SingleBootcamp))
