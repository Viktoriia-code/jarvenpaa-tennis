import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { MenuLinks } from "../utils/menuInfo";
import JatsLogo from "../assets/images/jäts_logo.png";
import styled from 'styled-components';

const NavbarStyles = styled.header`
  //background: linear-gradient(351deg, #FF861E 0%, #FF861E 32.85%, #F6D217 100%);
  //box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  .container {
    max-width: 1330px;
    display: flex;
    justify-content: space-between;
    width: 100%;
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
  .logo_img {
    width: 50px;
  }
  .instagram-icon {
    margin: 10px;
    width: 35px;
    height: 35px;
    border-radius: 10px;
  }
  .instagram-link .instagram-icon {
    background-image: linear-gradient(351deg, #FF861E 0%, #FF861E 32.85%, #F6D217 100%);
    transition: all .3s ease-in-out;
    background-size: 35px 35px;
    background-position-y: -35px;
    background-repeat: no-repeat;
    position: relative;
  }
  .instagram-link:hover .instagram-icon {
    background-position: 100% 100%;
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname; 

  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <NavbarStyles>
      
        <div className="container justify-between py-3 gap-10">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={JatsLogo}
              alt="Jäts_logo"
              width={70}
            />
            <p className="font-title text-black text-xl leading-tight font-black italic">Järvenpään Tennisseura</p>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-x-2 flex-wrap w-full content-evenly">
            {MenuLinks.map((menu) => {
              const { id, url, title } = menu;
              
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

          {/* hamburger */}
          {nav ? (
            <i
              className="fixed right-[30px] fa fa-times text-3xl text-black z-60 md:hidden"
              aria-hidden="true"
              onClick={showNav}
            ></i>
          ) : (
            <i 
              className="fa fa-bars text-3xl md:hidden text-black" 
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
              const { id, url, title } = menu;
              
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
        </div>

    </NavbarStyles>
  );
};
export default Navbar;