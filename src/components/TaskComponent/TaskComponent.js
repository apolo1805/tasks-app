import React from 'react';
import './TaskComponent.css';
import { Container } from 'react-bootstrap';

function TaskComponent({key, taskText, taskStatus}) {
    const [isChecked, setCheck] = React.useState(taskStatus);

    return (
        <Container className="c-task">
            <input type="checkbox" checked={isChecked} onChange={() => setCheck(!isChecked)}/>
            <span className={isChecked? "done" : ""}>{taskText}</span>
            <i class="fas fa-times"></i>
        </Container>
    );
}

export default TaskComponent;