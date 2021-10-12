import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    CardContent : {
        position: "relative",
        marginBottom : '1em',
        backgroundColor : '#e4f1f2',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'flex-start'
    },
    contentBox : {
        flex : '1 1 80%',
        flexDirection : 'column',
        display : 'flex', 
        justifyContent : 'stretch'
    },
    contentMedia : {
        flex : '1 1 20%',
        width : 150
    },
    overlay2 : {
        position: 'absolute',
        right: '1em'
    },
    overlay3 : {
        position: 'absolute',
        right: '1em',
        bottom: '1em'
    }
}))