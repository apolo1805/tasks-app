import React from 'react';
import './TaskComponent.css';

function TaskComponent({taskText, taskStatus, index, toggle, removeTask}) {

    // function showModal() {
    //     document.getElementsByClassName("modal")[0].style.display = "block";
    // }

    // function closeModal() {
    //     document.getElementsByClassName("modal")[0].style.display = "none";
    // }

    // function handleYes() {
    //     closeModal();
    //     removeTask(index);
    // }
    
    function onToggle() {
        toggle(index);
    }

    function showAlert() {
        alert("This task is removed from your tasks list!");
        removeTask(index);
    }

    return (
        <div className="c-task">
            <input className="checkItem" type="checkbox" checked={taskStatus} onChange={() => onToggle()}/>
            <span className={taskStatus? "done" : ""}>{taskText}</span>
            {/* <i className="fas fa-times" onClick={() => showModal()}></i> */}
            <i className="fas fa-times" onClick={() => showAlert()}></i>
            
            {/* <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    <p>Are you sure you want to delete this task?</p>
                    <button type="button" onClick={() => handleYes()}>Yes</button>
                    <button type="button" onClick={() => closeModal()}>No</button>
                </div>
            </div> */}
        </div>
    );
}

export default TaskComponent;