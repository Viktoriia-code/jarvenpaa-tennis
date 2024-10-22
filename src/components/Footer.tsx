import styled from 'styled-components';
import noiseBg from '../assets/images/noise_transparent.png';
import { Link, NavLink } from 'react-router-dom';
import JatsLogo from "../assets/images/jäts_logo.png";
import instagramIcon from '../assets/icons/instagram_icon.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import { MenuLink, MenuLinks } from '../utils/menuInfo';

const FooterStyles = styled.section`
  background: url(${noiseBg}) repeat, linear-gradient(343deg, #0562A5 0%, #0F85DA 100%);
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  .container {
    padding-top: 30px;
    margin-bottom: 30px;
  }
  .court-line {
    border-bottom: white solid 3px;
    display: flex;
    align-items: center;
  }
  .high-court-line {
    border-bottom: white solid 3px;
    height: 172px;
    display: flex;
    align-content: center;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 53px;
    font-style: italic;
    font-weight: 900;
    line-height: 55px; /* 103.774% */
    text-transform: uppercase;
    width: 473px;
    color: white;
    padding-top: 25px;
    padding-bottom: 37px;
    padding-left: 50px;
  }
  .title {
    border-right: white solid 3px;
    min-width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .main-btn {
    border: 3px solid #FFF;
    background: #FF861E;
    color: #FFF;
    text-align: center;
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 3.06px;
    text-transform: uppercase;
    border-radius: 0;
    padding: 18px 61px;
    margin-left: 50px;
    margin-right: 66px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    background-image: linear-gradient(351deg, #FF861E 0%, #FF861E 32.85%, #F6D217 100%);
    transition: all .3s ease-in-out;
    background-size: 100% 100%;
    background-position-y: -100px;
    background-repeat: no-repeat;
    position: relative;
  }
  .main-btn:hover {
    background-position: 100% 100%;
  }
  .Footer-img {
    position: relative;
    bottom: 26vh;
    left: 10vw;
    width: 330px;
    height: auto;
    transform: rotate(6deg);
    border: 3px solid #FFF;
  }
  .top-block {
    content: '';
    position: relative;
  }

  .tag-link {
    text-decoration: none;
    color: #FFFFFF;
    transition: all .3s ease-in-out;
  }
  .tag-link:hover {
    color: #FF861E;
    transition: all .3s ease-in-out;
  }
  .tag-item {
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
  .cards_wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className='flex justify-between items-start mb-6'>
          <div className='flex flex-col gap-8'>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={JatsLogo}
                alt="Jäts_logo"
                width={70}
              />
              <p className="font-title text-white text-xl leading-tight">Järvenpään<br/>Tennisseura</p>
            </Link>
            <div className='flex gap-5'>
              <a className='instagram-link' href="https://www.instagram.com/jarvenpaantennisseura" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="" className='w-9' />
              </a>
              <a className='instagram-link' href="https://www.facebook.com/JarvenpaanTennisseura/" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="" className='w-9' />
              </a>
            </div>
          </div>
          <div className='flex gap-16'>
            <div className='flex flex-col'>
              <h3 className='subtitle mb-2 text-white'>Yleiset tiedot</h3>
              {MenuLinks.filter((link: MenuLink) => link.group === 'Yleiset tiedot').map((link: MenuLink) => {
                return (
                  <NavLink 
                    key={link.id}
                    to={link.url}
                    className='tag-link'
                  >
                    <span className='tag-item'>{link.text}</span>
                  </NavLink>
                )
              })}
            </div>
            <div className='flex flex-col'>
              <h3 className='subtitle mb-2 text-white'>Ohjelmat</h3>
              {MenuLinks.filter((link: MenuLink) => link.group === 'Ohjelmat').map((link: MenuLink) => {
                return (
                  <NavLink 
                    key={link.id}
                    to={link.url}
                    className='tag-link'
                  >
                    <span className='tag-item'>{link.text}</span>
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>
        <p className='text-white text-center text-sm'>© Järvenpään Tennisseura, 2024</p>
      </div>
    </FooterStyles>
  )
}

export default Footer;