import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../actions/myActions'
import { RootStateBlog } from '../utils/type'

const TwoComponent = () => {

  const dispatch = useDispatch()
  const blogs = useSelector<RootStateBlog, any>(state => state.startState)
  console.log(blogs[0]);
  

  const fetchBlogs = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => dispatch(getAllBlogs(data)))
      .then(d => console.log(d))
    //.catch(() => dispatch(putQuote('Error')))
  }

  return (
    <div>
      <h2>Blog</h2>
      <button onClick={fetchBlogs}>Get All Blogs</button>
    </div>
  )
}

export default TwoComponent