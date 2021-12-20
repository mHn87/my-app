import { Button, makeStyles } from '@material-ui/core'
import { Person } from '@material-ui/icons';

const useStyle = makeStyles({
  Button : {
    color:"white",
    backgroundColor: "black"
  }
})


function App() {
  const classes = useStyle();
  return (
    <div>
      <Button variant="contained" className={classes.Button} size="large" color="secondary" startIcon={<Person/>} >
        سلام
      </Button>
      <br/>

    </div>
    

  );
}

export default App;
