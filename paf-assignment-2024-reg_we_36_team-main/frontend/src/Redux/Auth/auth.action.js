import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signin`,
      loginData.data
    );

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      // loginData.navigate //redirect the user to another page upon successful login
    }

    console.log("login success",data)

    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("-----", error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};


export const registerUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        loginData.data
      );
  
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        // loginData.navigate //redirect the user to another page upon successful registration
      }

      console.log("register success",data)
  
      dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });

    } catch (error) {
      console.log("-----", error);
      dispatch({ type: LOGIN_FAILURE, payload: error });
    }
  };
