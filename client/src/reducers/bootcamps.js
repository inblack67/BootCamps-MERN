import { GET_BOOTCAMPS, GET_BOOTCAMP, BOOTCAMP_ERROR, CLEAR_BOOTCAMP, CLEAR_BOOTCAMPS, ADD_BOOTCAMP, DELETE_BOOTCAMP } from '../actions/types'
import M from 'materialize-css/dist/js/materialize.min.js';

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

        case ADD_BOOTCAMP: 
            return {
                ...state,
                bootcamps: [...state.bootcamps, payload],
                loading: false
            }

        case DELETE_BOOTCAMP: 
            return {
                ...state,
                bootcamps: state.bootcamps.filter(boot => boot._id !== payload),
                loading: false
            }

        case BOOTCAMP_ERROR:
        case CLEAR_BOOTCAMP:
        case CLEAR_BOOTCAMPS:
            M.toast({ html: payload })
            return {
                ...state,
                bootcamps: null,
                bootcamp: null,
                loading: false
            }

        default: return state
    }

}