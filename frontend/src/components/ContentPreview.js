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
    <section class="content-preview">
      <div class="container">
        <h2 class="section-title" data-lang="discover">Discover More</h2>
        <div class="content-grid">
          {posts.map((post) => (
            <ContentCard
              key={post._id}
              imageUrl={post.image ? `http://localhost:5000${post.image}` : null}
              altText={post.title}
              type={post.type}
              title={post.title}
              content={post.content}
              link={`/posts/${post._id}`}
              linkText={post.type === 'Video' ? 'Watch Now' : 'Read More'}
              isVideo={post.type === 'Video'}
              videoUrl={post.videoUrl}
            />

          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentPreview;
