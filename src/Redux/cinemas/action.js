import axios from "axios"
import {
    GET_CINEMAS_FAILURE,
    GET_CINEMAS_REQUEST,
    GET_CINEMAS_SUCCESS
} from "./actionTypes"


// GET CINEMAS --------------------------------------------

const getCinemasRequest = () => {
    return {
        type: GET_CINEMAS_REQUEST
    }
}
const getCinemasSuccess = (payload) => {
    return {
        type: GET_CINEMAS_SUCCESS,
        payload
    }
}
const getCinemasFailure = () => {
    return {
        type: GET_CINEMAS_FAILURE
    }
}

export const getCinemas = () => dispatch => {
    dispatch(getCinemasRequest());
    return axios.get("https://62245c1c3af069a0f9b408a2.mockapi.io/hackathoncinemas")
        .then(res => dispatch(getCinemasSuccess(res.data)))
        .catch(error => dispatch(getCinemasFailure(error)))
}