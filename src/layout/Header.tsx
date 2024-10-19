import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuLinks } from "../utils/menuInfo";
import JatsLogo from "../assets/images/jäts_logo.png";
import styled from 'styled-components';

const HeaderStyles = styled.header`
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
    color: black;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.51px;
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

const Header: React.FC = () => {

  const [isClick, setIsClick] = useState(false);
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (openMobileSidebar) {
      document.body.classList.add("disable-scrolling");
    } else {
      document.body.classList.remove("disable-scrolling");
    }

    // Clean up the class when component unmounts
    return () => {
      document.body.classList.remove("disable-scrolling");
    };
  }, [openMobileSidebar]);

  const closeMobileMenu = () => {
    setIsClick(false);
  };

  return (
    <HeaderStyles>
      
      {windowWidth >= 630 ? (
        <div className="container justify-between py-3 gap-10">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={JatsLogo}
              alt="Jäts_logo"
              width={70}
            />
            <p className="font-title text-black text-xl leading-tight">Järvenpään Tennisseura</p>
          </Link>
          <nav className="flex gap-x-6 flex-wrap w-full content-evenly">
            {MenuLinks.map((menu) => {
              const { id, url, text } = menu;
              return (
                <NavLink
                  key={id}
                  className="nav_item nav_link leading-none"
                  to={url}
                >
                  {text}
                </NavLink>
              );
            })}
          </nav>
        </div>
      ) : (
        <>
          <nav className="navbar">
            <div className="navbar_logos">
              <div>
                <NavLink to="/">
                  <img
                    src={JatsLogo}
                    alt="Jäts_logo"
                    className="logo_img"
                  />
                </NavLink>
              </div>
            </div>
            <div
              className={
                openMobileSidebar
                  ? "burgermenu_wrapper_active"
                  : "burgermenu_wrapper"
              }
              onClick={() => setOpenMobileSidebar(!openMobileSidebar)}
            >
              <span className="burgermenu_btn_line"></span>
              <span className="burgermenu_btn_line"></span>
              <span className="burgermenu_btn_line"></span>
            </div>
          </nav>

          <div
            className={
              openMobileSidebar ? "sidebar_active" : "sidebar"
            }
          >
            <div className="sidebarLinkWrapper">
              {MenuLinks.map((item) => {
                return (
                  <div key={item.id} className="nav_item">
                    
                      <a
                        href={item.url}
                        onClick={() => setOpenMobileSidebar(!openMobileSidebar)}
                        className="nav_links"
                      >
                        {item.text}
                      </a>
                    
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </HeaderStyles>
  );
};
export default Header;