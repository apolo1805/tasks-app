import React from 'react';
import './TaskComponent.css';
import { Container } from 'react-bootstrap';

function TaskComponent({taskText}) {
    return (
        <Container className="c-task">
            <input type="checkbox"/><span>{taskText}</span>
        </Container>
    );
}

export default TaskComponent;