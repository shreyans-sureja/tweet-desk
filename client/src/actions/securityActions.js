import axios from "axios";
import setJWTToken from "../securityUtils/setJWTToken";
import { GET_ERRORS, SET_CURRENT_USER, SET_CURRENT_PROFILE } from "./types";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post("http://127.0.0.1:8080/api/user/register", newUser);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });

    alert("Sign up successful!");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const login = (LoginRequest) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8080/api/user/login",
      LoginRequest
    );
    const token = res.data.token;
    localStorage.setItem("jwtToken", token);
    setJWTToken(token);

    const decoded = jwt_decode(token);

    const pyload = {
      token: decoded._id,
      user: res.data.name,
    };

    dispatch({
      type: SET_CURRENT_USER,
      payload: pyload,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {},
  });
};

export const getProfile = (Profile) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:8080/api/tweet/profile/${Profile.handle}`
    );

    const pyload = res.data;

    dispatch({
      type: SET_CURRENT_PROFILE,
      payload: pyload,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
