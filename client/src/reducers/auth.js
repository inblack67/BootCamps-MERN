import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types'
import M from 'materialize-css/dist/js/materialize.min.js';
import setAuthCookie from '../setAuthCookie'

const initialState = {
    token: document.cookie.split('=')[1],
    user: null,
    error: null,
    isAuthenticated: false,
    loading: true
}


export default (state=initialState, action) => {

    const { payload, type } = action

    switch(type){

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            setAuthCookie(state.token)
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            }

        case USER_LOADED:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false
            }

        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            setAuthCookie(null)

            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                loading: false,
                error: payload
            }

        default: return state
    }

}