import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BasicExample from "../components/BasicExample";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";

function HomeLayout() {
  return (
    <>
      {/* <Header /> */}

      <BasicExample />
      <Outlet />
    </>
  );
}

export default HomeLayout;
