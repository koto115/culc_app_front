import { PROPS_AUTHEN } from "../types"
import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAsyncCreateSchedule, fetchAsyncGetSchedule, fetchAsyncUpdateSchedule } from "../schedule/ScheduleSlice";

const apiURL = process.env.REACT_APP_API_URL;


export const fetchAsyncRegister = createAsyncThunk(
  // これがアクションタイプ
  "auth/register",
  async (authen: PROPS_AUTHEN) => {
    const res = await axios.post(`${apiURL}api/register/`, authen, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return res.data
  }
)

export const fetchAsyncGetJWT = createAsyncThunk(
  "auth/post",
  async (auth: PROPS_AUTHEN) => {
    const res = await axios.post(`${apiURL}authen/jwt/create/`, auth, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    return res.data;
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    openSignIn: true,
    openSignUp: false,
    openSchedule: false,
    mySchedule: {
      id: 0,
      userSchedule: 0,
      nickName: "",
      subs: [""],
    },
  },
  reducers: {
    setOpenSignIn(state) {
      state.openSignIn = true;
    },
    resetOpenSignIn(state) {
      state.openSignIn = false;
    },
    setOpenSignUp(state) {
      state.openSignUp = true;
    },
    resetOpenSignUp(state) {
      state.openSignUp = false;
    },
    setOpenSchedule(state) {
      state.openSchedule = true;
    },
    resetOpenSchedule(state) {
      state.openSchedule = false;
    },
    setSubsArray(state, action) {
      state.mySchedule.subs = action.payload
    },
    resetSubsArray(state, action) {
      state.mySchedule = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetJWT.fulfilled, (state, action) => {
      // localJWT にJWT認証情報を格納
      localStorage.setItem('localJWT', action.payload.access)
    });
    builder.addCase(fetchAsyncCreateSchedule.fulfilled, (state, action) => {
      state.mySchedule = action.payload
    });
    builder.addCase(fetchAsyncGetSchedule.fulfilled, (state, action) => {
      state.mySchedule = action.payload
    });
    builder.addCase(fetchAsyncUpdateSchedule.fulfilled, (state, action) => {
      state.mySchedule = action.payload
    })
  },
})

export const {
  setOpenSignIn,
  resetOpenSignIn,
  setOpenSignUp,
  resetOpenSignUp,
  setOpenSchedule,
  resetOpenSchedule,
  setSubsArray,
  resetSubsArray,
} = authSlice.actions;

export const selectOpenSignIn = (state: RootState) => state.auth.openSignIn;
export const selectOpenSignUp = (state: RootState) => state.auth.openSignUp;
export const selectOpenMySchedule = (state: RootState) => state.auth.openSchedule;
export const selectSchedule = (state: RootState) => state.auth.mySchedule;

export default authSlice.reducer
