import * as api from "../api";
import { CREATELOCATION, FETCHLOCATION, SETLOCATION } from "../constants/actionType";
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

// export const setLocation = (data) => async (dispatch) => {
//     try {
//         console.log(data);
//         dispatch({
//             type: SETLOCATION,
//             payload: data
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }



