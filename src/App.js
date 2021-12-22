import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';

const useStyle = makeStyles({
  Button: {
    color: "white",
    backgroundColor: "black"
  }
})


function App() {
  const classes = useStyle();
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
      </Grid>
    </div>


  );
}

export default App;
