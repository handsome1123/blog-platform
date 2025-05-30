import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <AdminLayout>
      <h2>All Posts</h2>
      <Link to="/new-post">+ New Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/post/${post._id}`}>
              <h3>{post.title}</h3>
              {post.image && <img src={`http://localhost:5000${post.image}`} alt="Post" style={{ width: '50%', maxHeight: '300px' }} />}
              <p>by {post.author?.username}</p>
            </Link>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
}
