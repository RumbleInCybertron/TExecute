from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # TODO update with your allowed origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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