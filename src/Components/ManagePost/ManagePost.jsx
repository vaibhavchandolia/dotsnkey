import React, { useState } from 'react'
import axios from 'axios'
import './ManagePost.css'

export default function ManagePost({setIsOpen}) {
    const baseUrl = "https://jsonplaceholder.typicode.com"
    const [post, setPost] =useState({
        title: '',
        body: ''
    })
    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.get(`${baseUrl}/posts/1`).then((res) => {console.log(res.data)})
        axios.put(`${baseUrl}/posts/1`,{post})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  return (
    <div className='managepost'>
        <div className="managepost-wrapper">
            <div className="input-con">
                <label>Title</label>
                <input type="text" placeholder='Enter Post title' onChange={handleInput}/>
            </div>
            <div className="input-con">
                <label >Body</label>
                <input type="text"  placeholder='Enter Post Body' onChange={handleInput}/>
            </div>
            <div className="sub-buttons">
                <button onClick={ () => setIsOpen(false)}>Cancel</button>
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    </div>
  )
}
