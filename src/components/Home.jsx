// import React, { useState } from 'react'
// import DeleteBtn from './DeleteBtn'
// import { useSelector } from 'react-redux';

// import { useDispatch } from 'react-redux';
// import { addHabit, deleteHabit } from '../store/habitSlice';





// function Home() {

//   const dispatch = useDispatch();

//   const habits = useSelector((state) => state.habits);

//   // console.log("store: " + habits.habitName.habit);
  
//   const [item, setItem] = useState('');
//   const [list, setList] = useState([]);

//   const isTyped = (e) => {
//     // console.log(e)
//     setItem(e.target.value);
//   } 

//   const handledClick = (e) => {
//     e.preventDefault();

//     dispatch(addHabit(item))

//     if(e.target.innerText === 'Add'){
//       setList((preValue) => {
//         return [...preValue, item]
//       })
//       setItem('');
//     }
    
//   }

//   const deleteItem = (idx) => {
    
//     dispatch(deleteHabit(idx));
      
    
//   }

//   return (
//     <>
//       <h1>Habit Tracker App</h1>
//       <div>
//         <input type='text' onChange={isTyped} value={item}/>
//         <button onClick={handledClick}>Add</button>
//       </div>
//       <div>

//         {habits.habitName.map((val, idx) => {
//           return (
            
//             <li key={idx}>
//               {val}
//               <button>status</button>
              

//               <button onClick={() => deleteItem(idx)}>Delete</button>
              

               
//             </li>
//           )
//         })}
        
//       </div>
//     </>
//   )
// }

// export default Home










import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHabit, deleteHabit, toggleHabitStatus } from '../store/hSlice';
import WeeklyStatus from './Week';
import './HabitTracker.css';

const HabitTracker = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  const [newHabit, setNewHabit] = useState('');

  const handleAddHabit = () => {
    if (newHabit.trim() !== '') {
      dispatch(addHabit(newHabit));
      setNewHabit('');
    }
  };

  const handleDeleteHabit = (habitIndex) => {
    dispatch(deleteHabit(habitIndex));
  };

  const handleToggleHabitStatus = (habitIndex, dayIndex) => {
    dispatch(toggleHabitStatus({ habitIndex, dayIndex }));
  };

  return (
    <div className="habit-tracker">
      <h1 className="habit-tracker-title">Habit Tracker</h1>
      <div className="habit-input">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Enter a new habit"
          className="habit-input-field"
        />
        <button onClick={handleAddHabit} className="habit-add-btn">
          Add Habit
        </button>
      </div>
      <ul className="habit-list">
        {habits.map((habit, habitIndex) => (
          <li key={habitIndex} className="habit-item">
            <span
              className={`habit-name ${habit.completed ? 'completed' : ''}`}
            >
              {habit.name}
            </span>
            <button
              onClick={() => handleDeleteHabit(habitIndex)}
              className="delete-btn"
            >
              Delete
            </button>
            <WeeklyStatus
              habitIndex={habitIndex}
              weeklyStatus={habit.weeklyStatus}
              toggleHabitStatus={handleToggleHabitStatus}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;