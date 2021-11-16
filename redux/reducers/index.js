import { combineReducers } from 'redux'
import common from  "./common"
import auth from  "./auth"
import conferencia from  "./conferencia"
import videoalmacen from  "./videoalmacen"

// COMBINED REDUCERS
const reducers = {
  common: common,
  auth: auth,
  conferencia: conferencia,
  videoalmacen: videoalmacen,
}

export default combineReducers(reducers)
