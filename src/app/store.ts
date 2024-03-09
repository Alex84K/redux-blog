import {legacy_createStore as createStore} from 'redux'
import { myReducer } from "../myReducers";

const initialState = {
    startState: []
}

export const store = createStore(myReducer, initialState)
