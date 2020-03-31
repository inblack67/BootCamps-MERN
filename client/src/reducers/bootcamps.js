import { GET_BOOTCAMPS, GET_BOOTCAMP, BOOTCAMP_ERROR, CLEAR_BOOTCAMP, CLEAR_BOOTCAMPS } from '../actions/types'

const initialState = {
    bootcamps: null,
    bootcamp: null,
    loading: true
}

export default (state=initialState, action) => {

    const { payload, type } = action

    switch(type){
        case GET_BOOTCAMPS:
            return {
                ...state,
                bootcamps: payload,
                loading: false
            }
   
        case GET_BOOTCAMP:
            return {
                ...state,
                bootcamp: payload,
                loading: false
            }

        case BOOTCAMP_ERROR:
        case CLEAR_BOOTCAMP:
        case CLEAR_BOOTCAMPS:
            return {
                ...state,
                bootcamps: null,
                bootcamp: null,
                loading: false
            }

        default: return state
    }

}