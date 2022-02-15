import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Acordion from './Components/Acordion';
import GridComp from './Components/Grid'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%'    
  }
}));



function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Acordion</h1>
      <Acordion />
      <h1>Grid</h1>
      <GridComp />
    </div>
  );
}

export default App;
