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

function App() {

  useEffect(() => {
    M.AutoInit();
  })

  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/bootcamps' component={Bootcamps}/>
          <Route exact path='/bootcamps/:id' component={SingleBootcamp}/>
          <Route exact path='/about' component={About}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
