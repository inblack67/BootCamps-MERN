import React, { Fragment } from 'react'
// import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import img1 from '../../img/boot1.jpg'
import img2 from '../../img/boot2.jpg'
import AutoInitBot from '../smart/AutoInitBot'

const Home = () => {

//   if(isAuthenticated) { return <Redirect to="/dashboard" /> }

  return (

    <Fragment>

      <AutoInitBot />

    <div className="parallax-container">
      <div className="parallax"><img src={img1} className='responsive-img'/></div>
    </div>
    <div className="section white center">
      <div className="row container">
        <h2 className="header">BootCamps</h2>
        <Link to='/bootcamps' className='btn red'>Browse Bootcamps</Link>
        <p className="flow-text">Find A Bootcamp Near You</p>
      <div className='container'>
      <form>
          <div className="input-field container">
              <input type="text" className='validate' required/>
              <span className="helper-text" data-error='Required'>Miles From</span>
          </div>
          <div className="input-field container">
              <input type="text" className='validate' required/>
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

    // <div>


    //   <div className="container center" style={{"marginTop": "7rem"}}>  
    //   <Link to='/bootcamps' className='btn red'>Browse Bootcamps</Link> 
    //   <br/><br/>
    //   <p className="flow-text">Find A Bootcamp Near You</p>

    // <div className='container center'>
    //   <form>
    //       <div className="input-field container">
    //           <input type="text" className='validate'/>
    //           <span className="helper-text">Miles From</span>
    //       </div>
    //       <div className="input-field container">
    //           <input type="text" className='validate'/>
    //           <span className="helper-text">Zipcode</span>
    //       </div>
    //       <div className="input-field">
    //           <input type="submit" value="Find Bootcamp" className='blue darken-2 btn'/>
    //       </div>
    //   </form>
    // </div>
    //   </div>
    // </div>
  )
}


// const mapStateToProps = state => ({

// })

export default connect()(Home)
