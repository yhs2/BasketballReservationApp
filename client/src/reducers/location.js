import { bindActionCreators } from "redux";
import { CREATELOCATION, FETCHLOCATION } from "../constants/actionType";


const locationReducer = (state = {post : []}, action) => {
    switch (action.type) {
        case FETCHLOCATION:
            
            return (
                {
                    ...state,
                    post : action.payload,
                }
            )
        case CREATELOCATION:

            return {
                ...state,
                post : [...state.post , action.payload]
            }

        default:
            return state;
    }
}

export default locationReducer