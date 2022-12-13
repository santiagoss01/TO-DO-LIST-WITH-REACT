import React, { useState } from "react";

const NewList = () => {
 
 let [myinput, setMyinput] = useState("");


  const myObject = {
    label: myinput,
    completada: false,
    importante:false
  }



  const [myList, setMylist] = useState([
    {
      label: "Watching chainsaw man",
      completada: false,
      importante: false,
    },
  ]);

  const controlledInput = (e) => {
    setMyinput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    

    setMylist([
  
      ...myList, myObject
    ]);

    setMyinput("");
  };

  const removeFromlist = (index) => {
    setMylist(
      myList.filter((element, id) => {
        return index !== id;
      })
    );
  };



  const actualizarTarea = (indice,propiedad,valor) => {
    
   
    const nuevoObject = myList[indice];

    nuevoObject[propiedad] = valor;

    setMylist(myList.map((value, index)=>{
      if(index===indice){
        return nuevoObject;
      }
      else return value;
    }))
   
    console.log(indice,propiedad,valor);
  };
    
    

 
  

  return (
    <div>
      <h1>Task Manager</h1>
      <h1 id="task-two">Task Manager</h1>
      <form className="form-group-toDo" onSubmit={submitHandler}>
        <input
          type="text"
          onChange={controlledInput}
          value={myinput}
          className="form text-center"
          placeholder="ADD YOUR NEW TASK"
        />
      </form>

      <div className=" container d-flex justify-content-center">
        <ul className="list-group">
          {myList.map((listElement, index) => {
            return (
              <li
                key={index}
                className={`list-group-item d-flex  justify-content-between hidden-icon myStyledlist ${
                  listElement.completada == true ? " red" : ""
                } ${listElement.importante == true ? " important" : ""}`}
              >
                {listElement.label}

                <span className="d-flex justify-content-around">
                  <a
                    id="trash"
                    onClick={(e) => {
                      removeFromlist(index);
                    }}
                  >
                    <i className={"fas fa-trash selected "}></i>
                  </a>

                  <a
                    id="select"
                    onClick={(e) => {
                      actualizarTarea(index,"completada", true);
                    }}
                  >
                    <i className={"fas fa-check selected "}></i>
                  </a>

                  <a
                    id="check"
                    onClick={(e) => {
                      actualizarTarea(index, "importante", true);
                    }}
                  >
                    <i className={"fas fa-exclamation selected "}></i>
                  </a>
                </span>
              </li>
            );
          })}
        </ul>
        {myList.length ? "" : <span id="warning"> Add a new task!</span>}
      </div>
    </div>
  );
};

export default NewList;
