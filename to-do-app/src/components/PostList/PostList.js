import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchPosts } from '../../redux/postlist/postlistSlice'

const PostList = () => {
    const {loading, posts, error} = useSelector((state) =>state.postlist)
    const dispatch = useDispatch();
    
  useEffect(() => {
   dispatch(fetchPosts())
  }, [])
 
  return (
    <div>
      <h1>Posts</h1>
      {loading === true && <p>Loading...</p>}
      {loading === false && (
        <ul>
            {posts.map((el) => <li key={el.id}>{el.title}</li>)}
        </ul>
      )}
    </div>
  )
}

export default PostList
