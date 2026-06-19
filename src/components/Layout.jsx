import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {
  return (
    <>
      <Sidebar />

      <div className="main-content">

        <Topbar />

        <div className="mt-4">
          {children}
        </div>

      </div>
    </>
  );
}

export default Layout;