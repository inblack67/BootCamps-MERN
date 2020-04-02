import { GET_BOOTCAMPS, BOOTCAMP_ERROR, GET_BOOTCAMP, CLEAR_BOOTCAMP, CLEAR_BOOTCAMPS, ADD_BOOTCAMP, DELETE_BOOTCAMP } from './types'
import axios from 'axios'
import M from 'materialize-css/dist/js/materialize.min.js';

export const getAllBootCamps = () => async dispatch => {

    try {
        const res = await axios('/api/v1/bootcamps')

        dispatch({
            type: GET_BOOTCAMPS,
            payload: res.data.data
        })

    } catch (err) {
        console.error(err)
        if(err.response !== undefined){
            dispatch({
                type: BOOTCAMP_ERROR,
                payload: err.response.data.error
            })
        }
    }

}

export const getSingleBootcamp = (id) => async dispatch => {

    try {
        const res = await axios(`/api/v1/bootcamps/${id}`)

        dispatch({
            type: GET_BOOTCAMP,
            payload: res.data.data
        })

    } catch (err) {
        console.error(err)
        if(err.response !== undefined){
            dispatch({
                type: BOOTCAMP_ERROR,
                payload: err.response.data.error
            })
        }
    }
    
}

export const addBootcamp = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/v1/bootcamps', formData, config)

        dispatch({
            type: ADD_BOOTCAMP,
            payload: res.data.data
        })

        if(res.data.success){
            M.toast({ html: 'Bootcamp Added' })
        }

        dispatch(getAllBootCamps())

    } catch (err) {
        console.error(err)
        if(err.response !== undefined){
            dispatch({
                type: BOOTCAMP_ERROR,
                payload: err.response.data.error
            })
        }
    }
}


export const deleteBootcamp = (id)  => async dispatch => {

    if(window.confirm('Are you sure?')) {

    try {
        const res = await axios.delete(`/api/v1/bootcamps/${id}`)

        if(res.data.success){
            M.toast({ html: 'Bootcamp Deleted' })
        }

        dispatch({
            type: DELETE_BOOTCAMP,
            payload: id
        })

        dispatch(getAllBootCamps())

    } catch (err) {
        console.error(err)
        if(err.response !== undefined){
            dispatch({
                type: BOOTCAMP_ERROR,
                payload: err.response.data.error
            })
        }
    }

}
}