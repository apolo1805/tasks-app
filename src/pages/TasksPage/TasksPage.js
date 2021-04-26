import React from 'react';
import './TasksPage.css';
import { Container } from 'react-bootstrap';
import TaskComponent from '../../components/TaskComponent/TaskComponent';

function TasksPage(props) {
    const [tasks, setTasks] = React.useState([]);

    const tasksList = tasks.map((task,index) => <TaskComponent key={index} taskText={task}/>);

    function handleClick(e) {
        if (e.charCode === 13) {
            addTask(e.target.value);
            e.target.value = "";
        }
    }

    function addTask(newTask) {
        setTasks(tasks.concat(newTask));
    }

    return (
        <Container className="p-tasks">
            <h1>Todos</h1>
            <input type="text" placeholder="What's next?" onKeyPress={handleClick}/>
            {tasksList}
        </Container>
    );
}

export default TasksPage;