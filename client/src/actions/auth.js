import * as api from "../api";
import { AUTH } from "../constants/actionType";
export const signIn = (signInData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(signInData);
        dispatch({
            type: AUTH,
            data
        })
        history.push('/')
    } catch (error) {
        
    }
}

export const signUp = (signUpData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(signUpData);
        dispatch({
            type: AUTH,
            data
        })
        history.push('/')
    } catch (error) {
        
    }
}