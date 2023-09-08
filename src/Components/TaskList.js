import React from 'react';

const TaskList = ({
  currentDate,
  tasks,
  taskInput,
  onAddTask,
  onToggleTaskCompletion,
  onClearCompletedTasks,
  onTaskInputChange,
}) => {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="task-list">
      {/* <h3>Tasks for {currentDate.toLocaleDateString()}</h3> */}
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskInput}
        onChange={onTaskInputChange}
      />
      <button onClick={onAddTask}>Add Task</button>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`task-item ${task.completed ? 'completed' : ''}`}
            onClick={() => onToggleTaskCompletion(index)}
          >
            {task.completed ? '✔️ ' : ''} {task.text}
          </div>
        ))}
      </div>
      {completedTasks.length > 0 && (
        <button onClick={onClearCompletedTasks}>Clear Completed Tasks</button>
      )}
    </div>
  );
};

export default TaskList;
