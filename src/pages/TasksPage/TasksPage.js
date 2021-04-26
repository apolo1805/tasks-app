import React from 'react';
import './TasksPage.css';
import { Container } from 'react-bootstrap';
import TaskComponent from '../../components/TaskComponent/TaskComponent';
import TaskModel from '../../models/TaskModel/TaskModel';

function TasksPage(props) {
    const [tasks, setTasks] = React.useState([]);

    const tasksList = tasks.map((task,index) => <TaskComponent key={index} taskText={task.text} taskStatus={task.status}/>);
    const openTasks = tasks.filter(task => !(task.status)).length;


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

    return (
        <Container className="p-tasks">
            <h1>Todos</h1>
            <input type="text" placeholder="What's next?" onKeyPress={handleClick}/>
            {tasksList}
            <div>
                {openTasks > 0 ? openTasks + " Items Left" : ""}
            </div>
        </Container>
    );
}

export default TasksPage;