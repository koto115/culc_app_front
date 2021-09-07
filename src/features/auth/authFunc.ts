import { PROPS_AUTHEN } from "../types"
import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const apiURL = process.env.REACT_APP_API_URL;


export const fetchAsyncRegister = async (authen: PROPS_AUTHEN) => {
  const res = await axios.post(`${apiURL}api/register/`, authen, {
      headers: {
          "Content-Type": "application/json"
      }
  });
  return res.data
}

export const fetchAsyncGetJWT = async (auth: PROPS_AUTHEN) => {
  const res = await axios.post(`${apiURL}authen/jwt/create/`, auth, {
      headers: {
          "Content-Type": "application/json",
      }
  });
  return res.data;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    isCloseForm: true,
  },
  reducers: {
    toLogin(state) {
      state.isLogin = !state.isCloseForm;
    },
    closeForm(state) {
      state.isCloseForm = !state.isCloseForm;
    }
  }
})

export const {
  toLogin,
  closeForm
} = authSlice.actions;

export const selectIsLogin = (state: RootState) => state.auth.isLogin;
export const selectIsForm = (state: RootState) => state.auth.isCloseForm;

export default authSlice.reducer