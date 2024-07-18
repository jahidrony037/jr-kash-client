import { Outlet } from "react-router-dom";

const MainApp = () => {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default MainApp;
