import React,{FC, useState, ChangeEvent} from 'react';
import "./App.css";
import TodoTask from './components/TodoTask';
import {Itask} from "./interface";

const App: FC = () => {
  const [task,setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<Itask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task'){
      setTask(event.target.value);
    }else{
      setDeadLine(parseInt(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {taskName:task,deadLine:deadLine}
    setTodoList([...todoList,newTask])
    setTask("");
    setDeadLine(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

return (
  <div className="App">
    <div className="App-header">
      <div className="input-container">
      <input type="text" placeholder="Task.." name="task" value={task} onChange={handleChange}/>
      <input type="text" placeholder="Deadline (in days).."  name="deadline" value={deadLine} onChange={handleChange}/>
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className="todo-list">
      {todoList.map((task:Itask, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask}/>
      })}
    </div>
  </div>
);
}

export default App;
