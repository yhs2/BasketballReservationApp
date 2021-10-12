import { bindActionCreators } from "redux";
import { CREATELOCATION, FETCHLOCATION, SETLOCATION, UPDATELOCATION, DELETELOCATION} from "../constants/actionType";


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
                formLocation: action.payload
            }


        case UPDATELOCATION:
            return {
                ...state,
                post : state.post.map((post) => post._id === action.payload ? action.payload : post)
            }


        case DELETELOCATION:
            return {
                ...state,
                post : state.post.filter((post) => post._id !== action.payload)
            }
        default:
            return state;
    }
}

export default locationReducer