import React, { useState } from 'react'
import DeleteBtn from './DeleteBtn'
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { addHabit, deleteHabit } from '../store/habitSlice';





function Home() {

  const dispatch = useDispatch();

  const habits = useSelector((state) => state.habits);

  console.log("store: " + habits);
  
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const isTyped = (e) => {
    // console.log(e)
    setItem(e.target.value);
  } 

  const handledClick = (e) => {
    e.preventDefault();

    dispatch(addHabit(item))

    if(e.target.innerText === 'Add'){
      setList((preValue) => {
        return [...preValue, item]
      })
      setItem('');
    }
    
  }

  const deleteItem = (idx) => {
    
    dispatch(deleteHabit(idx));
      // setList((oldValue) => {
      //    return oldValue.filter((currVal, id) => {
      //      return idx !== id
      //    })
      //   })
    
  }

  return (
    <>
      <h1>Habit Tracker App</h1>
      <div>
        <input type='text' onChange={isTyped} value={item}/>
        <button onClick={handledClick}>Add</button>
      </div>
      <div>

        {habits.map((val, idx) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li key={idx}>
              {val}
              <button>status</button>
              {/* <DeleteBtn name={val} key={idx} id={idx} onSelect={deleteItem}/> */}

              <button onClick={() => deleteItem(idx)}>Delete</button>
              

               {/* >Delete</button> */}
            </li>
          )
        })}
        
      </div>
    </>
  )
}

export default Home