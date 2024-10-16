from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Task(BaseModel):
  id: int
  title: str
  description: str
  completed: bool
  
tasks = []

@app.post("/tasks/")
def create_task(task: Task):
  tasks.append(task)
  return task

@app.get("/tasks/")
def read_tasks():
  return tasks