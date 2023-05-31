import { configureStore } from '@reduxjs/toolkit'
import habitsReducer from './habitSlice'
const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
})

export default store