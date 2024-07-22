import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h3 className="container">NYT Popular Articles</h3>
        <button
          data-testid="home-nav"
          className="navAlignment"
          onClick={() => navigate("/home")}
        >
          Home
        </button>
      </header>
      <hr />
      <Outlet />
    </>
  );
};
