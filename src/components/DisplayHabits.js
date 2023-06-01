import React, { useState } from 'react'

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { deleteHabit,  workStatus } from '../store/habitSlice';
import Week from './Week';


const DisplayHabits = () => {

  const [task, setTask] = useState('undone');  
  const dispatch = useDispatch();

  const { habitName } = useSelector((state) => state.habits);
  
  // console.log(previousHabits)

// delete button function
  const deleteItem = (idx) => {
    dispatch(deleteHabit(idx));
  }




  return (
    <>
      <div>

          {
            
            habitName.map((val, idx) => {
              return (
                
                <li key={idx}>
                  {val}
                  {/* <button onClick={(e) => dailyStatus(e.target.innerText, idx)}>{task}</button> */}
                
                  <button onClick={() => deleteItem(idx)}>Delete</button>
                  <>
                    <Week id={idx}/>
                  </>
                  
                </li>
              )
            })

            
          
              
          }

      </div>
    </>
  )
}

export default DisplayHabits