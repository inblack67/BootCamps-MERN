import { combineReducers } from 'redux'
import bootcamps from './bootcamps'
import auth from './auth'

export default combineReducers({
    BootcampState: bootcamps,
    AuthState: auth
});