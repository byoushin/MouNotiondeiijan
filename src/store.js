import {createStore} from "redux"
import rootReducer from "./rootReducer"

export const store = configureStore(rootReducer)