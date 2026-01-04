import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* Footer can be added here later */}
    </>
  );
};

export default MainLayout;
