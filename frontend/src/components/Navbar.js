import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link> | 
      {token ? (
        <>
          <Link to="/new-post">New Post</Link> | 
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | 
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
