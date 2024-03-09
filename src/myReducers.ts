import { GET_ALL_BLOGS, PUT_QUOTE } from "./actions/myActions";
import { BlogsAction, ReduxAction, RootState, RootStateBlog } from "./utils/type";

const initialState: RootStateBlog = {
    startState: []
}

export const myReducer = (state = initialState, action: BlogsAction) => {
    switch (action.type) {
    case GET_ALL_BLOGS:
        return {...state, startState:[...state.startState, action.payload]}
        default:
            return state;
    }
}