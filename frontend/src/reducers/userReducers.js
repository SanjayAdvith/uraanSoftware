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
    SURVEY_LIST_FAIL,
    SURVEY_LIST_RESET,
} from '../constants/userConstants'


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userSurveyReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SURVEY_REQUEST:
            return { loading: true }
        case USER_SURVEY_SUCCESS:
            return { loading: false, surveyInfo: action.payload }
        case USER_SURVEY_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const surveyListReducer = (state = { survey: [] }, action) => {
    switch (action.type) {
        case SURVEY_LIST_REQUEST:
            return { loading: true }
        case SURVEY_LIST_SUCCESS:
            return { loading: false, survey: action.payload }
        case SURVEY_LIST_FAIL:
            return { loading: false, error: action.payload }
        case SURVEY_LIST_RESET:
            return { users: [] }
        default:
            return state
    }
}



