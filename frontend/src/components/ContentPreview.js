import { useEffect, useState } from "react";
import axios from "axios";
import ContentCard from "./ContentCard";
import "./../assets/css/style.css";

function ContentPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then((res) => {
        const sortedPosts = [...res.data].reverse();
        setPosts(sortedPosts.slice(0, 6));
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  return (
    <section className="content-preview">
      <div className="container">
        <h2 className="section-title" data-lang="discover">Discover More</h2>
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
      </div>
    </section>
  );
}

export default ContentPreview;
