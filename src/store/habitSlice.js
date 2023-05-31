import { createSlice } from '@reduxjs/toolkit';

const habitSlice = createSlice({
  name: 'habit',
  initialState: [],
  reducers: {
    addHabit(state, action){
      // console.log("addHabit : " + action.payload);

      state.push(action.payload);
    },
    deleteHabit(state, action){
      // console.log("dlt : " + action.payload);
      return state.filter((currVal, id) => {
             return action.payload !== id
    })},
    dailyStatus(state, action){},
    weeklyStatus(state, action){}
  }
});

export const {addHabit, deleteHabit, dailyStatus, weeklyStatus } = habitSlice.actions;

export default habitSlice.reducer;