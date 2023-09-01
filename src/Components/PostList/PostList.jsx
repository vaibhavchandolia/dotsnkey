import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './postList.css'
import ManagePost from '../ManagePost/ManagePost'

export default function PostList() {
    const [page, setPage] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [posts, setPosts] = useState()
    const [id, setId] = useState(1)
    const baseUrl = "https://jsonplaceholder.typicode.com"

    const handlePageNext = () => {
        setPage(page+5)
    }

    const handlePagePrev = () => {
        if(page<= 0){
            page(0)
        }else setPage(page-5)
    }

    const postDelete = async () => {
        try{

            const res = await axios.delete(`${baseUrl}/posts/${id}`)
            console.log("delete")
            console.log(res)
        } catch(err){
            console.error(err)
        }
    }

    const updatePost = async () => {
       try{
            await axios.put(`${baseUrl}/posts/${id}`, {
                    id: 1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                  
            }).then((res) => res.json())
            
            
       } catch(err){
        console.log(err)
       }
    }
  
    useEffect(() => {
        axios.get(`${baseUrl}/posts`)   
        .then((res) => {
            //console.log(res)
            setPosts(res.data)
            //console.log(posts[0].title)
            })
    }, [posts])

  return (
    <div className='postlist'>
        <div className="postlist-main">
        <div className="postList-header">
            <h2>Post List</h2>
            <button>Add New</button>
        </div>
        <div className="postList-wrapper">
            {/* {posts && posts.slice(5, 10).map((post, idx) => {
                return( <div className='postList-con' key={idx}> 
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <div><span onClick={() => setIsOpen(true)}>Edit /</span><span onClick={()=>{
                        setId(idx)
                        postDelete()
                    }}> Delete</span></div>
                </div>)
            })} */}

            <table className='table-body'>
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>action</th>
                </thead>
                <tbody>
                    
                        {
                            posts && posts.slice(page, page+5).map((post, idx) => {
                               return( <tr>
                                 <td className='table-d'>{post.id}</td>
                                <td className='table-d'>{post.title}</td>
                                <td className='table-d'>{post.body}</td>
                                <td className='table-d'><span onClick={() => setIsOpen(true)}>EDIT /</span><span> DELETE</span></td>
                                </tr>
                               )
                            })
                        }
                    
                </tbody>
            </table>
            <div className='table-footer'>
                <div className='footer-btn'>
                    <button onClick={handlePagePrev}>Prev</button>
                    <button onClick={handlePageNext}>Next</button>
                </div>
            </div>
        </div>
            </div>
            {isOpen && <ManagePost setIsOpen={setIsOpen} />}
    </div>
  )
}
