import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../services/api';
import { Task } from '../types';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskList = await fetchTasks();
      setTasks(taskList);
    };
    getTasks();
  }, []);

  return (
    <div>
      <h1>Your Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;