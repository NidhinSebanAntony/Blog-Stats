import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GhostContentAPI from '@tryghost/content-api'
import DataCard from './Card'

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
  
const AnalyticsCard = () => {

    const classes = useStyles();

    const [totalPost, setTotalPost] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [totalAuthors, setTotalAuthors] = useState(0)
    const [totalTags, setTotalTags] = useState(0)

    useEffect(()=>{
        fetchTotalPosts()
        fetchTotalPages()
        fetchTotalAuthors()
        fetchTotalTags()
    },[])

    const fetchTotalPosts = () =>{

        const api = new GhostContentAPI({
          host: process.env.React_App_Host_Name,
          key: process.env.React_App_Key,
          version: process.env.React_App_Version
        });
          
        api.posts.browse({
            limit: "all"
        })
        .then((posts) => {
          setTotalPost(posts.length)
        })
        .catch((err) => {
            console.error(err);
        });

    }
    const fetchTotalPages = () =>{

      const api = new GhostContentAPI({
        host: process.env.React_App_Host_Name,
        key: process.env.React_App_Key,
        version: process.env.React_App_Version
      });
          
      api.pages.browse({
          limit: "all"
      })
      .then((pages) => {
        setTotalPages(pages.length)
      })
      .catch((err) => {
          console.error(err);
      });

    }

    const fetchTotalAuthors = () =>{

      const api = new GhostContentAPI({
        host: process.env.React_App_Host_Name,
        key: process.env.React_App_Key,
        version: process.env.React_App_Version
      });
          
      api.authors.browse({
          limit: "all"
      })
      .then((authors) => {
        setTotalAuthors(authors.length)
      })
      .catch((err) => {
          console.error(err);
      });

    }
    const fetchTotalTags = () =>{

      const api = new GhostContentAPI({
        host: process.env.React_App_Host_Name,
        key: process.env.React_App_Key,
        version: process.env.React_App_Version
      });
          
      api.tags.browse({
          limit: "all"
      })
      .then((tags) => {
        setTotalTags(tags.length)
      })
      .catch((err) => {
          console.error(err);
      });

    }

    return(
        <div className={classes.analyticsCard}>
            <DataCard title="TOTAL POST" data={totalPost}/>
            <DataCard title="TOTAL PAGES" data={totalPages}/>
            <DataCard title="TOTAL AUTHORS" data={totalAuthors}/>
            <DataCard title="TOTAL TAGS" data={totalTags}/>
        </div>
    )
}

export default AnalyticsCard