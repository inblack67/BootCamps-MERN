import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/dumb/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/dumb/About';
import NotFound from './components/dumb/NotFound';
import Home from './components/dumb/Home';
import Footer from './components/dumb/Footer'

import {Provider} from 'react-redux'
import store from './store'
import Bootcamps from './components/smart/bootcamps/Bootcamps';
import SingleBootcamp from './components/smart/bootcamps/SingleBootcamp';

import './App.css';
import Register from './components/smart/auth/Register';
import Login from './components/smart/auth/Login';
import Dashboard from './components/smart/dashboard/Dashboard'
import PrivateRoute from './routing/PrivateRoute'
import { loadUser } from './actions/auth'
import UpdateDetails from './components/smart/auth/UpdateDetails';
import UpdatePassword from './components/smart/auth/UpdatePassword';
import ResetPassword from './components/smart/auth/ResetPassword';
import ForgotPassword from './components/smart/auth/ForgotPassword';

import Users from './components/smart/users/Users'
import SingleUser from './components/smart/users/SingleUser'
import UpdateUser from './components/smart/users/UpdateUser'
import AddUser from './components/smart/users/AddUser';
import AddBootcamp from './components/smart/bootcamps/AddBootcamp';
import UpdateBootcamp from './components/smart/bootcamps/UpdateBootcamp';
import ManageBootcamp from './components/smart/bootcamps/ManageBootcamp';

function App() {

  useEffect(() => {
    M.AutoInit();
    store.dispatch(loadUser());
  })

  return (
    <Provider store={store}>
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          {/* auth & users */}
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>
          <PrivateRoute exact path='/update-details' component={UpdateDetails}/>
          <PrivateRoute exact path='/update-password' component={UpdatePassword}/>
          <PrivateRoute exact path='/users' component={Users}/>
          <PrivateRoute exact path='/users/:id' component={SingleUser}/>
          <PrivateRoute exact path='/users/user/:id' component={UpdateUser}/>
          <PrivateRoute exact path='/add-user' component={AddUser}/>
          <Route exact path='/forgot-password' component={ForgotPassword}/>
          <Route exact path='/reset-password/:resetToken' component={ResetPassword}/>

          {/* home */}
          <Route exact path='/' component={Home}/>

          {/* bootcamps */}
          <Route exact path='/bootcamps' component={Bootcamps}/>
          <Route exact path='/bootcamps/:id' component={SingleBootcamp}/>
          <PrivateRoute exact path='/add-bootcamp' component={AddBootcamp}/>
          <PrivateRoute exact path='/update-bootcamp' component={UpdateBootcamp}/>
          <PrivateRoute exact path='/manage-bootcamp' component={ManageBootcamp}/>

          {/* initialState */}
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/about' component={About}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
