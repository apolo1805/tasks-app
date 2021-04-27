import React from 'react';
import './TasksPage.css';
import TaskComponent from '../../components/TaskComponent/TaskComponent';
import TaskModel from '../../models/TaskModel/TaskModel';

function TasksPage() {
    const [tasks, setTasks] = React.useState([]);
    const [filteredTasks, setFilter] = React.useState([]);
    
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
        setTasks(tasks.concat(new TaskModel(newTask, false)));
        setFilter(tasks.map((task, index) => <TaskComponent key={index} taskText={task.text} taskStatus={task.status} index={index} toggle={handleToggle} removeTask={handleRemove}/>));
    }

    function showAll() {
        return (
            setFilter(tasks.map((task, index) => <TaskComponent key={index} taskText={task.text} taskStatus={task.status} index={index} toggle={handleToggle} removeTask={handleRemove}/>))
        );
    }

    function showOpen() {
        return (
            setFilter(tasks.filter(task => !(task.status)).map((task, index) => <TaskComponent key={index} taskText={task.text} taskStatus={task.status} index={index} toggle={handleToggle} removeTask={handleRemove}/>))
        )
    }

    function showCompleted() {
        return (
            setFilter(tasks.filter(task => (task.status)).map((task, index) => <TaskComponent key={index} taskText={task.text} taskStatus={task.status} index={index} toggle={handleToggle} removeTask={handleRemove}/>))
        )
    }

    function handleRemove(index) {
        const tasksArray = [...tasks];
        tasksArray.splice(index, 1);
        setTasks(tasksArray);
    }

    function handleToggle(index) {
        const tasksArray = [...tasks];
        tasksArray[index].status = !(tasksArray[index].status);
        setTasks(tasksArray);
    }

    return (
        <div className="p-tasks">
            <h1>Todos</h1>
            <input type="text" placeholder="What's next?" onKeyPress={handleClick}/>
            {filteredTasks}
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