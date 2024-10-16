import React, { useState } from 'react';
import { addTask } from '../services/api';
import { Task } from '../types';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Omit<Task, 'id'> = {
      title,
      description,
      completed: false,
    };
    await addTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
