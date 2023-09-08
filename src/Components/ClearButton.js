import React from 'react';

const ClearButton = ({ onClearCompletedTasks }) => {
  return (
    <div className="clear-button">
      <button onClick={onClearCompletedTasks}>Clear Completed Tasks</button>
    </div>
  );
};

export default ClearButton;
