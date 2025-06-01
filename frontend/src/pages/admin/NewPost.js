import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("Blog");
  const [videoUrl, setVideoUrl] = useState("");
  const [mediaFile, setMediaFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("type", postType);

    if (postType === "Video") {
      formData.append("videoUrl", videoUrl);
    } else if (mediaFile) {
      formData.append("media", mediaFile);
    }

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Post created!");
        navigate("/admin/posts");
      } else {
        alert(result.error || "Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
      />

      <select
        value={postType}
        onChange={e => setPostType(e.target.value)}
      >
        <option value="Blog">Blog</option>
        <option value="Video">Video</option>
      </select>

      {postType === "Video" ? (
        <input
          type="text"
          value={videoUrl}
          placeholder="YouTube Video URL"
          onChange={e => setVideoUrl(e.target.value)}
          required
        />
      ) : (
        <input
          type="file"
          accept="image/*"
          onChange={e => setMediaFile(e.target.files[0])}
        />
      )}

      <button type="submit">Submit</button>
    </form>
  );
}
