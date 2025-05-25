import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import LatestVideo from '../components/LatestVideo';
import ContentPreview from '../components/ContentPreview'; // We'll create this
import SocialShowcase from '../components/SocialShowcase';
import Footer from '../components/Footer';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <>
      <div>
        <h2>All Posts</h2>
        <Link to="/new-post">+ New Post</Link>
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <Link to={`/post/${post._id}`}>
                <h3>{post.title}</h3>
                {post.image && <img src={`http://localhost:5000${post.image}`} alt="Post" style={{ width: '30%', maxHeight: '300px' }} />}
                <p>by {post.author?.username}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Header />
      <HeroBanner />
      <LatestVideo />
      <ContentPreview />
      <SocialShowcase />
      <Footer />
    </>
  );
}
