import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';

const useStyle = makeStyles((theme) => ({
  Button: {
    color: "white",
    backgroundColor: "black"
  },

  left: {
    [theme.breakpoints.down('xs')]: {
      display: "none"

    },
  }
}))


function App() {
  const classes = useStyle();
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.left}>
          <Leftbar />
        </Grid>
      </Grid>
    </div>


  );
}

export default App;
