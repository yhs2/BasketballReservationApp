import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240
export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
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