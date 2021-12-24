import { Container, makeStyles, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: "white",


  },

  item: {
    display:"flex",
    alignItems:"center",
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]:{
      marginBottom:theme.spacing(4),
      cursor: "pointer",

    },


  },


  text: {
    [theme.breakpoints.down('sm')]:{
      display:"none"

    },
  }

}))


function Leftbar() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>خانــه</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>خانــه</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>خانــه</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
