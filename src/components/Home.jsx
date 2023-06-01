
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHabit, deleteHabit, toggleHabitStatus } from '../store/hSlice';
import WeeklyStatus from './Week';
import './HabitTracker.css';

import { Typography, TextField, Button, List, ListItem, IconButton, Grid } from '@mui/material';
import { Delete } from '@mui/icons-material';

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
    <div>
      <Typography variant="h4" gutterBottom>
        
      </Typography>
      <Grid container spacing={2} alignItems="center" className='gridTextBox'>
        <Grid item xs={12} md={8}>
          <TextField
            type="text"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            label="Enter a new habit"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="contained" color="primary" onClick={handleAddHabit} fullWidth>
            Add Habit
          </Button>
        </Grid>
      </Grid>
      <List style={{ marginTop: '10px' }}>
        {habits.map((habit, habitIndex) => (
          <ListItem key={habitIndex} style={{ marginBottom: '10px' }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography
                  variant="body1"
                  component="span"
                  style={{
                    fontSize: '1.2rem',
                    textDecoration: habit.completed ? 'line-through' : 'none',
                  }}
                >
                  {habit.name}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={2}>
                <WeeklyStatus
                  habitIndex={habitIndex}
                  weeklyStatus={habit.weeklyStatus}
                  toggleHabitStatus={handleToggleHabitStatus}
                />
              </Grid>
              <Grid item xs={6} sm={2}>
                <IconButton onClick={() => handleDeleteHabit(habitIndex)} color="secondary">
                  <Delete />
                </IconButton>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default HabitTracker;
