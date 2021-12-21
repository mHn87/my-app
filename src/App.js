import { Button, makeStyles } from '@material-ui/core'
import { Person } from '@material-ui/icons';
import NavBar from './components/Navbar';

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
      <NavBar/>
    </div>
    

  );
}

export default App;
