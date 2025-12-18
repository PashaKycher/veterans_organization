import { configureStore } from '@reduxjs/toolkit'
import loginReduser from './loginSlice'


export const store = configureStore({
  reducer: {
    login: loginReduser,
  },
})