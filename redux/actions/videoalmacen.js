import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SI_TE_LO_PERDISTE_LIST
} from "../types";
import axios from '../../util/Api';

export const listsiteloperdiste = (params) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.get('siteloperdistelist',
    params
    ).then(({ data }) => {
      if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: SI_TE_LO_PERDISTE_LIST, payload: data });
      } else {
        dispatch({ type: FETCH_ERROR, payload: data.error });
      }
    }).catch(function (error) {
      if (error.response) {
        dispatch({ type: FETCH_ERROR, payload: error.response.data.message });
      } else {
        dispatch({ type: FETCH_ERROR, payload: error });
      }
    });
  }
};