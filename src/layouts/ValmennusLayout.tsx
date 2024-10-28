import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import PageTitle from "../components/PageTitle";
import ValmennusImage from "../assets/images/valmennus.jpg";
import ValmennusMenu from "../components/ValmennusMenu";

const ValmennusLayout: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <PageTitle title='Viikoittainen valmennus' image={ValmennusImage} />
        <section>
          <div className="container flex gap-10 items-start">
            <ValmennusMenu />
            <div className="flex items-center flex-col gap-4">
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