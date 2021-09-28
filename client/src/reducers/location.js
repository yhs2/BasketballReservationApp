import { bindActionCreators } from "redux";
import { CREATELOCATION, FETCHLOCATION, SETLOCATION} from "../constants/actionType";


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
        
        case SETLOCATION:
            return {
                ...state,
                formLocation: state.post.find(post => post._id === action.payload)
            }

        default:
            return state;
    }
}

export default locationReducer