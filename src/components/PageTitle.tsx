import React from 'react';
import styled from 'styled-components';
import noiseBg from '../assets/images/noise_transparent.png';
import '../App.css';

const PageTitleStyles = styled.section`
  .container {
    margin-top: 15px;
    margin-bottom: 35px;
  }
  .court-part {
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
    height: 100%;
  }
  .court-line {
    display: flex;
    align-items: center;
    height: 50px;
  }
  .high-court-line {
    border-top: white solid 3px;
    border-bottom: white solid 3px;
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
    padding-top: 60px;
    padding-bottom: 60px;
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
    bottom: 15vh;
    left: 10vw;
    width: 250px;
    height: auto;
    transform: rotate(6deg);
    border: 3px solid #FFF;
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
`;

interface PageTitleProps {
  title: string;
  image?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, image }) => {
  return (
    <PageTitleStyles>
      <div className="container">
        <div className='court-part'>
          <div className='court-line'>
            <p className="subtitle"></p>
            <div className='right-side'></div>
          </div>
          <div className='high-court-line'>
            <div className="title">
              <h1>{title}</h1>
            </div>
            <div className='top-block'></div>
          </div>
          <div className='court-line'>
            <div className="title">
              <div className="title"></div>
              <div className='top-block'></div>
            </div>
            <div className='top-block'>
              <img 
                src={image} 
                alt="" 
                className="hero-img"
              />
            </div>
          </div>
          <div className='left-part'>
          </div>
        </div>
      </div>
    </PageTitleStyles>
  )
}

export default PageTitle