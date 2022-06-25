import axios from "axios";
export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    //"x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdlZTk1MWFkZGMwNDU4NTMyNzhkNzYiLCJub21lIjoiRnVsYW5vIGNvbSBiY3J5cHQiLCJpYXQiOjE2NTQzMDIyOTUsImV4cCI6MTY1NDMwNTg5NX0.B8LM5_zraMC-RegJLrw4HNi6fcJuHaKzCQ1Jev4pY0Y"
    "x-auth-token" : sessionStorage.getItem('token')
  },
});
