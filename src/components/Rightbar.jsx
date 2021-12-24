import { Container, List, makeStyles, Typography } from '@material-ui/core'
import { Bookmark, ExitToApp, Home, Person, PhotoCamera, Settings, Store, TabletMac } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: "white",
    [theme.breakpoints.up('sm')]:{
      backgroundColor:"white",
      color: "#555",

    },

  },

  item: {
    display:"flex",
    alignItems:"center",
    marginBottom: theme.spacing(5),


  },


  text: {
    fontWeight:"500",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
      display:"none"

    },
  },

  icon: {
    fontSize:"2rem",

  }

}))


function Rightbar() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>خانــه</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon}/>
        <Typography className={classes.text}>دوستـــان</Typography>
      </div>
      <div className={classes.item}>
        <Store className={classes.icon}/>
        <Typography className={classes.text}>بــازار</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon}/>
        <Typography className={classes.text}>تنظیمــات</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon}/>
        <Typography className={classes.text}>دوربیــن</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon}/>
        <Typography className={classes.text}>ذخیــره شده ها</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon}/>
        <Typography className={classes.text}>مجموعــه ها</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon}/>
        <Typography className={classes.text}>خــروج</Typography>
      </div>
    </Container>
  );
}

export default Rightbar;

