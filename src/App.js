import {useState} from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DisplayCard from './components/Layout/DisplayCard';
function App() {
  const [mode, setMode] = useState('dark');
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const changeModeHandler = ( ) => {
      if(mode === 'dark'){
          setMode('light');
      }
      else{
          setMode('dark');
      }
  };
  

  // return (
  //   <ThemeProvider theme = {theme}>
  //   <Box>
  //   <Header mode = {mode} changeMode = {changeModeHandler}/>
  //   <TasksManager mode = {mode}/>
  //   </Box>
  //   </ThemeProvider>
  // );

  return (<ThemeProvider theme = {theme}>
    <DisplayCard mode = {mode} changeMode = {changeModeHandler}/>
    </ThemeProvider>
  );
}

export default App;
