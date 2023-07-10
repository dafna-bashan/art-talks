import { combineReducers } from 'redux'
import { errorReducer } from './errorReducer'
import { systemReducer } from './systemReducer'
import { itemReducer } from './itemReducer'


export const rootReducer = combineReducers({
  itemModule: itemReducer,
  systemModule: systemReducer,
  errorModule: errorReducer

})
