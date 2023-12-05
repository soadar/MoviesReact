import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Search from "./Buscador.jsx";
const Layout = () => {
  return (
    <Fragment>
      <Link to="/">
        <h1>Movies</h1>
      </Link>
      <Search />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
