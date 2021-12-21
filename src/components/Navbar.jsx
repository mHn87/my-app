import { AppBar, makeStyles, Toolbar } from '@material-ui/core'

const useStyle = makeStyles({
})


function Navbar() {
  const classes = useStyle();
  return (
    <AppBar>
        <Toolbar>
            سلام
        </Toolbar>
    </AppBar>
    

  );
}

export default Navbar;
