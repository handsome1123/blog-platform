import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
// import Navbar from "./components/Navbar";

// Importing pages
import About from "./pages/About";
import Blog from "./pages/Blog"; 
import Vlog from "./pages/Blog";
import Contact from "./pages/Contact"; 

// Admin routes
import AdminDashboard from "./pages/Admin/AdminDashboard";
import NewPost from "./pages/Admin/NewPost";


import './assets/css/style.css'; 

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/vlogs" element={<Vlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/:id" element={<PostDetails />} />

        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        {/* User routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
