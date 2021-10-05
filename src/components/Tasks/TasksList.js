import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import classes from "./TasksList.module.css";
import { Divider } from "@mui/material";
import Edit from "@mui/icons-material/Edit";

const TasksList = (props) => {
  let textColor = props.mode === "dark" ? "white" : "black";
  return (
    <List className={classes.list}>
      {props.list.map((item) => {
        let textDecorationLine = item.flag === true ? "line-through" : "";
        let textDecorationStyle = item.flag === true ? "solid" : "";
        return (
          <ListItem
            button
            divider
            key={Math.random().toString()}
            secondaryAction={
              <Fragment>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={props.removeTask(item)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={props.editTask(item)}
                >
                  <EditIcon />
                </IconButton>
              </Fragment>
            }
          >
            <ListItemButton role="checkbox" onClick={props.toggleHandler(item)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={props.list[props.list.indexOf(item)].flag}
                />
              </ListItemIcon>
              <ListItemText
                key={props.list.indexOf(item)}
                style={{
                  color: textColor,
                  textDecorationLine: textDecorationLine,
                  textDecorationStyle: textDecorationStyle,
                }}
              >
                {item.text}
              </ListItemText>
            </ListItemButton>
            <Divider />
          </ListItem>
        );
      })}
    </List>
  );
};

export default TasksList;
