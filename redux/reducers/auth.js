import {
    USER_DATA, 
    USER_EXIST_DATA,
    USER_TOKEN,
    SIGNOUT_USER_SUCCESS
  } from "../types";
  
  const INIT_STATE = {
    token: null,
    authUser: null,
    userExists: {},
    authStatusActions: 0,
  };
  
  const states = (state = INIT_STATE, action) => {
    switch (action.type) {
      case SIGNOUT_USER_SUCCESS: {
        return {
          ...state,
          token: null,
          authUser: null
        }
      }
  
      case USER_DATA: {
        return {
          ...state,
          authUser: action.payload,
        };
      }
  
      case USER_EXIST_DATA: {
        return {
          ...state,
          userExists: action.payload,
        };
      }
  
      case USER_TOKEN: {
        return {
          ...state,
          token: action.payload,
        };
      }
      default:
        return state;
    }
  }
  export default states;