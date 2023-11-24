import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <Fragment>
      <Link to="/">
        <h1>Movies</h1>
      </Link>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
