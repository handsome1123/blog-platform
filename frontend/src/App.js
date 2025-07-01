import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
// import Navbar from "./components/Navbar";

// Importing pages
import About from "./pages/About";
import Blog from "./pages/Blog"; 
import Vlog from "./pages/Vlog";
import Contact from "./pages/Contact"; 
// import Home2 from "./pages/Home2";


// import ADashboard from './pages/Admin/ADashboard';
// import Users from "./pages/Admin/Users";
// import Pages from "./pages/Admin/Pages";
// import Settings from "./pages/Admin/Settings"; 
import NewPost from "./pages/Admin/NewPost";
import Posts from "./pages/Admin/Posts";

// import EditHomePage from "./pages/Admin/edit-home";
// import EditAboutPage from "./pages/Admin/edit-about";
// import EditBlogPage from "./pages/Admin/edit-blog";
// import EditVlogPage from "./pages/Admin/edit-vlog";




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
        <Route path="/admin/dashboard" element={<ADashboard />} />
        {/* <Route path="/admin/users" element={<Users />} /> */}
        {/* <Route path="/admin/pages" element={<Pages />} /> */}
        {/* <Route path="/admin/settings" element={<Settings />} /> */}
        {/* <Route path="/admin/logout" element={<AdminLogout />} /> */}
        
        {/* New Post route for admin */}
        <Route path="/admin/new-post" element={<NewPost />} />
        {/* <Route path="/admin/edit-home" element={<EditHomePage />} /> */}
        <Route path="/admin/posts" element={<Posts />} />
        {/* <Route path="/admin/edit-about" element={<EditAboutPage />} /> */}
        {/* <Route path="/admin/edit-blog" element={<EditBlogPage />} /> */}
        {/* <Route path="/admin/edit-vlog" element={<EditVlogPage />} />   */}

        {/* User routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/new-post" element={<NewPost />} /> */}
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
