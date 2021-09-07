import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import transitions from '@material-ui/core/styles/transitions';

const drawerWidth = 240
export default makeStyles((theme) => ({
  appBar: {
    marginTop: '30px',
    marginBottom : '30px',
    marginRight : 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
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
  ,
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    height : 30,
    width : 300,
    marginLeft: '15px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    borderRadius: 3
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));