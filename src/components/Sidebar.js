import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    sidebar: {
        height: '100vh',
        width: 250,
        background: '#303f9f',
    },
    container: {
        margin: 20,
        marginTop: 40
    },
    item: {
        cursor: 'pointer'
    },
    textColor: {
        color: '#fff'
    }

});

const Sidebar = () => {

    const classes = useStyles();

    return(

        <div className="sidebar-container">
            <div className={classes.container}>
                <div onClick={()=>window.location.href='/'} className={classes.item}>
                    <Typography variant="button" display="block" gutterBottom className={classes.textColor}>
                        Dashboard
                    </Typography>
                </div>
                <div onClick={()=>window.location.href='/posts'} className={classes.item}>
                    <Typography variant="button" display="block" gutterBottom className={classes.textColor}>
                        Posts
                    </Typography>
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar