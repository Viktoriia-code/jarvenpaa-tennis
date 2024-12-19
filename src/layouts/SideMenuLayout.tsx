import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import PageTitle from "../components/PageTitle";
import ValmennusImage from "../assets/images/valmennus.jpg";
import SideMenu from "../components/SideMenu";
import { MenuLink } from "../utils/menuInfo";


interface SideMenuLayoutProps {
  title: string;
  links: MenuLink[];
}

const SideMenuLayout: React.FC<SideMenuLayoutProps> = ({ title, links }) => {
  return (
    <div>
      <Navbar />
      <main className="content">
        <PageTitle title={title} image={ValmennusImage} />
        <section>
          <div className="container flex gap-12">
            <SideMenu linksList={links} />
            <div className="flex flex-col gap-4">
              <Outlet />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SideMenuLayout;