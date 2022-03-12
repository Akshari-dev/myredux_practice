import {combineReducers, createStore} from "redux"
import Calculator from "./reducers/calculator_reducer"
import ToDoListReducer from './reducers/todoListReducer'

// create multiple reducers and add here 
const reducers=combineReducers({calculator:Calculator,todoList:ToDoListReducer})

const Store=createStore(reducers)

export default Store;