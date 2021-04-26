import React from 'react';
import './TaskComponent.css';
import { Container } from 'react-bootstrap';

function TaskComponent({taskText, taskStatus}) {
    const [isChecked, setCheck] = React.useState(taskStatus);

    return (
        <Container className="c-task">
            <input type="checkbox" checked={isChecked} onChange={() => setCheck(!isChecked)}/><span>{taskText}</span>
        </Container>
    );
}

export default TaskComponent;