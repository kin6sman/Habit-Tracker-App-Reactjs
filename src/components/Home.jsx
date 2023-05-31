import React, { useState } from 'react'
import DeleteBtn from './DeleteBtn'




function Home() {

  
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const isTyped = (e) => {
    // console.log(e)
    setItem(e.target.value);
  } 

  const handledClick = (e) => {
    if(e.target.innerText === 'Add'){
      setList((preValue) => {
        return [...preValue, item]
      })
      setItem('');
    }
    
  }

  const deleteItem = (idx) => {
    
      setList((oldValue) => {
         return oldValue.filter((currVal, id) => {
           return idx !== id
         })
        })
    
  }

  return (
    <>
      <h1>Habit Tracker App</h1>
      <div>
        <input type='text' onChange={isTyped} value={item}/>
        <button onClick={handledClick}>Add</button>
      </div>
      <div>

        {list.map((val, idx) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li>
              {val}
              <button>status</button>
              <DeleteBtn name={val} key={idx} id={idx} onSelect={deleteItem}/>
              

               {/* >Delete</button> */}
            </li>
          )
        })}
        
      </div>
    </>
  )
}

export default Home