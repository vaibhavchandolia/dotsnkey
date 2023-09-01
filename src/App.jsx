import { useState } from 'react'
import './App.css'
import axios from 'axios'
import BlogLanding from './Components/BlogLanding/BlogLanding'
import PostList from './Components/PostList/PostList'
import ManagePost from './Components/ManagePost/ManagePost'

function App() {

  return (
    <div>
      <PostList /> 
      <BlogLanding />
    </div>
  )
}

export default App
