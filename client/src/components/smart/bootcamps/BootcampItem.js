import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BootcampItem = ({ bootcamp: { name, _id, averageRating, description, photo, location } }) => {

    return (
        <div>
        <div className="col m6">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light" >
                    <img className="activator responsive-img" alt='' src={`/uploads/${photo}`} />
                </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
                <p><Link to={`/bootcamps/${_id}`}>Explore</Link></p>
                <p>{location.city}
                    <span className="red-text secondary-content"><strong>{ averageRating > 8 &&  <Fragment>
                        {/* <i className="material-icons right">sentiment_very_satisfied</i> */}
                        { Math.round(averageRating).toString()} Rating
                    </Fragment>  }</strong></span>
                </p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
            <p>{description}</p>
            <br/>
            <Link to={`/bootcamps/${_id}`} className='btn blue pulse'>Explore</Link>
            </div>
            </div>
        </div>
        </div>
    )
}

BootcampItem.propTypes = {
    bootcamp: PropTypes.object.isRequired,
}

export default BootcampItem
