import React, { useEffect, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllBootCamps, getBootcampByDistance } from '../../../actions/bootcamps'
import Preloader from '../../dumb/Preloader'
import BootcampItem from './BootcampItem'
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom'
import AutoInitBot from '../AutoInitBot'

const Bootcamps = ({ getBootcampByDistance, getAllBootCamps, bootcampState: { loading, bootcamps }, authState}) => {

    useEffect(() => {
        getAllBootCamps()
        // eslint-disable-next-line
    },[])

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
    }

    if(loading || !bootcamps)
    {
        return <Preloader />
    }

    if(bootcamps.length === 0){
        return <div className='container'>
            <h3>No Bootcamps Yet.</h3>
            <br/>
            <Link to='/add-user' className='btn black pulse'>Add Bootcamp</Link>
            <br/><br/>
        </div>
    }

    const { zipcode, distance }  = formData

    return (
        <div className='container'>

            <AutoInitBot />

            { authState.user && (authState.user.role === 'admin' || authState.user.role === 'publisher') && <Fragment>
            <div className="fixed-action-btn">
                <Link to='add-bootcamp' className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>
            </div>
            </Fragment> }

            <div className="row">
            <div className="col m6">
                <div className="container">
                <p className="flow-text">Location Matters?</p>
                <form onSubmit={onSubmit}>
                    <div className="input-field">
                        <input type="text" name='distance' value={distance} onChange={onChange} className='validate' required/>
                        <span className="helper-text" data-error='Required'>Miles From</span>
                    </div>
                    <div className="input-field">
                        <input type="text" name='zipcode' value={zipcode} onChange={onChange}  className='validate' required/>
                        <span className="helper-text" data-error='Required'>Zipcode</span>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="submit" value="Locate" className='btn blue darken-2'/>
                    </div>
                </form>
                </div>
                <br/>
                <div className="container">
                <p className="flow-text">Filter</p>
                <br/>
                <form>
                    <div className="input-field">
                        <select>
                            <option defaultValue disabled>Any</option>
                            <option>9+</option>
                            <option>8+</option>
                            <option>7+</option>
                            <option>6+</option>
                            <option>5+</option>
                        </select>
                        <label>Rating</label>
                    </div>
                    <br/>
                    <div className="input-field">
                        <select>
                            <option defaultValue disabled>Any</option>
                            <option>$20,000</option>
                            <option>$15,000</option>
                            <option>$10,000</option>
                            <option>$8,000</option>
                        </select>
                        <label>Budget</label>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="submit" value="Filter" className='btn blue darken-2'/>
                    </div>
                </form>

                </div>
            </div>
                { bootcamps &&  bootcamps.map(boot => <BootcampItem bootcamp={boot} key={boot._id}/>)}
            </div>
        </div>
    )
}

Bootcamps.propTypes = {
    getAllBootCamps: PropTypes.func.isRequired,
    bootcampState: PropTypes.object.isRequired,
    authState: PropTypes.object.isRequired,
    getBootcampByDistance: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    bootcampState: state.BootcampState,
    authState: state.AuthState
})

export default connect(mapStateToProps, { getAllBootCamps, getBootcampByDistance })(Bootcamps)
