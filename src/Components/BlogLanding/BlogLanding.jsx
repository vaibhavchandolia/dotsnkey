import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './BlogLanding.css'

export default function BlogLanding() {

    const [posts, setPosts] = useState()
    const baseUrl = "https://jsonplaceholder.typicode.com"
  
    useEffect(() => {
        axios.get(`${baseUrl}/posts`)   
        .then((res) => {
            console.log(res)
            setPosts(res.data)
            console.log(posts[0].title)
            })
    }, [posts])

    // console.log(posts[0])


  return (
    <div>
        <h1>Blog Landing Page</h1>
        <div className="blogPosts-con">
            {posts && posts.slice(0, 10).map((post, id) => {
                return( <div className="blog-con" key={id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>

                )
            })}
            
        </div>
    </div>
  )
}
