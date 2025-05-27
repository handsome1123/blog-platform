import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PostDetailDisplay from "../components/PostDetailDisplay";
import './../assets/css/style.css';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then(res => setPost(res.data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <main className="container-detail">
        <PostDetailDisplay post={post} />
      </main>
      <Footer />
    </>
  );
}
