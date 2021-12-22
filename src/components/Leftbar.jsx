import { Container, makeStyles, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10)
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
    </Container>
  );
}

export default Leftbar;
