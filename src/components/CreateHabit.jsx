import React from 'react'
import { useState } from 'react';
import { Model, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addHabit } from '../features/habitSlice';
import { habits } from '../App'
// import 'bootstrap/dist/css/bootstrap.min.css';


const CreateHabit = (props) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch()

  const AddHabitHandler = () => {
    const currentHabit = { title, description }
    habits.push(currentHabit)
    console.log(habits)
    if(habits.length !== 0){
      localStorage.setItem('newHabit', JSON.stringify(habits))
    }
    dispatch(addHabit({ title, description }))

    props.onHide()
  }

  return (
    <>
      <Model {...props} size='sm' aria-labelledby='contained-model-title-vcenter' centered>
        <Model.Dialog className='model-sm'>
          <Model.Body>
            <Form.Group controlId='title'>
              <Form.Label>Habit Title</Form.Label>
              <Form.Control 
              type='text' 
              placeholder='Enter Title' 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}></Form.Control>

            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Describe it </Form.Label>
              <Form.Control
                type='text'
                placeholder='short description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>

            <Model.Footer>
              <Button onClick={() => AddHabitHandler()}>Add Habit</Button>
            </Model.Footer>



          </Model.Body>
        </Model.Dialog>
      </Model>
    </>
  )
}

export default CreateHabit