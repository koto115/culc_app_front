import { SCHEDULE, NEW_SCHEDULE } from "../types"
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = process.env.REACT_APP_API_URL;

// ログイン時に自動で作成するようにしたい
export const fetchAsyncCreateSchedule = createAsyncThunk(
  "schedule/post",
  async (newSchedule: NEW_SCHEDULE) => {
    const res = await axios.post(`${apiURL}api/schedule/`, newSchedule, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      }
    });
    return res.data
  }
)

// ログイン時に自動で作成するようにしたい
export const fetchAsyncGetSchedule = createAsyncThunk(
  "scedule/get",
  async () => {
    const res = await axios.get(`${apiURL}api/myschedule/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      }
    })
    return res.data[0]
  }
)

export const fetchAsyncUpdateSchedule = createAsyncThunk(
  "schedule/put",
  async (schedule: SCHEDULE) => {
    const res = await axios.put(`${apiURL}api/schedule/${schedule.id}/`, schedule, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`
      }
    })
    return res.data
  }
)
