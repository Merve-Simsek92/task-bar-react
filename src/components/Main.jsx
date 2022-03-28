import "./Main.css";
import { useState } from "react";

const Main = () => {
    const [name, setName] = useState();
    const [time, setTime] = useState();

 const handleName=(e)=>{
     return setName(e.target.value)


 }
 const handleTime=(e)=>{
     return setTime(e.target.value)

 }

  const handleDoubleClick = (e) => {
    console.log(e.currentTarget);
    e.target.classList.toggle("deneme");
  };

  const handleClick = (e) => {
    console.log(e.target);
    e.target.parentElement.remove();
  };
 
    
  const saveHandleClick = (e) => {
   
   
  };

  return (
    <div className="container">
      <div className="İnputTextContainer">
        <label htmlFor="task">Task</label>
        <br></br>
        <input className="inputText" type="text" placeholder="Add Task" onChange={handleName}></input>
        <br></br>
        <label htmlFor="day">Day & Time</label>
        <br></br>
        <input
          type="text"
          className="inputTime"
          placeholder="Add Day & Time"
          onChange={handleTime}
        ></input>
        <br></br>
        <button className="saveTask" onClick={saveHandleClick}>
          Save Task
        </button>
      </div>
      <div className="tasks">
        <div className="task" onClick={handleDoubleClick}>
          Study React Pre-Class Notes
          <span onClick={handleClick}>X</span> <br></br>December 12th at 12:30pm
        </div>
        <div className="task" onClick={handleDoubleClick}>
          Feed The Dog
          <span onClick={handleClick}>X</span> <br></br>December 12th at 12:30pm
        </div>
        <div className="task" onClick={handleDoubleClick}>
          Attend In-Class
          <span onClick={handleClick}>X</span> <br></br>December 12th at 12:30pm
        </div>
      </div>
    </div>
  );
};
export default Main;
