import {
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS,
    AUTH_LOGOUT
} from "./auth.type"

let token = localStorage.getItem('token') || "";

let initState = {
    loading: false,
    error: false,
    data : {
        token,
        isAuth: false,
    }
}


export const authReducer = (state = initState, {type, payload}) =>{

    switch(type){
        case AUTH_LOGIN_LOADING : 
            return {
                ...state,
                loading :true,
                error: false,
            }
        case AUTH_LOGIN_ERROR : 
            return {
                ...state,
                loading : false,
                error: true,
            }
        case AUTH_LOGIN_SUCCESS : 
            localStorage.setItem(JSON.stringify('token', payload));
            return {
                ...state,
                loading : false,
                error: false,
                data : {
                    token : payload,
                    isAuth: true
                }
            }
        case AUTH_SIGNUP_LOADING : 
            return {
                ...state,
                loading :true,
                error: false,
            }
        case AUTH_SIGNUP_ERROR : 
            return {
                ...state,
                loading : false,
                error: true,
            }
        case AUTH_SIGNUP_SUCCESS : 
            localStorage.setItem(JSON.stringify('token', payload));
            return {
                ...state,
                loading : false,
                error: false,
                data : {
                    token : payload,
                    isAuth: true
                }
            }
        case AUTH_LOGOUT : 
            localStorage.removeItem('token')
            return {
                ...state,
                data: {
                    token : '',
                    isAuth : false,
                }
            }
        default :
            return state;
    }

}