import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, UPDATE_ACCOUNT, UPDATE_ERROR } from './types'
import axios from 'axios'
import M from 'materialize-css/dist/js/materialize.min.js';
import setAuthToken from '../setAuthCookie';

export const registerUser = (formData) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/v1/auth/register', formData, config)


        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data.token
        })

        if(res.data.success){
            M.toast({
                html: 'Registration Successful'
            })
        }

        dispatch(loadUser(res.data.token))

    } catch (err) {

        if(err.response !== undefined){
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.error
            })
        }

    }

}

export const login = (formData) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/v1/auth/login', formData, config)



        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.token
        })

        dispatch(loadUser())

    } catch (err) {


        if(err.response !== undefined){
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.error
            })
        }

    }
}

export const updateDetails = (formData) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {

        const res = await axios.put('/api/v1/auth/updatedetails', formData, config)
        console.log(res.data);

        dispatch({
            type: UPDATE_ACCOUNT,
            payload: res.data.data
        })

    } catch (err) {

        if(err.response !== undefined){
            dispatch({
                type: UPDATE_ERROR,
                payload: err.response.data.error
            })
        }

    }
}



export const logout = () => async (dispatch) => {
    try {
        const res = await axios('/api/v1/auth/logout')

        dispatch({
            type: LOGOUT,
            payload: res.data.msg
        })      
    } catch (err) {

    }
}

// GET Logged In User
export const loadUser = () => async (dispatch, getState) => {

    const token = getState().AuthState.token

    setAuthToken(token)

    try {
        const res = await axios('/api/v1/auth/me')
        dispatch({
            type: USER_LOADED,
            payload: res.data.data
        })
    } catch (err) {
        console.error(err);
    }
}
