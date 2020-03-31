import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSingleBootcamp } from '../../../actions/bootcamps'
import Preloader from '../../dumb/Preloader'
import AutoInit from '../../AutoInit'

const SingleBootcamp = ({ getSingleBootcamp, match, bootcampState: { bootcamp, loading } }) => {

    useEffect(() => {
        getSingleBootcamp(match.params.id)
        // eslint-disable-next-line
    },[])

    if(loading || !bootcamp){
        return <Preloader />
    }

    const { name, description, averageCost, photo, averageRating, location, careers } = bootcamp

    return (
        <div className="container">
            <AutoInit />
            
            <h3>{name}</h3>

            <p className="flow-text">{description}</p>
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
}

const mapStateToProps = state => ({
    bootcampState: state.BootcampState
})

export default connect(mapStateToProps, { getSingleBootcamp })(SingleBootcamp)
