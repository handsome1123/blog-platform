import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div>
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

            <main>
        <section id="latest-video" class="featured-video">
            <div class="container">
                <h2 class="section-title" data-lang="latest-episode">Latest Episode</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Featured Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-description">
                    <h3 data-lang="video-title">Traditional Burmese Food in Bangkok</h3>
                    <p data-lang="video-description">Join us as we explore authentic Burmese restaurants in Bangkok and learn how Myanmar expats keep their culinary traditions alive.</p>
                </div>
                <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" class="cta-button youtube" target="_blank">
                    <i class="fab fa-youtube"></i> <span data-lang="subscribe">Subscribe on YouTube</span>
                </a>
            </div>
        </section>

        <section class="content-preview">
            <div class="container">
                <h2 class="section-title" data-lang="discover">Discover More</h2>
                <div class="content-grid">
                    {/* Content Preview Cards */}
                    <div class="content-card">
                        <div class="card-image">
                            <img src="assets/images/placeholder-1.jpg" alt="History of Mohinga" />
                        </div>
                        <div class="card-content">
                            <span class="content-type">Blog</span>
                            <h3>History of Mohinga: Myanmar's National Dish</h3>
                            <p>Discover the origins and cultural significance of Myanmar's beloved breakfast soup.</p>
                            <a href="blog/posts/mohinga-history.html" class="read-more">Read More</a>
                        </div>
                    </div>
                    <div class="content-card">
                        <div class="card-image video-thumbnail">
                            <img src="assets/images/placeholder-2.jpg" alt="Ancient Temples" />
                            <span class="play-icon"><i class="fas fa-play"></i></span>
                        </div>
                        <div class="card-content">
                            <span class="content-type">Video</span>
                            <h3>Ancient Temples of Bagan: A Virtual Tour</h3>
                            <p>Explore the mystical ancient city through our comprehensive guide.</p>
                            <a href="vlogs/history/bagan-temples.html" class="read-more">Watch Now</a>
                        </div>
                    </div>
                    <div class="content-card">
                        <div class="card-image">
                            <img src="assets/images/placeholder-3.jpg" alt="Myanmar festivals" />
                        </div>
                        <div class="card-content">
                            <span class="content-type">Blog</span>
                            <h3>Celebrating Thingyan in Thailand</h3>
                            <p>How Myanmar communities abroad keep water festival traditions alive.</p>
                            <a href="blog/posts/thingyan-abroad.html" class="read-more">Read More</a>
                        </div>
                    </div>
                    <div class="content-card">
                        <div class="card-image video-thumbnail">
                            <img src="assets/images/placeholder-4.jpg" alt="Thai street food" />
                            <span class="play-icon"><i class="fas fa-play"></i></span>
                        </div>
                        <div class="card-content">
                            <span class="content-type">Video</span>
                            <h3>Khao Soi vs. Ohn No Khao Swe</h3>
                            <p>Comparing the beloved noodle dishes from Northern Thailand and Myanmar.</p>
                            <a href="vlogs/food/noodle-comparison.html" class="read-more">Watch Now</a>
                        </div>
                    </div>
                    <div class="content-card">
                        <div class="card-image video-thumbnail">
                            <img src="assets/images/placeholder-4.jpg" alt="Thai street food" />
                            <span class="play-icon"><i class="fas fa-play"></i></span>
                        </div>
                        <div class="card-content">
                            <span class="content-type">Video</span>
                            <h3>Khao Soi vs. Ohn No Khao Swe</h3>
                            <p>Comparing the beloved noodle dishes from Northern Thailand and Myanmar.</p>
                            <a href="vlogs/food/noodle-comparison.html" class="read-more">Watch Now</a>
                        </div>
                    </div>
                    <div class="content-card">
                        <div class="card-image video-thumbnail">
                            <img src="assets/images/placeholder-4.jpg" alt="Thai street food" />
                            <span class="play-icon"><i class="fas fa-play"></i></span>
                        </div>
                        <div class="card-content">
                            <span class="content-type">Video</span>
                            <h3>Khao Soi vs. Ohn No Khao Swe</h3>
                            <p>Comparing the beloved noodle dishes from Northern Thailand and Myanmar.</p>
                            <a href="vlogs/food/noodle-comparison.html" class="read-more">Watch Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="social-showcase">
            <div class="container">
                <h2 class="section-title" data-lang="follow">Follow Our Journey</h2>
                <div class="social-links">
                    <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" class="social-btn youtube" target="_blank">
                        <i class="fab fa-youtube"></i> YouTube
                    </a>
                    <a href="https://www.facebook.com/cantwait2say" class="social-btn facebook" target="_blank">
                        <i class="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://www.tiktok.com/@YOUR_HANDLE" class="social-btn tiktok" target="_blank">
                        <i class="fab fa-tiktok"></i> TikTok
                    </a>
                    <a href="https://www.instagram.com/YOUR_HANDLE" class="social-btn instagram" target="_blank">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                </div>
            </div>
        </section>
    </main>

    </div>
  );
}
