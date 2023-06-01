import { configureStore } from '@reduxjs/toolkit'
// import habitsReducer from './habitSlice'
import habitReducer from './hSlice'
const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
})

export default store