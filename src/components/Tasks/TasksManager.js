import TasksList from "./TasksList";
import TextBar from "./TextBar";
import { useState, Fragment } from "react";

const TasksManager = (props) => {
  const [tasksList, setTasksList] = useState([]);

  const addTaskHandler = (itemText) => {
    const newArr = [...tasksList];
    newArr.push({ text: itemText, flag: false});
    setTasksList(newArr);
  };

  const toggleHandler = (item) => () => {
    const index = tasksList.indexOf(item);
    const newArr = [...tasksList];
    const flag = newArr[index].flag;
    newArr[index].flag = !flag;
    setTasksList(newArr);
  };

  const removeTaskHandler = (item) => () => {
    const index = tasksList.indexOf(item);
    const newArr = [...tasksList];
    newArr.splice(index, 1);
    setTasksList(newArr);
  };

  const editTaskHandler = (item) => () => {
    const index = tasksList.indexOf(item);
    const newArr = [...tasksList];
  }

  return (
    <Fragment>
      <TextBar addTask={addTaskHandler} />
      <TasksList
        list={tasksList}
        tasksList={tasksList}
        toggleHandler={toggleHandler}
        removeTask={removeTaskHandler}
        mode = {props.mode}
      />
    </Fragment>
  );
};

export default TasksManager;
