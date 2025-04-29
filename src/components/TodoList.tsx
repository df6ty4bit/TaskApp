import { useState } from "react";

const TodoList = () => {
    const [Tasks, setTasks] = useState([
        "kill my crush",
        "eat breakfast",
        "workout"
    ]);
    const [NewTask, setNewTask] = useState("");
    const HandleInputChange = event => {
        setNewTask(event.target.value);
    };
    const addTask = () => {
      if(NewTask.trim()!== ""){setTasks(t => [...Tasks, NewTask]);
        setNewTask("");}
        
    };
    const deleteTask = index => {};
    const moveTaskUp = index => {};
    const moveTaskDown = index => {};

    return (
        <div className="to-do-list">
            <h1>To-Do list</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a Task..."
                    value={NewTask}
                    onChange={HandleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {Tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="moveup-button"
                            onClick={() => moveTaskUp(index)}
                        >
                            MoveUp
                        </button>
                        <button
                            className="movedown-button"
                            onClick={() => moveTaskDown(index)}
                        >
                            moveDown
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
