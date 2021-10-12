import * as api from "../api";
import { CREATELOCATION, FETCHLOCATION, UPDATELOCATION, DELETELOCATION } from "../constants/actionType";
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
        dispatch(fetchLocation())
    } catch (error) {
        console.log(error);
    }
}

export const deleteLocation = (id) => async (dispatch) => {
    try {
        await api.deleteLocation(id);
        dispatch({ 
            type: DELETELOCATION, 
            payload: id
        })
        dispatch(fetchLocation())
    } catch (error) {
        console.log(error);
    }
}



