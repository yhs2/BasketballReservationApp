import * as api from "../api";
import { CREATELOCATION, FETCHLOCATION } from "../constants/actionType";
export const postLocation = (location) => async (dispatch) => {
    try {
        const { data } = await api.createLocation(location);
        dispatch({
            type: CREATELOCATION,
            payload: data
        })
    } catch (error) {
        
    }
}

export const fetchLocation = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLocation();
        dispatch({
            type: FETCHLOCATION,
            payload: data
        })
    } catch (error) {
        
    }
}

