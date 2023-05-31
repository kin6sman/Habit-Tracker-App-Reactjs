import { createSlice } from '@reduxjs/toolkit';

const habitssFromStorage = localStorage.getItem('newHabits') ? JSON.parse(localStorage.getItem('newHabits')) : '' ;

console.log(habitssFromStorage);

const initialState = {
  habits: [
    {
      title: 'early bird',
      description: 'wake up at 4:00 am',
    },
    {
      title: '20 min read',
      description: 'kill your ignorance daily by reaading',
    },
    ...habitssFromStorage,
    
  ],

}


const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabits: (state, action) => {
      state.habits = [...state.habits, action.payload]
    }
  }
})

export const { addHabits } = habitSlice.actions;
export default habitSlice.reducer