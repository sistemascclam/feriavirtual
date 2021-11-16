import {
    SI_TE_LO_PERDISTE_LIST,
  } from "../types";
  
  const INIT_STATE = {
    siteloperdisteList: [],
  };
  
  const states = (state = INIT_STATE, action) => {
    switch (action.type) {
      case SI_TE_LO_PERDISTE_LIST: {
        return {
          ...state,
          siteloperdisteList: action.payload,
        }
      }
      default:
        return state;
    }
  }
  export default states;