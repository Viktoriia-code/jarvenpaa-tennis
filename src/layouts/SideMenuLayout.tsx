import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
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
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state?.fromSideMenu && contentRef.current) {
      const element = contentRef.current;
      const rect = element.getBoundingClientRect();
      
      if (rect.top < 0 || rect.top > window.innerHeight) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <main className="content leading-relaxed">
        <PageTitle title={title} image={ValmennusImage} />
        <section>
          <div className="container flex gap-12 flex-col md:flex-row">
            <SideMenu linksList={links} />
            <div className="flex-1 flex-col gap-4 scroll-mt-5" ref={contentRef}>
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