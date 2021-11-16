import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    CONFERENCIA_COD
} from "../types";
import axios from '../../util/Api';

export const checklinkurl = (params) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.get('activevideocod',
      params
      ).then(({ data }) => {
        if (data) {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: CONFERENCIA_COD, payload: data.video_cod });
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