import React from 'react'

const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{post.title}</h6>
      </div>
    </div>
  )
}

export default Post
