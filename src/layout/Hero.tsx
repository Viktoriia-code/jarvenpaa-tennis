import styled from 'styled-components';
import noiseBg from '../assets/images/noise_transparent.png';
import heroImg from '../assets/images/Hero/person.png';
import instagramIcon from '../assets/icons/instagram_icon.svg';

const HeroStyles = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  .container {
    width: 1330px;
    background: url(${noiseBg}) repeat, linear-gradient(343deg, #0562A5 0%, #0F85DA 100%);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
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
    width: 419px;
    position: absolute;
    bottom: 0;
    left: 8vw;
    width: 30vw;
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
  .instagram-icon {
    margin: 10px;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
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

const Hero: React.FC = () => {
  return (
    <HeroStyles className="hero_section">
      <div className="container">
        <div className='court-part'>
          <div className='court-line'>
              <p className="subtitle">At any day from 8AM to 19PM</p>
              <div className='right-side'>
                <a className='instagram-link' href="https://www.instagram.com/tennis_kokkaus/" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="" className='instagram-icon' />
                </a>
              </div>
          </div>
          <div className='high-court-line'>
            <div className="title">
              <h1>Tennis and padel coach</h1>
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
              <img src={heroImg} alt="" className="hero-img" />
            </div>
          </div>
          <div className='left-part'>
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}

export default Hero