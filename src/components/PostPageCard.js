import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import clapsIcon from '../assets/claps.png';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({

    // root: {
    //     width: '30%',
    //     margin: 10
    // },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        textTransform: 'uppercase'
    },
    pos: {
        marginBottom: 5,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20
    },
    helpIcon: {
        color: '#64b5f6',
        width: 20,
        margin: 5
    },
    list: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    iconContainer: {
        cursor: 'pointer',
        marginTop: 5
    },
    noResultsMsg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: "#8b8b8b", 
        width: 20
    }

});

const PostPageCard = (props) => {

    const classes = useStyles();

    const getUrl = (url) => {
        let link = "https://ghost-blog.ipxp.in/"+url.slice(27)
        return link
    } 

    return(

        <Card className='post-page-card'>
            <CardContent>
                <div className={classes.header}>
                    <Typography className={classes.title} color="textSecondary">
                        {props.title}
                    </Typography>
                    <Tooltip title={`List of all post ${props.title}`}>
                        <HelpIcon className={classes.helpIcon}/>
                    </Tooltip>
                </div>
                {props.data&&props.data.length>0&&props.data.map((item, index)=>{
                    return(
                        <div className={classes.list}>
                            <List style={{padding: 0}}>
                                <ListItem style={{padding: 0, alignItems: 'flex-start'}}>
                                    <ListItemIcon style={{padding: 6}}>
                                        {index+1}.
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.title}
                                    />
                                </ListItem>
                            </List>
                            <div className={classes.iconContainer} onClick={()=>window.open(getUrl(item.url))}>
                                <OpenInNewIcon className={classes.icon}/>
                            </div>
                        </div>
                    )
                })}
                {props.data&&props.data.length<=0&&<div className={classes.noResultsMsg}>
                    <img src={clapsIcon} width="30px" alt="" style={{padding: 5}}/>
                    <Typography color="textSecondary" >
                        Awsome! No post found
                    </Typography>
                </div>}
            </CardContent>
        </Card>
        
    )
}

export default PostPageCard