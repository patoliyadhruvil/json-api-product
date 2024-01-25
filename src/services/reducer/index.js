import { combineReducers } from 'redux'
import {thunkReduxReducer} from "./student.reducer"
export const   rootReducer = combineReducers({
     admin: thunkReduxReducer,
  });