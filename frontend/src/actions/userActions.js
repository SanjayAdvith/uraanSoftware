import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_SURVEY_REQUEST,
    USER_SURVEY_SUCCESS,
    USER_SURVEY_FAIL,
    SURVEY_LIST_REQUEST,
    SURVEY_LIST_SUCCESS,
    SURVEY_LIST_FAIL

} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            '/api/users/login',
            { email, password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })

    document.location.href = '/login'
}



export const register = (name, email, password, address, qualification, mobile, pin) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            '/api/users',
            { name, email, password, address, qualification, mobile, pin },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const survey = (name, email, age, occupation, mobile, pin, address, district, state, message) => async (dispatch) => {
    try {
        dispatch({
            type: USER_SURVEY_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            '/api/users/survey',
            { name, email, age, occupation, mobile, pin, address, district, state, message },
            config
        )

        dispatch({
            type: USER_SURVEY_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('survey', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SURVEY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}



export const listSurvey = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SURVEY_LIST_REQUEST,
        })
        const { data } = await axios.get(`/api/users/survey`)

        dispatch({
            type: SURVEY_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        dispatch({
            type: SURVEY_LIST_FAIL,
            payload: message,
        })
    }
}

