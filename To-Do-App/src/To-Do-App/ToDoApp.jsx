import { useState } from "react"
import styles from "./ToDoApp.module.css"

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [activeIndex, setActiveIndex] = useState(false);

    function handleInputChange(event) {
        const inputValue = event.target.value;
        if (inputValue.length <= 200) {
            setNewTask(inputValue);
        }
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        } else {
            alert("Task cannot be empty");
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
        if (activeIndex === index) {
            setActiveIndex(null);
        }
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks);
        }
        if (activeIndex === index) {
            setActiveIndex(null);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
        }
        if (activeIndex === index) {
            setActiveIndex(null);
        }
    }

    function toggleButtons(index) {
        setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <>
            <div className={styles.toDoList}>
                <h1>To Do List</h1>
                <div className={styles.inputTask}>
                    <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter the task (max 200 characters)" />
                    <button onClick={addTask}>Add</button>
                </div>

                <div className={styles.listItems}>
                    <ol>
                        {tasks.map((task, index) => <li key={index} className={styles.listItem}>
                            <span className={styles.task}>{task}</span>
                            <button className={`${styles.editButton} ${activeIndex === index ? styles.activeButton : ''}`} onClick={() => toggleButtons(index)}>✏️</button>
                            {activeIndex === index && (
                                <div className={styles.toogleButtons}>
                                    <button className={styles.button} onClick={() => deleteTask(index)}>Delete</button>
                                    <button className={styles.button} onClick={() => moveTaskUp(index)}>Move Up</button>
                                    <button className={styles.button} onClick={() => moveTaskDown(index)}>Move Down</button>
                                </div>
                            )}
                        </li>)}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default ToDoList
