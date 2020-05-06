import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import  {createLogger}  from 'redux-logger'
import {authentication} from '../reducer/AuthReducer'


const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
  authentication,
  //registration,
  users
  //alert
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)



