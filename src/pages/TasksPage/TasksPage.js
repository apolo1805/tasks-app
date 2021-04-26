import React from 'react';
import './TasksPage.css';
import TaskComponent from '../../components/TaskComponent/TaskComponent';
import TaskModel from '../../models/TaskModel/TaskModel';

function TasksPage() {
    const [tasks, setTasks] = React.useState([]);

    var tasksList = tasks.map((task,index) => <TaskComponent key={index} taskText={task.text} taskStatus={task.status}/>);
    var openTasks = tasks.filter(task => !(task.status)).length;


    function handleClick(e) {
        if (e.charCode === 13) {
            if (e.target.value !== "") {
                addTask(e.target.value);
                e.target.value = "";
            }
        }
    }

    function addTask(newTask) {
        setTasks(tasks.concat(new TaskModel(newTask, 0)));
    }

    function showAll() {
       
    }

    function showOpen() {
        
    }

    function showCompleted() {
        
    }

    return (
        <div className="p-tasks">
            <h1>Todos</h1>
            <input type="text" placeholder="What's next?" onKeyPress={handleClick}/>
            {tasksList}
            <div>
                {openTasks > 0 ? openTasks + " Items Left" : ""}
            </div>
            <div id="filterButtons">
                <button type="button" onClick={() => showAll()}>All</button>
                <button type="button" onClick={() => showOpen()}>Open</button>
                <button type="button" onClick={() => showCompleted()}>Completed</button>
            </div>
        </div>
    );
}

export default TasksPage;