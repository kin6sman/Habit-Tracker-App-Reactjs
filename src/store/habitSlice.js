import { createSlice } from '@reduxjs/toolkit';


const newHabitValue = {
      SixDays: [
        { day: 'Mon', status: 'none' },
        { day: 'Tue', status: 'none' },
        { day: 'Wed', status: 'none' },
        { day: 'Thu', status: 'none' },
        { day: 'Fri', status: 'none' },
        { day: 'Sat', status: 'none' },
        { day: 'Sun', status: 'none' }
      ]
    };

const habitsFromStorage = localStorage.getItem('newHabits');

// const habitsObject = {};



let habits = [...habitsFromStorage]


const initialState = {
  habitName: [{}]
}

habits.forEach(habit => { 
  initialState.habitName[habit] = {
    SixDays: [
      { day: 'Mon', status: 'none' },
      { day: 'Tue', status: 'none' },
      { day: 'Wed', status: 'none' },
      { day: 'Thu', status: 'none' },
      { day: 'Fri', status: 'none' },
      { day: 'Sat', status: 'none' },
      { day: 'Sun', status: 'none' },
    ]
  }
})


const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit(state, action){
      console.log(initialState.habitName);

      // const newHabitKey = action.payload;
      //   
        
      // state.habitName = Object.assign({}, initialState.habitName, { [newHabitKey]: newHabitValue });

      // state.habitName = {...state.habitName, [action.payload] : newHabitValue }

      state.habitName.push(action.payload);
      


      // state.habitName = [...state.habitName, action.payload];
    },
    deleteHabit(state, action){
      // console.log("dlt : " + action.payload);
    //   return state.filter((currVal, id) => {
    //          return action.payload !== id
    // })
  },
    changeStatus(state, action){

    }
  }
});

export const {addHabit, deleteHabit, changeStatus } = habitSlice.actions;

export default habitSlice.reducer;