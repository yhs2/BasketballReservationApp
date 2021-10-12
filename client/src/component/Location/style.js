import { makeStyles } from "@material-ui/core";

const drawerWidth = 240
export default makeStyles((theme) => ({
    container : {
        padding : "20px 20px 20px 20px"
    },
    expand: {
        marginLeft : 0,
        width : '100%',
        transition : theme.transitions.create(['margin-left','width'], {
          duration : theme.transitions.duration.leavingScreen
        })
    },
    shrink: {
        marginLeft : drawerWidth,
        width : `calc(100% - ${drawerWidth}px)`,
        transition : theme.transitions.create(['margin-left','width'], {
          duration : theme.transitions.duration.enteringScreen
        }),
        
      }
  }));