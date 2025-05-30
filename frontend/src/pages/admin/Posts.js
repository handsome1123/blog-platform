import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ContentCard from "../../components/ContentCard";
import AdminLayout from "../../components/admin/AdminLayout";
import "../../assets/css/style.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then((res) => {
        const sortedPosts = [...res.data].reverse();
        setPosts(sortedPosts);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  return (
    <AdminLayout>
      <h1>All Posts</h1>
      <Link to="/new-post">+ New Post</Link>
          <div className="content-grid">
          {posts.map((post) => (
            <ContentCard
              key={post._id}
              imageUrl={post.image ? `http://localhost:5000${post.image}` : null}
              altText={post.altText || post.title}
              type={post.type || "Article"}
              title={post.title}
              description={post.description || ""}
              content={post.content}
              link={`/posts/${post._id}`}
              linkText={post.linkText || (post.isVideo ? "Watch Now" : "Read More")}
              isVideo={post.isVideo || false}
            />
          ))}
        </div>
    </AdminLayout>
  );
}
