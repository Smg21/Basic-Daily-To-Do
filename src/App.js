import React, { useState } from 'react';
import Header from './Components/Header';
import Calendar from './Components/Calendar';
import TaskList from './Components/TaskList';
import ClearButton from './Components/ClearButton';

const App = () => {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');


  const changeDate = (newDate) => {
    setCurrentDate(newDate);
  };

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };


  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };


  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <Header currentDate={currentDate} />
      <Calendar currentDate={currentDate} onChangeDate={changeDate} />
      <h1>DAILY TO DO </h1>
      <TaskList
        currentDate={currentDate}
        tasks={tasks}
        taskInput={taskInput}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
        onToggleTaskCompletion={toggleTaskCompletion}
        onClearCompletedTasks={clearCompletedTasks}
        onTaskInputChange={(e) => setTaskInput(e.target.value)}
      />
      {/* <ClearButton onClearCompletedTasks={clearCompletedTasks} /> */}
    </div>
  );
};

export default App;
