import React, { useEffect, useState } from 'react'
import PostPageCard from '../components/PostPageCard'
import GhostContentAPI from '@tryghost/content-api'

const Posts = () => {

    useEffect(()=>{
        fetchPostWithoutMeta()
        fetchPostWithoutImage()
        fetchPostWithLongMeta()
        fetchPostWithLongURL()
        fetchShortPost()
        fetchLongPost()
    },[])
    const [postWithoutMeta, setPostWithoutMeta] = useState([])
    const [postWithoutImage, setPostWithoutImage] = useState([])
    const [postWithLongMeta, setPostWithLongMeta] = useState([])
    const [postWithLongURL, setPostWithLongURL] = useState([])
    const [longPost, setLongPost] = useState([])
    const [shortPost, setShortPost] = useState([])

    const fetchPostWithoutMeta = () =>{
        const api = new GhostContentAPI({
            host: process.env.React_App_Host_Name,
            key: process.env.React_App_Key,
            version: process.env.React_App_Version
          });
          
          api.posts.browse({
              limit: "all",
              filter: "meta_description:null"

          })
          .then((posts) => {
            setPostWithoutMeta(posts)
          })
          .catch((err) => {
              console.error(err);
          });
    }
    const fetchPostWithoutImage = () =>{
        const api = new GhostContentAPI({
            host: process.env.React_App_Host_Name,
            key: process.env.React_App_Key,
            version: process.env.React_App_Version
          });
          
          api.posts.browse({
              limit: "all",
              filter: "feature_image:null"
          })
          .then((posts) => {
            setPostWithoutImage(posts)
          })
          .catch((err) => {
              console.error(err);
          });
    }
    const fetchPostWithLongMeta = () =>{
        let arr = []
        const api = new GhostContentAPI({
            host: process.env.React_App_Host_Name,
            key: process.env.React_App_Key,
            version: process.env.React_App_Version
          });
          
          api.posts.browse({
              limit: "all",
              filter: "meta_description: -null"
          })
          .then((posts) => {
              posts.map(post => {
                  if(post.meta_description.length>150) {
                        arr.push(post)
                  }
              })
            setPostWithLongMeta(arr)
          })
          .catch((err) => {
              console.error(err);
          });
    }

    const fetchPostWithLongURL = () =>{
        let arr = []
        const api = new GhostContentAPI({
            host: process.env.React_App_Host_Name,
            key: process.env.React_App_Key,
            version: process.env.React_App_Version
          });
          
          api.posts.browse({
              limit: "all",
          })
          .then((posts) => {
              posts.map(post => {
                  if(post.url.length>100) {
                        arr.push(post)
                  }
              })
            setPostWithLongURL(arr)
          })
          .catch((err) => {
              console.error(err);
          });
    }

    const fetchLongPost = () =>{
        let arr = []
        const api = new GhostContentAPI({
            host: process.env.React_App_Host_Name,
            key: process.env.React_App_Key,
            version: process.env.React_App_Version
          });
          
          api.posts.browse({
              limit: "all",
          })
          .then((posts) => {
              posts.map(post => {
                  if(post.excerpt.length>1500) {
                        arr.push(post)
                  }
              })
            setLongPost(arr)
          })
          .catch((err) => {
              console.error(err);
          });
    }

    const fetchShortPost = () =>{
        let arr = []
        const api = new GhostContentAPI({
            host: process.env.React_App_Host_Name,
            key: process.env.React_App_Key,
            version: process.env.React_App_Version
          });
          
          api.posts.browse({
              limit: "all",
          })
          .then((posts) => {
              posts.map(post => {
                  if(post.excerpt.length<250) {
                        arr.push(post)
                  }
              })
            setShortPost(arr)
          })
          .catch((err) => {
              console.error(err);
          });
    }

    return(

        <div style={{padding: 20}}>
            <div className='post-page-container'>
                <PostPageCard title="without meta description" data={postWithoutMeta}/>
                <PostPageCard title="without featured image" data={postWithoutImage}/>
                <PostPageCard title="too Short, below 250 words" data={shortPost}/>
            </div>
            <div className='post-page-container'>
                <PostPageCard title="too long meta description" data={postWithLongMeta}/>
                <PostPageCard title="too long URL, more than 100 chars" data={postWithLongURL}/>
                <PostPageCard title="too long, more than 1500 words" data={longPost}/>
            </div>
        </div>

    )
}

export default Posts