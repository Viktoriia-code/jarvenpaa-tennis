import styled from 'styled-components';
import noiseBg from '../assets/images/noise_transparent.png';
import HeroImg from "../assets/images/hero_bg.png";
import HeroCard from "../components/HeroServiceCard";
import { HeroServiceCards } from "../utils/menuInfo";

const HeroStyles = styled.section`
  .container {
    margin-top: 15px;
    margin-bottom: 45px;
  }
  .court-part {
    background: url(${noiseBg}) repeat, linear-gradient(343deg, #0562A5 0%, #0F85DA 100%);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 35px;
  }
  .subtitle {
    color: #FFF;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.66px;
    text-transform: uppercase;
    padding-top: 24px;
    padding-bottom: 22px;
    padding-left: 50px;
    border-right: white solid 3px;
    width: 50%;
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
  .hero-img {
    position: relative;
    bottom: 26vh;
    left: 10vw;
    width: 330px;
    height: auto;
    transform: rotate(6deg);
  }
  .top-block {
    content: '';
    position: relative;
  }
  .right-side {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    padding-right: 9px;
  }
  .tag-link {
    text-decoration: none;
    color: #FFFFFF;
    transition: all .3s ease-in-out;
  }
  .tag-link:hover {
    text-decoration: none;
    color: #FF861E;
    transition: all .3s ease-in-out;
  }
  .tag-item {
    font-family: 'Poppins';
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
  .tag-link-wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1114px;
    padding-top: 27px;
    padding-bottom: 25px;
    margin: 0 auto;
  }
  .cards_wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroStyles>
      <div className="container">
        <div className='court-part'>
          <div className='court-line'>
              <p className="subtitle">Sekä arkisin että viikonloppuisin</p>
              <div className='right-side'>
              </div>
          </div>
          <div className='high-court-line'>
            <div className="title">
              <h1>Tennis lapsille ja aikuisille</h1>
            </div>
            <div className='top-block'></div>
          </div>
          <div className='high-court-line'>
            <div className="title">
              <div className="title">
                <button className='main-btn'>Book now</button>
              </div>
              <div className='top-block'></div>
            </div>
            <div className='top-block'>
              <img 
                src={HeroImg} 
                alt="" 
                className="hero-img"
              />
            </div>
          </div>
          <div className='left-part'>
          </div>
          <div className='tag-link-wrapper'>
            <a href="http://" target="_blank" className='tag-link' rel="noopener noreferrer">
              <span className='tag-item'>#Tennis coach</span>
            </a>
            <a href="http://" target="_blank" className='tag-link' rel="noopener noreferrer">
              <span className='tag-item'>#Padel coach</span>
            </a>
            <a href="http://" target="_blank" className='tag-link' rel="noopener noreferrer">
              <span className='tag-item'>#Kerava</span>
            </a>
            <a href="http://" target="_blank" className='tag-link' rel="noopener noreferrer">
              <span className='tag-item'>#Tuusula</span>
            </a>
            <a href="http://" target="_blank" className='tag-link' rel="noopener noreferrer">
              <span className='tag-item'>#Järvenpää</span>
            </a>
            <a href="http://" target="_blank" className='tag-link' rel="noopener noreferrer">
              <span className='tag-item'>#Vantaa</span>
            </a>
          </div>
        </div>
        <div className="cards_wrapper">
          {HeroServiceCards.map((path, index) => {
            return <HeroCard {...path} key={index} />;
          })}
        </div>
      </div>
    </HeroStyles>
  )
}

export default Hero