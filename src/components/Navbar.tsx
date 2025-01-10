import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { MenuLinks } from "../utils/menuInfo";
import styled from 'styled-components';
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

const NavbarStyles = styled.header`
  //background: linear-gradient(351deg, #FF861E 0%, #FF861E 32.85%, #F6D217 100%);
  //box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    justify-content: space-between;
  }
  .nav_menu {
    display: flex;
    align-items: center;
    gap: 46px;
  }
  .nav_item {
    list-style: none;
    text-transform: uppercase;
  }
  .nav_link {
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.51px;
    transition: all .3s ease-in-out;
  }
`;

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const pathname = location.pathname; 

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <NavbarStyles>
        <div className="container_big flex justify-between py-3 gap-10 items-center md:items-start">
          <Logo />

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-x-2 flex-wrap w-full content-evenly">
            {MenuLinks.map((menu) => {
              const { id, url, title_fi, title_en } = menu;
              const title = i18n.language === 'fi' ? title_fi : title_en;
              
              const isActive = () => {
                if (url === '/' && pathname === '/') {
                  return true;
                }

                if (url.startsWith('/valmennus') && pathname.startsWith('/valmennus')) {
                  return true;
                }

                if (url !== '/' && pathname.includes(url)) {
                  return true;
                }
              
                return false;
              };

              return (
                <NavLink
                  key={id}
                  className={`nav_item nav_link leading-none p-2 text-black ${isActive() ? 'bg-darkGreen text-white shadow-button':'hover:text-accent'}`}
                  to={url}
                >
                  {title}
                </NavLink>
              );
            })}
          </nav>

          <LanguageToggle className="hidden md:flex" />

          {/* hamburger */}
          {nav ? (
            <i
              className="fixed right-[30px] fa fa-times text-3xl z-50 md:hidden"
              aria-hidden="true"
              onClick={showNav}
            />
          ) : (
            <i 
              className="fa fa-bars text-3xl md:hidden" 
              aria-hidden="true" 
              onClick={showNav}
            ></i>
          )}
          
          {/* Mobile menu */}
          <nav
            className={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-white z-40 duration-1000 ${
              nav ? "right-[0px]" : "right-[-100vw]"
            } `}
          >
            {MenuLinks.map((menu) => {
              const { id, url, title_fi, title_en } = menu;
              const title = i18n.language === 'fi' ? title_fi : title_en;
              
              const isActive = () => {
                if (url === '/' && pathname === '/') {
                  return true;
                }

                if (url.startsWith('/valmennus') && pathname.startsWith('/valmennus')) {
                  return true;
                }

                if (url !== '/' && pathname.includes(url)) {
                  return true;
                }
              
                return false;
              };

              return (
                <NavLink
                  key={id}
                  className={`nav_item nav_link leading-none p-2 text-black ${isActive() ? 'bg-darkGreen text-white shadow-button':'hover:text-accent'}`}
                  to={url}
                >
                  {title}
                </NavLink>
              );
            })}
            <LanguageToggle className="flex" />
          </nav>
        </div>

    </NavbarStyles>
  );
};
export default Navbar;