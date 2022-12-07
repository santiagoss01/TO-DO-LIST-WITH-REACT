import React, { useState } from "react";

const NewList = () => {
    const [myinput, setMyinput] = useState("");

    const [myList, setMylist] = useState(["Reading", "Cooking", "dancing-alone", "Playing with my cats"]);

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

    // const taskCompleted = (e) => {
    //     myList.map((element, id) => {
    //         if (e.target.id === id) 
    //             setApplystyle("");
    //        else if (e.target.id !== id) 
    //         setApplystyle(" red");})}



    return (
        <div>
            <h1>Task Manager</h1><h1 id="task-two">Task Manager</h1>
            <form className="form-group-toDo" onSubmit={submitHandler}>
                <input type="text" onChange={controlledInput} value={myinput} className="form text-center" placeholder="ADD YOUR NEW TASK" />
            </form>

            <div className=" container d-flex justify-content-center">
                <ul className="list-group">
                    {myList.map((listElement, index) => {
                        return <li key={index} onClick={(e) => { taskCompleted(e) }} className={"list-group-item d-flex  justify-content-between hidden-icon myStyledlist"}>
                            {listElement}
                            <span>
                                <a key={index} onMouseOver={(e) => { setApplystyle(" red") }} onMouseOut={(e) => { setApplystyle("") }} onClick={(e) => { removeFromlist(index) }}>
                                    <i className={"fas fa-trash selected " + applyStyle}></i>
                                </a>
                            </span>
                        </li>
                    })
                    }

                </ul>
                {myList.length ? "" : <span className="warnign"> Add a new task!</span>}
            </div>
        </div>

    );

};

export default NewList;
