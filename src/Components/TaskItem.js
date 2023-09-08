import React from 'react';

const TaskItem = ({ task, index, onDeleteTask, onToggleTaskCompletion }) => {
  return (
    <div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      onClick={() => onToggleTaskCompletion(index)}
    >
      <span className="task-text">{task.text}</span>
      <button className="delete-task-button" onClick={() => onDeleteTask(index)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
