import classes from "./DisplayCard.module.css";
import { Card, CardContent, Typography } from "@mui/material";
import TasksManager from "../Tasks/TasksManager";
import ModeButton from "./ModeButton";

const DisplayCard = (props) => {
  return (
    <Card className={classes.card}>
      <ModeButton changeMode={props.changeMode} mode={props.mode} />
      <CardContent>
        <Typography style = {{fontSize : 40}}>Today's tasks</Typography>
      </CardContent>
      <TasksManager mode={props.mode} />
    </Card>
  );
};

export default DisplayCard;
