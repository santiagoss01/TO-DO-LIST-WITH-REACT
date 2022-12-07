import React, { useState } from "react";

const NewList = () => {
    const [myinput, setMyinput] = useState("");

    const [myList, setMylist] = useState(["Reading", "Cooking", "dancing alone", "Cat food"]);

    const submitHandler = (e) => {
        e.preventDefault();
        setMyinput("");
        setMylist([myinput, ...myList]);

    };

    const controlledInput = (e) => {
        setMyinput(e.target.value);
    };

    const removeFromlist = (index) => {
        setMylist(myList.filter((element, id) => {
            return index !== id;
        }))
    };
    const [applyStyle, setApplystyle] = useState("");
     
    const[completedTodo, setCompletedtodo] = useState([]);

    const taskCompleted = (index) => {
        setCompletedtodo([...completedTodo, index]);
    }

    const[imporTanttodo, setimporTanttodo] = useState([]);

    const importantTask = (index) => {
        setimporTanttodo([...imporTanttodo, index]);
    }




    return (
        <div>
            <h1>Task Manager</h1><h1 id="task-two">Task Manager</h1>
            <form className="form-group-toDo" onSubmit={submitHandler}>
                <input type="text" onChange={controlledInput} value={myinput} className="form text-center" placeholder="ADD YOUR NEW TASK" />
            </form>

            <div className=" container d-flex justify-content-center">
                <ul className="list-group">
                    {myList.map((listElement, index) => {
                        return <li key={index} className= {`list-group-item d-flex  justify-content-between hidden-icon myStyledlist ${completedTodo.includes(index)? " red":""} ${imporTanttodo.includes(index)? " important":""}`} >
                            {listElement}
                            <span className="d-flex justify-content-around">
                                <a key={index}  onClick={(e) => { removeFromlist(index) }}>
                                    <i id="trash"className={"fas fa-trash selected "}></i>
                                </a>
                                <a key={index} onClick={(e) =>{taskCompleted(index)}}>
                                    <i className={"fas fa-check selected "}></i>
                                </a>
                                <a key={index} onClick={(e) =>{importantTask(index)}}>
                                    <i className={"fas fa-exclamation selected "}></i>
                                </a>
                                
                                
                            </span>
                        </li>
                    })
                    }

                </ul>
                {myList.length ? "" : <span id="warning"> Add a new task!</span>}
            </div>
        </div>

    );

};

export default NewList;
