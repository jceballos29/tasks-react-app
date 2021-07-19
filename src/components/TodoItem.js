import React, { useState, useEffect } from "react";
import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ id, task, student, isCompleted,handleDelteTask, handleCompleteTask }) {
  const [backgroundColor, setBackgraoundColor] = useState("");
  const [color, setColor] = useState("");
  const [textDecoration, settextDecoration] = useState("");
  const [checked, setChecked] = useState(null);
  const style = { backgroundColor, color };
  const lineThrough = { textDecoration };

  useEffect(() => {
    if (!isCompleted) {
      setBackgraoundColor("#EDE7F6");
      setColor("#673AB7");
      settextDecoration("none");
      setChecked(false)
    } else {
      setBackgraoundColor("#9575CD");
      setColor("#D1C4E9");
      settextDecoration("line-through");
      setChecked(true)
    }
  }, [isCompleted]);

  return (
    <div className="TodoItem" style={style}>
      <input 
        className="isCompleted" 
        type="checkbox" 
        defaultChecked={checked}
        onChange={()=>handleCompleteTask(id,{task, student, isCompleted})}
      />
      <h4 className="Tasks" style={lineThrough}>
        {task}
      </h4>
      <p className="Student">{student}</p>
      <FontAwesomeIcon className="Delete" icon={faTimes} onClick={() => handleDelteTask(id)}/>
    </div>
  );
}

export default TodoItem;
