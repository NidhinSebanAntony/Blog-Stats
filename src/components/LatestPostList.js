import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GhostContentAPI from '@tryghost/content-api'
import moment from 'moment'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    table: {
        width: '95%',
        marginTop: 20,
        margin: 15,
        padding: 20
    },
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        fontSize: 14,
    },
    iconContainer: {
        cursor: 'pointer'
    },
    icon: {
        color: "#8b8b8b", 
        width: 20
    }

});

const LatestPostList = () => {

    const classes = useStyles();

    const [latestPost, setLatestPost] = useState([])

    useEffect(()=>{
        fetchLatestPosts()
    },[])

    const fetchLatestPosts = () =>{
        const api = new GhostContentAPI({
            host: process.env.React_App_Host_Name,
            key: process.env.React_App_Key,
            version: process.env.React_App_Version
          });
          
        api.posts.browse({order: "published_at DESC", limit: 5})
        .then((posts) => {
            setLatestPost(posts)
        })
        .catch((err) => {
            console.error(err);
        });

    }
    
    const getUrl = (url) => {
        let link = "https://ghost-blog.ipxp.in/"+url.slice(27)
        return link
    } 

    return(
        <div className={classes.container}>
            <TableContainer component={Paper} className={classes.table}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                        LATEST POST
                </Typography>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell colSpan={2}>Published On</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {latestPost.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell>{moment(row.published_at).format("Do MMM YYYY")}</TableCell>
                                <TableCell>
                                    <div onClick={()=>window.open(getUrl(row.url))} className={classes.iconContainer}>
                                        <OpenInNewIcon className={classes.icon}/>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default LatestPostList