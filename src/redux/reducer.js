import {
    GET_TOTAL, POST_ENTRY
} from "./actions"

const initialState = {
    fundTotal: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        
        case GET_TOTAL:
            return {
                ...state, 
                fundTotal:action.payload
            };            
        
        case POST_ENTRY:
            return {
                ...state,
                fundTotal:action.payload.totalAmount
            };

        default:
            return state;
    }

};

export default rootReducer;