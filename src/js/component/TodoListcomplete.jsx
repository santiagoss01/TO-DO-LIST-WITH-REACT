import React, { useState } from "react";

const NewList = () => {
    const [myinput, setMyinput] = useState("");

    const [myList, setMylist] = useState(["Reading", "Cooking","dancing-alone","Playing with my cats"]);

    const submitHandler = (e) => {
        e.preventDefault();
        setMyinput("");
        setMylist([myinput, ...myList]);

    };
 
    const controlledInput = (e) => {
        setMyinput(e.target.value);
    };

    const removeFromlist = (index) => {
        setMylist(myList.filter((element,id)=>{
          return index !== id;
        }))
      };
    

    return (
        <div>
            <h1>Task Manager</h1>
            <form className="form-group-toDo" onSubmit={submitHandler}>
                <input type="text" onChange={controlledInput}  value={myinput} className="form" placeholder="Add task here" />
            </form>

            <div>
                <ul className="list-group">
                    {myList.map((listElement, index) => {
                        return <li key={index} className="list-group-item d-flex justify-content-between hidden-icon">
                            {listElement}
                            <span>
                                <a key={index} onClick={(e) => {removeFromlist(index)}}>
                                    <i className="fas fa-trash"></i>
                                </a>
                            </span>
                        </li>
                    })
                    }

                </ul>
            </div>
        </div>

    );

};

export default NewList;
