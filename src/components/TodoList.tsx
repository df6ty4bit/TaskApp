import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
    const [Tasks, setTasks] = useState([]);
    const [NewTask, setNewTask] = useState("");
    const HandleInputChange = event => {
        setNewTask(event.target.value);
    };
    const addTask = () => {
        if (NewTask.trim() !== "") {
            setTasks(t => [...Tasks, NewTask]);
            setNewTask("");
        }
    };
    const deleteTask = index => {
        const updatedTask = Tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    };
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
                <button className="add-btn" onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {Tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button
                            className="delete-btn"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
