import React, { useState } from 'react';
import './week.css';


const WeeklyStatus = ({ habitIndex, weeklyStatus, toggleHabitStatus }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleStatus = (dayIndex) => {
    toggleHabitStatus(habitIndex, dayIndex);
  };

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="weekly-status">
      <div className="accordion" onClick={toggleAccordion}>
        <h4 className="accordion-title">Weekly Status</h4>
        <span className={`accordion-icon ${isExpanded ? 'expanded' : ''}`}></span>
      </div>
      {isExpanded && (
        <div className="status-buttons">
          {weeklyStatus.map((status, dayIndex) => (
            <button
              key={dayIndex}
              onClick={() => handleToggleStatus(dayIndex)}
              className={`status-btn ${status ? 'completed' : ''}`}
            >
              {daysOfWeek[dayIndex]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeeklyStatus;

