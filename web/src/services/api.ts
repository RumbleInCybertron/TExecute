import { Task } from '../types';

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch('http://localhost:8000/tasks/');
  const data = await response.json();
  return data;
}

export async function addTask(task: Omit<Task, 'id'>): Promise<Task> {
  const response = await fetch('http://localhost:8000/tasks/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
}
