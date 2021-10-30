import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    SHOW_MESSAGE,
    USER_TOKEN,
    USER_DATA,
    USER_EXIST_DATA,
    SIGNOUT_USER_SUCCESS
} from "../types";
import axios from '../../util/Api';

export const signup = (params) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.post('auth/signup',
      params
      ).then(({ data }) => {
        if (data) {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: SHOW_MESSAGE, payload: data.message });
            dispatch({ type: USER_EXIST_DATA, payload: {} });
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

export const signin = (params) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.post('auth/login',
      params
      ).then(({ data }) => {
        if (data) {
            dispatch({ type: FETCH_SUCCESS });
            localStorage.setItem("tokenferia", data.data.token);
            localStorage.setItem("userferia", data.data.name);
            axios.defaults.headers.common['Authorization'] = "Bearer " + data.data.token;
            dispatch({ type: SHOW_MESSAGE, payload: data.message });
            dispatch({ type: USER_DATA, payload: data.data.name });
            dispatch({ type: USER_TOKEN, payload: data.data.token });
            dispatch({ type: USER_EXIST_DATA, payload: {} });
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

export const checkuser = (params) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.post('auth/check',
      params
      ).then(({ data }) => {
        if (data) {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: USER_EXIST_DATA, payload: data });
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

export const resetcheck=()=>{
    return (dispatch) => {
    dispatch({ type: USER_EXIST_DATA, payload: {} });
    }
}

export const setLocalStorageAuth=()=>{
  return (dispatch) => {
    let token=localStorage.getItem("tokenferia");
    if(token){
      dispatch({ type: USER_DATA, payload: localStorage.getItem("userferia") });
      dispatch({ type: USER_TOKEN, payload: localStorage.getItem("tokenferia") });
      axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("tokenferia");
    }
  }
}

export const logout = (params) => {
  localStorage.removeItem("tokenferia");
  localStorage.removeItem("userferia");
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.post('logout',
      params
      ).then(({ data }) => {
        if (data) {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: USER_DATA, payload:null });
            dispatch({ type: USER_TOKEN, payload: null });
            dispatch({ type: USER_EXIST_DATA, payload: {} });
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