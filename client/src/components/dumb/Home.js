import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import img1 from '../../img/boot1.jpg'
import img2 from '../../img/boot2.jpg'
import AutoInitBot from '../smart/AutoInitBot'
import { getBootcampByDistance } from '../../actions/bootcamps'
import PropTypes from 'prop-types'
import Preloader from './Preloader'


const Home = ({ getBootcampByDistance, history, bootcampState: { loading } }) => {

  const [formData, setFormData] = useState({
    zipcode: '',
    distance: ''
})

const onChange = e => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

const onSubmit = e => {
    e.preventDefault()
    getBootcampByDistance(zipcode, distance)
    history.push('/bootcamps')
}

const { zipcode, distance }  = formData

  return (

    <Fragment>

      <AutoInitBot />

    <div className="parallax-container">
      <div className="parallax"><img src={img1} className='responsive-img'/></div>
    </div>
    <div className="section white center">
      <div className="row container">
        <p className="flow-text">What's the language mode in your VS-Code at the moment?</p>
        <Link to='/bootcamps' className='btn red pulse'>Browse Bootcamps</Link>
        <br/>
        <p className="flow-text">Find A Bootcamp Near You</p>
      <div className='container'>
      <form onSubmit={onSubmit}>
          <div className="input-field container">
              <input type="text" onChange={onChange} value={distance} name='distance' className='validate' required/>
              <span className="helper-text" data-error='Required'>Miles From</span>
          </div>
          <div className="input-field container">
              <input type="text" onChange={onChange} value={zipcode} name='zipcode' className='validate' required/>
              <span className="helper-text" data-error='Required'>Zipcode</span>
          </div>
          <div className="input-field">
              <input type="submit" value="Find Bootcamp" className='blue darken-2 btn'/>
          </div>
      </form>
    </div>
      </div>
    </div>
    <div className="parallax-container">
      <div className="parallax"><img src={img2} className='responsive-img'/></div>
    </div>

    </Fragment>
  )
}

Home.propTypes = {
  getBootcampByDistance: PropTypes.func.isRequired,
  bootcampState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  bootcampState: state.BootcampState
})

export default connect(mapStateToProps, { getBootcampByDistance })(withRouter(Home))
