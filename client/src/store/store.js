import { configureStore } from '@reduxjs/toolkit'
import loginReduser from './loginSlice'
import userReduser from './userSlice'


export const store = configureStore({
  reducer: {
    login: loginReduser,
    user: userReduser,
  },
})