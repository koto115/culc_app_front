import { SCHEDULE } from "../types"
import axios from 'axios'

const apiURL = process.env.REACT_APP_API_URL;

export const fetchAsyncCreateSchedule = async (schedule: SCHEDULE) => {
  const res = await axios.post(`${apiURL}api/schedule`, schedule, {
    headers: {
      Authorization: `JWT ${localStorage.localJWT}`,
    }
  });
  return res.data
}

export const fetchAsyncGetSchedule = async () => {
  const res = await axios.get(`${apiURL}api/schedule`, {
    headers: {
      Authorization: `JWT ${localStorage.localJWT}`,
    }
  })
  return res.data
}