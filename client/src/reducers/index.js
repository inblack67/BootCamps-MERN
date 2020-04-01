import { combineReducers } from 'redux'
import bootcamps from './bootcamps'
import auth from './auth'
import users from './users'

export default combineReducers({
    BootcampState: bootcamps,
    AuthState: auth,
    UserState: users
});