import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

const Layout: React.FC = () => {
  return (
    <div className="App flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="content flex flex-col items-center flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;