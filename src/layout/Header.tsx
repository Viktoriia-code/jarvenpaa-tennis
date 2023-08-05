import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuLinks } from "../utils/menuInfo";
import SunTennisLogo from "../assets/icons/sun_tennis_logo.svg";
import styled from 'styled-components';

const HeaderStyles = styled.header`
  background: linear-gradient(351deg, #FF861E 0%, #FF861E 32.85%, #F6D217 100%);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  .container {
    max-width: 1330px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
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
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.51px;
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
    <HeaderStyles className="header_section">
      
      {windowWidth >= 630 ? (
        <div className="container">

          <div className="navbar_logos">
            
            <div>
              <NavLink to="/">
                <img
                  src={SunTennisLogo}
                  alt="SkillsBridge_logo"
                  className="logo_img"
                />
              </NavLink>
            </div>
          </div>
          <nav className="navbar">
            <ul
              className={
                isClick ? "nav-menu active" : "nav_menu"
              }
            >
              {MenuLinks.map((menu) => {
                const { id, url, text } = menu;
                return (
                  <li
                    key={id}
                    className="nav_item"
                  >
                    {text === "Paths" ? (
                      <>
                        <a
                          href={url}
                          onClick={closeMobileMenu}
                          className="nav_link"
                        >
                          {text}
                        </a>
                        
                      </>
                    ) : (
                      <a
                        href={url}
                        onClick={closeMobileMenu}
                        className="nav_link"
                      >
                        {text}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : (
        <>
          <nav className="navbar">
            <div className="navbar_logos">
              <div>
                <NavLink to="/">
                  <img
                    src={SunTennisLogo}
                    alt="SkillsBridge_logo"
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