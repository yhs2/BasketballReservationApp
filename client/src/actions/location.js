import * as api from "../api";
import { CREATELOCATION } from "../constants/actionType";
export const postLocation = (signInData, history) => async (dispatch) => {
    try {
        const { data } = await api.createLocation(signInData);
        // dispatch({
        //     type: CREATELOCATION,
        //     data
        // })
        // history.push('/')
    } catch (error) {
        
    }
}

