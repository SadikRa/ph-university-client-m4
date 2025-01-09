import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>admin layout should be here </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
