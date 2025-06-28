import React from 'react';

export default function BlogContent() {
  return (
    <section className="blog-content">
      <div className="container">
        <div className="blog-posts">

          {/* Blog Post 1 */}
          <div className="blog-post">
            <div className="post-image">
              <img src="your-image1.jpg" alt="Post Image" />
            </div>
            <div className="post-details">
              <h3><a href="/blog/post-1">Blog Post Title 1</a></h3>
              <p className="post-meta">By Admin | March 25, 2025</p>
              <p className="post-excerpt">
                This is a brief excerpt of the first blog post. It provides a glimpse into the content of the article...
              </p>
              <a href="/blog/post-1" className="cta-button">Read More</a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="blog-post">
            <div className="post-image">
              <img src="your-image2.jpg" alt="Post Image" />
            </div>
            <div className="post-details">
              <h3><a href="/blog/post-2">Blog Post Title 2</a></h3>
              <p className="post-meta">By Admin | March 30, 2025</p>
              <p className="post-excerpt">
                This is a brief excerpt of the second blog post. It gives the reader an idea of what to expect from the full post...
              </p>
              <a href="/blog/post-2" className="cta-button">Read More</a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="blog-post">
            <div className="post-image">
              <img src="your-image3.jpg" alt="Post Image" />
            </div>
            <div className="post-details">
              <h3><a href="/blog/post-3">Blog Post Title 3</a></h3>
              <p className="post-meta">By Admin | April 2, 2025</p>
              <p className="post-excerpt">
                This is a brief excerpt of the third blog post. It highlights the key points covered in the article...
              </p>
              <a href="/blog/post-3" className="cta-button">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
