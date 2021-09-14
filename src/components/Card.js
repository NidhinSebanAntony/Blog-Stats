import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    analyticsCard: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'center',
    },
    root: {
      width: 275,
      margin: 5
    },
    title: {
      fontSize: 14,
    },

});

const DataCard = (props) => {

    const classes = useStyles();

    return(

        <Card className={classes.root}> 
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.data}
                </Typography>
            </CardContent>
        </Card>
        
    )
}

export default DataCard