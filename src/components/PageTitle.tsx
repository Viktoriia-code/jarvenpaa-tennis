import React from 'react';
import styled from 'styled-components';
import noiseBg from '../assets/images/noise_transparent.png';
import '../App.css';
import JarvTennis from '../assets/images/Jats_logo_full.png';

const PageTitleStyles = styled.section`
  .container {
    margin-top: 15px;
    margin-bottom: 40px;
  }
  .court-part {
    background: url(${noiseBg}) repeat, linear-gradient(343deg, #0562A5 0%, #0F85DA 100%);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    position: relative;
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
    position: relative;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-style: italic;
    font-weight: 900;
    line-height: 55px; /* 103.774% */
    text-transform: uppercase;
    color: white;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 48px;
    padding-right: 20px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow-wrap: break-word;
  }
  .title {
    border-right: white solid 3px;
    max-width: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .small-court-line {
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
    top: 50%;
    right: 15%;
    width: auto;
    height: 230px;
    transform: translateY(-50%) rotate(6deg);
    border: 3px solid #FFF;
    z-index: 1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
      <div className="container relative">
        <img 
          src={image ? image : JarvTennis} 
          alt="" 
          className="hero-img absolute"
        />
        <div className='court-part'>
          <div className='court-line'>
            <p className="subtitle"></p>
            <div className='right-side'></div>
          </div>
          <div className='high-court-line'>
            <div className="title">
              <h1>{title}</h1>
            </div>
            <div className='top-block'>

            </div>
          </div>
          <div className='court-line'>
            <div className="small-court-line">
              <div className="small-court-line"></div>
              <div className='top-block'>
              </div>
            </div>
            <div className='top-block'></div>
          </div>
          <div className='left-part'>
          </div>
        </div>
      </div>
    </PageTitleStyles>
  )
}

export default PageTitle