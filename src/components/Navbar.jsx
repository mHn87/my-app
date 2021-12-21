import { alpha, AppBar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Search, MailIcon, Mail } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({

    logoLg:{
        display:"none",
        [theme.breakpoints.up("sm")] : {
            display: "block"
        }
    },
    logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")] : {
            display: "none"
        }
    },

    toolbar:{
        display:"flex",
        justifyContent : "space-between"
    },

    search : {
        display:"flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white,0.15),
        '&:hover' : {
            backgroundColor: alpha(theme.palette.common.white,0.25),
        },
        borderRadius: theme.shape.borderRadius,
        
        
    },

    input:{
        color:"white",
        marginRight: theme.spacing(1)
    }
}))




function Navbar() {
  const classes = useStyle();
  return (
    <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h6' className= {classes.logoLg}>
                تیتـــر خبری
            </Typography>
            <Typography variant='h6' className= {classes.logoSm}>
                عناوین مهــم
            </Typography>

            <div className= {classes.search}>
                <Search/>
                <InputBase placeholder='جستجو کنید'  className={classes.input}/>
            </div>
            <div className={classes.icon}>
                <Badge badgeContent={4} color='error'>
                    <Mail/>
                </Badge>
            </div>
        </Toolbar>
    </AppBar>
    

  );
}

export default Navbar;
