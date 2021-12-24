import { Container, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10)
   }
}))


function Leftbar() {
  const classes = useStyle();
   return (
     <Container className={classes.container}>
       <div>
         این ساید بار راست است
       </div>
      </Container>
   );
}

export default Leftbar;