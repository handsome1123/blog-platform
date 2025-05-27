import React from "react";

export default function PostDetailDisplay({ post }) {
  return (
    <div className="post-detail">
      <h2 className="post-title">{post.title}</h2>

      {post.image && (
        <div className="post-image-wrapper">
          <img
            src={`http://localhost:5000${post.image}`}
            alt={post.title}
            className="post-image"
          />
        </div>
      )}

      <p className="post-author">
        <i>by {post.author?.username || "Unknown"}</i>
      </p>

      <div className="post-content">{post.content}</div>
    </div>
  );
}
