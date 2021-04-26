import React from 'react';
import './TasksPage.css';
import { Container } from 'react-bootstrap';

function TasksPage(props) {
    return (
        <Container className="p-tasks">
            <h1>Todos</h1>
            <input type="text" placeholder="What's next?"/>
        </Container>
    );
}

export default TasksPage;