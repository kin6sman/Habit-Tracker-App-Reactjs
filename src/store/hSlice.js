import { createSlice } from '@reduxjs/toolkit';

const habitSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      state.push({ name: action.payload, completed: false, weeklyStatus: Array(7).fill(false) });
    },
    deleteHabit: (state, action) => {
      state.splice(action.payload, 1);
    },
    toggleHabitStatus: (state, action) => {
      const { habitIndex, dayIndex } = action.payload;
      state[habitIndex].weeklyStatus[dayIndex] = !state[habitIndex].weeklyStatus[dayIndex];
    },
  },
});

export const { addHabit, deleteHabit, toggleHabitStatus } = habitSlice.actions;
export default habitSlice.reducer;
