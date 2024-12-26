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
  .border_right {
    border-right: white solid 3px;
  }
  .court-line {
    border-bottom: white solid 3px;
    display: flex;
    align-items: center;
  }
  .high-court-line {
    border-bottom: white solid 3px;
    display: flex;
    align-content: center;
  }
  h1 {
    width: 473px;
  }
  .title {
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
    height: auto;
    transform: rotate(6deg);
    border: 3px solid #FFF;
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
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
  .tag-link-wrapper {
    max-width: 1114px;
    margin: 0 auto;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroStyles>
      <div className="container mt-1 md:mt-3">
        <div className='court-part'>
          <div className='court-line'>
              <p className="subtitle md:border_right w-full md:w-1/2 py-3 pl-6 md:pl-[50px] md:py-5 md:border-r-[3px] md:border-r-white">Sekä arkisin että viikonloppuisin</p>
              <div className="hidden md:flex right-side">
              </div>
          </div>
          <div className='high-court-line'>
            <div className="title md:border-r-[3px] md:border-r-white">
              <h1 className='main_title py-5 pl-6 md:py-8 md:pl-[50px]'>Tennis lapsille ja aikuisille</h1>
            </div>
            <div className='hidden md:block top-block'></div>
          </div>
          <div className='high-court-line flex-col md:flex-row'>
            <div className="title w-full md:w-1/2 md:border-r-[3px] md:border-r-white">
              <button className='main-btn my-5 md:my-8 ml-6 md:ml-[50px]'>Varaa nyt</button>
              <div className='hidden md:block top-block'></div>
            </div>
            <div className='top-block md:h-32 bottom-[38vh] flex justify-center items-end w-full'>
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
            <p className='tag-item text-white text-lg md:text-[21px] py-4 md:py-6 mx-6'>{HomeHeroContent.info}</p>
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