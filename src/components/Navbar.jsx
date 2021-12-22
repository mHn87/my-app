import { alpha, AppBar, Badge, InputBase, makeStyles, Toolbar, Typography, Avatar } from '@material-ui/core'
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';
import { useState } from 'react';

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
        width:"50%",
        [theme.breakpoints.down("sm")] : {
            display: (props) => (props.open ? "flex" : "none")
        },  

        
        
    },

    input:{
        color:"white",
        marginRight: theme.spacing(1),
        width:"100%"

    },

    searchButton: {
        display: "none",
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down("sm")] : {
            display: "block"
        },
        
    },

    icon: {
        alignItems:"center",
        display: (props) => (props.open ? "none" : "flex")

    },

    badge: {
        marginLeft: theme.spacing(2)
    },

    cancel: {
        [theme.breakpoints.up("sm")] : {
            display:"none"
        },  
    }
}))




function Navbar() {
  const [open,setOpen] = useState(false);
  const classes = useStyle({open});
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
                <InputBase placeholder='جستجو کنید'  className={classes.input}/>
                <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
            </div>
            <div className={classes.icon}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                <Badge badgeContent={4} color='error' className={classes.badge}>
                    <Mail/>
                </Badge>
                <Badge badgeContent={4} color='error' className={classes.badge}>
                    <Notifications/>
                </Badge>
                <Avatar alt='Remy Sharp' src= "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            </div>
        </Toolbar>
    </AppBar>
    

  );
}

export default Navbar;
