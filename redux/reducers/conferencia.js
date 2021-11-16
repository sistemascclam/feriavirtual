import {
    CONFERENCIA_COD,
  } from "../types";
  
  const INIT_STATE = {
    codconferencia: null,
  };
  
  const states = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CONFERENCIA_COD: {
        return {
          ...state,
          codconferencia: action.payload,
        }
      }
      default:
        return state;
    }
  }
  export default states;