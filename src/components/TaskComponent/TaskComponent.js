import React from 'react';
import './TaskComponent.css';

function TaskComponent({taskText, taskStatus}) {
    const [isChecked, setCheck] = React.useState(taskStatus);

    function showModal() {
        document.getElementsByClassName("modal")[0].style.display = "block";
    }

    function closeModal() {
        document.getElementsByClassName("modal")[0].style.display = "none";
    }

    return (
        <div className="c-task">
            <input type="checkbox" checked={isChecked} onChange={() => setCheck(!isChecked)}/>
            <span className={isChecked? "done" : ""}>{taskText}</span>
            <i className="fas fa-times" onClick={() => showModal()}></i>
            
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    <p>Are you sure you want to delete this task?</p>
                    <button type="button">Yes</button>
                    <button type="button">No</button>
                </div>
            </div>
        </div>
    );
}

export default TaskComponent;