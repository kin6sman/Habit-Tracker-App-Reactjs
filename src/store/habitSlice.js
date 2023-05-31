import { createSlice } from '@reduxjs/toolkit';

const habitSlice = createSlice({
  name: 'habit',
  initialState: [],
  reducers: {
    addHabit(state, action){},
    deleteHabit(state, action){},
    dailyStatus(state, action){},
    weeklyStatus(state, action){}
  }
});

export const {addHabit, deleteHabit, dailyStatus, weeklyStatus } = habitSlice.actions;

export default habitSlice.reducer;