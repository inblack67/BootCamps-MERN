import { combineReducers } from 'redux'
import bootcamps from './bootcamps'

export default combineReducers({
    BootcampState: bootcamps
});