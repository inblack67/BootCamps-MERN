import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllBootCamps } from '../../../actions/bootcamps'
import Preloader from '../../dumb/Preloader'
import BootcampItem from './BootcampItem'
import M from 'materialize-css/dist/js/materialize.min.js';

const Bootcamps = ({ getAllBootCamps, bootcampState: { loading, bootcamps } }) => {

    useEffect(() => {
        getAllBootCamps()
        // eslint-disable-next-line
    },[])

    useEffect(() => {
        M.AutoInit()
    })

    if(loading || !bootcamps)
    {
        return <Preloader />
    }

    return (
        <div className='container'>
            <div className="row">
            <div className="col m6">
                <div className="container">
                <p className="flow-text">Location Matters?</p>
                <form>
                    <div className="input-field">
                        <input type="text" className='validate' required/>
                        <span className="helper-text" data-error='Required'>Miles From</span>
                    </div>
                    <div className="input-field">
                        <input type="text" className='validate' required/>
                        <span className="helper-text" data-error='Required'>Zipcode</span>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="submit" value="Find" className='btn blue darken-2'/>
                    </div>
                </form>
                </div>
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
                        <input type="submit" value="Find" className='btn blue darken-2'/>
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
}

const mapStateToProps = state => ({
    bootcampState: state.BootcampState
})

export default connect(mapStateToProps, { getAllBootCamps })(Bootcamps)
