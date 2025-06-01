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
    <section
      style={{
        padding: "2rem",
        background: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: 600,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>
          Create New Post
        </h2>

        <label style={{ fontWeight: "600", color: "#555" }}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            padding: "0.5rem 0.75rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#4A90E2")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        <label style={{ fontWeight: "600", color: "#555" }}>
          Description (short summary)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
          style={{
            padding: "0.5rem 0.75rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "vertical",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#4A90E2")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        <label style={{ fontWeight: "600", color: "#555" }}>Content (full post)</label>
        <textarea
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{
            padding: "0.5rem 0.75rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "vertical",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#4A90E2")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        <label style={{ fontWeight: "600", color: "#555" }}>Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            padding: "0.5rem 0.75rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            outline: "none",
            backgroundColor: "#fff",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#4A90E2")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        >
          <option value="Blog">Blog</option>
          <option value="Video">Video</option>
        </select>

        {type === "Video" && (
          <>
            <label style={{ fontWeight: "600", color: "#555" }}>Video URL</label>
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="e.g. https://www.youtube.com/watch?v=..."
              style={{
                padding: "0.5rem 0.75rem",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#4A90E2")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </>
        )}

        <label style={{ fontWeight: "600", color: "#555" }}>Upload Image</label>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{ fontSize: "1rem" }}
        />

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            fontSize: "1.1rem",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: "#4A90E2",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#357ABD")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4A90E2")}
        >
          Post
        </button>
      </form>
    </section>
  );
}
