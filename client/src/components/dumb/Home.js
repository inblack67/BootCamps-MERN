import React from 'react'
// import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {

//   if(isAuthenticated) { return <Redirect to="/dashboard" /> }

  return (
    <div>


      <div className="container center" style={{"marginTop": "7rem"}}>  
      <Link to='/bootcamps' className='btn red'>Browse Bootcamps</Link>
      <br/><br/>
      <p className="flow-text">Find A Bootcamp Near You</p>

    <div className='container center'>
      <form>
          <div className="input-field container">
              <input type="text" className='validate'/>
              <span className="helper-text">Miles From</span>
          </div>
          <div className="input-field container">
              <input type="text" className='validate'/>
              <span className="helper-text">Zipcode</span>
          </div>
          <div className="input-field">
              <input type="submit" value="Find Bootcamp" className='blue darken-2 btn'/>
          </div>
      </form>
    </div>
      </div>
    </div>
  )
}


// const mapStateToProps = state => ({

// })

export default connect()(Home)
