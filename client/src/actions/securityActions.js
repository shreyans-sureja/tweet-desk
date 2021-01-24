import axios from "axios";
import setJWTToken from "../securityUtils/setJWTToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode"

export const createNewUser = (newUser, history) => async dispatch => {

    try{
        await axios.post("/api/user/register", newUser);
        history.push('/');
        dispatch({
            type: GET_ERRORS,
            payload:{}
        })
    }
    catch(err){
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data,
        })
    }
}


export const login = LoginRequest => async dispatch => {
    try{
        const res = await axios.post("/api/user/login", LoginRequest);
        const {token} = res.data;
        localStorage.setItem("jwtToken", token);
        setJWTToken(token);

        const decoded = jwt_decode(token);

        const pyload = {
            token : decoded,
            user : res.data.name,
        }

        dispatch({
            type: SET_CURRENT_USER,
            payload: pyload
        })

    }
    catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        })
    }
}


export const logout = () => dispatch =>{
    localStorage.removeItem("jwtToken")
    setJWTToken(false)
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
}