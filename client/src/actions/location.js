import * as api from "../api";
import { CREATELOCATION, FETCHLOCATION, UPDATELOCATION } from "../constants/actionType";
export const postLocation = (location) => async (dispatch) => {
    try {
        const { data } = await api.createLocation(location);
        dispatch({
            type: CREATELOCATION,
            payload: data
        })
    } catch (error) {
        console.log(error);
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
        console.log(error);
    }
}

export const updatedLocation = (id,location) => async (dispatch) => {
    try {
        console.log(location);
        const { data } = await api.updateLocation(id,location);
        console.log(data);
        dispatch({
            type: UPDATELOCATION,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}



