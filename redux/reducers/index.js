import { combineReducers } from 'redux'
import common from  "./common"
import auth from  "./auth"


// COMBINED REDUCERS
const reducers = {
  common: common,
  auth: auth,
}

export default combineReducers(reducers)
