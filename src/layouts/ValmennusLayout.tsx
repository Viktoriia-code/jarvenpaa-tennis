import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import PageTitle from "../components/PageTitle";
import ValmennusImage from "../assets/images/valmennus.jpg";
import SideMenu from "../components/SideMenu";
import { ValmennusMenuLinks } from "../utils/menuInfo";

const ValmennusLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="content">
        <PageTitle title='Viikoittainen valmennus' image={ValmennusImage} />
        <section>
          <div className="container flex gap-12 items-start">
            <SideMenu linksList={ValmennusMenuLinks} />
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

export default ValmennusLayout;