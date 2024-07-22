import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h3 className="container">Popular articles</h3>
        <div
          data-testid="home-nav"
          className="navAlignment"
          onClick={() => navigate("/home")}
        >
          Home
        </div>
      </header>
      <hr />
      <Outlet />
    </>
  );
};
