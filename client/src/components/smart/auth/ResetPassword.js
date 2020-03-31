import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ResetPassword = () => {

    const [email, setEmail] = useState('')

    const onChange = e => {
        setEmail(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(email);
    }

    return (
        <div className="container">
            <p className="flow-text">Reset Password</p>
            <form onSubmit={onSubmit}>
            <div className="input-field">
                <input type="email" name="email" className='validate' onChange={onChange} value={email} required/>
                <span className="helper-text">Registered Email</span>
            </div>
            <br/>
            <div className="input-field">
                <input type="submit" value="Get Reset Email" className='btn blue'/>
            </div>
            </form>
            <br/>
        </div>
    )
}

ResetPassword.propTypes = {

}

export default ResetPassword
