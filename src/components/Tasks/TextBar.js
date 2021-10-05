import classes from "./TextBar.module.css";
import { TextField, Button } from "@mui/material";
import { Fragment, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const TextBar = (props) => {
  const [currentInput, setCurrentInput] = useState("");

  const addUserHandler = () => {
    props.addTask(currentInput);
  };

  return (
    <Fragment>
      <TextField
        onChange={(event) => setCurrentInput(event.target.value)}
        className={classes.taskbar}
        id="outlined-basic"
        label="Write your task"
        variant="outlined"
      />
      <Button
        type="submit"
        onClick={addUserHandler}
        className={classes.add}
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </Fragment>
  );
}; 

export default TextBar;
