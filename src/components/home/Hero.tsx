import styled from 'styled-components';
import noiseBg from '../../assets/images/noise_transparent.png';
import HeroImg from "../../assets/images/hero_bg.png";
import HeroCard from "../HeroServiceCard";
import { HeroServiceCards } from "../../utils/menuInfo";
import '../../index.css';
import { HomeHeroContent } from '../../utils/menuInfo';

const HeroStyles = styled.section`
  .court-part {
    color: #FFF;
    background: url(${noiseBg}) repeat, linear-gradient(343deg, #0562A5 0%, #0F85DA 100%);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 35px;
  }
  .subtitle {
    border-right: white solid 3px;
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
    text-align: center;
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 3.06px;
    text-transform: uppercase;
    border-radius: 0;
    padding: 20px 60px;
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
    height: auto;
    transform: rotate(6deg);
    border: 3px solid #FFF;
  }
  .top-block {
    content: '';
    position: relative;
  }
  .right-side {
    justify-content: flex-end;
    width: 50%;
    padding-right: 9px;
  }
  .tag-link {
    text-decoration: none;
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
    max-width: 1114px;
    padding-top: 27px;
    padding-bottom: 25px;
    margin: 0 auto;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroStyles>
      <div className="container mt-1 md:mt-3">
        <div className='court-part'>
          <div className='court-line'>
              <p className="subtitle w-full md:w-1/2 py-6 pl-6 md:pl-[50px]">Sekä arkisin että viikonloppuisin</p>
              <div className="hidden md:flex right-side">
              </div>
          </div>
          <div className='high-court-line'>
            <div className="title">
              <h1>Tennis lapsille ja aikuisille</h1>
            </div>
            <div className='hidden md:block top-block'></div>
          </div>
          <div className='high-court-line flex-col md:flex-row'>
            <div className="title w-full md:w-1/2">
              <button className='main-btn'>Varaa nyt</button>
              <div className='hidden md:block top-block'></div>
            </div>
            <div className='top-block'>
              <img 
                src={HeroImg} 
                alt="" 
                className="hero-img w-60 md:w-[330px]"
              />
            </div>
          </div>
          <div className='left-part'>
          </div>
          <div className='tag-link-wrapper text-center'>
            <p className='tag-item text-white'>{HomeHeroContent.info}</p>
          </div>
        </div>
        <div className="flex w-full justify-center gap-6 md:justify-around flex-wrap">
          {HeroServiceCards.map((path, index) => {
            return <HeroCard {...path} key={index} />;
          })}
        </div>
      </div>
    </HeroStyles>
  )
}

export default Hero