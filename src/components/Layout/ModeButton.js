import { Box } from "@mui/system";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from "@mui/material";
import classes from './ModeButton.module.css';

const ModeButton = props => {
    return <Box className = {classes.mode}>
    <IconButton onClick = {props.changeMode}>
    {props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
    </Box>
};

export default ModeButton;