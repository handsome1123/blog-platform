import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("Blog"); // Blog or Video
  const [videoUrl, setVideoUrl] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("type", type);
    if (videoUrl) formData.append("videoUrl", videoUrl);
    if (image) formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/admin/posts"); // or wherever you manage posts
    } catch (err) {
      alert("Failed to create post");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "auto" }}>
      <h2>Create New Post</h2>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Description (short summary)</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label>Content (full post)</label>
      <textarea
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <label>Type</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Blog">Blog</option>
        <option value="Video">Video</option>
      </select>

      {type === "Video" && (
        <>
          <label>Video URL</label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="e.g. https://www.youtube.com/watch?v=..."
          />
        </>
      )}

      <label>Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Post</button>
    </form>
  );
}
