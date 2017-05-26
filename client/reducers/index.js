import { combineReducers } from 'redux'
import status from './status'
import query from './query'

const rootReducer = combineReducers({ status, query })

export default rootReducer
