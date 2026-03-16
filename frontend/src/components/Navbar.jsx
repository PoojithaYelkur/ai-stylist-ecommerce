import { Link } from "react-router-dom";

export default function Navbar() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <nav className="nav">

      <h2>AI Stylist</h2>

      <div className="links">

        <Link to="/products">Products</Link>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </nav>
  );
}