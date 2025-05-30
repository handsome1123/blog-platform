

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
// import Home2 from "./pages/Home2";

// Admin routes
import AdminDashboard from "./pages/Admin/AdminDashboard";
// import Users from "./pages/Admin/Users";
import Pages from "./pages/Admin/Pages";
import Settings from "./pages/Admin/Settings"; 
import NewPost from "./pages/Admin/NewPost";

import EditHomePage from "./pages/Admin/edit-home";


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
        {/* <Route path="/home2" element={<Home2 />} /> */}


        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/admin/users" element={<Users />} /> */}
        <Route path="/admin/pages" element={<Pages />} />
        <Route path="/admin/settings" element={<Settings />} />
        {/* <Route path="/admin/logout" element={<AdminLogout />} /> */}
        
        {/* New Post route for admin */}
        <Route path="/admin/new-post" element={<NewPost />} />
        <Route path="/admin/edit-home" element={<EditHomePage />} />

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
