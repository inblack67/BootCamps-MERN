import { GET_BOOTCAMPS, BOOTCAMP_ERROR, GET_BOOTCAMP, CLEAR_BOOTCAMP, CLEAR_BOOTCAMPS } from './types'
import axios from 'axios'

export const getAllBootCamps = () => async dispatch => {

    try {
        const res = await axios('/api/v1/bootcamps')

        dispatch({
            type: GET_BOOTCAMPS,
            payload: res.data.data
        })

    } catch (err) {
        console.error(err)
        dispatch({
            type: BOOTCAMP_ERROR
        })
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
        dispatch({
            type: BOOTCAMP_ERROR
        })
    }
    
}