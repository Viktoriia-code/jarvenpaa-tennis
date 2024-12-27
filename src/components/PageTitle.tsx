import React from 'react';
import styled from 'styled-components';
import noiseBg from '../assets/images/noise_transparent.png';
import '../App.css';
import JarvTennis from '../assets/images/Jats_logo_full.png';

const PageTitleStyles = styled.section`
  .court-part {
    color: #FFF;
    background: url(${noiseBg}) repeat, linear-gradient(343deg, #0562A5 0%, #0F85DA 100%);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }
  .border_right {
    border-right: white solid 3px;
  }
  .court-line {
    min-height: 50px;
  }
  .high-court-line {
    border-bottom: white solid 3px;
    display: flex;
    align-content: center;
    position: relative;
  }
  .title {
    min-width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .small-court-line {
    border-right: white solid 3px;
    min-width: 50%;
    height: 100%;
    min-height: 50px;
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
    width: auto;
    border: 3px solid #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

interface PageTitleProps {
  title: string;
  image?: string;
  subtitle?: string;
  note?: string;
  button?: boolean;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, image, subtitle, note, button }) => {
  return (
    <PageTitleStyles>
      <div className="container">
        <div className='court-part border-[3px] border-white relative'>
          <div className='court-line flex border-b-[3px] border-b-white'>
            <p className="subtitle md:border_right w-full md:w-1/2 py-3 pl-6 md:pl-[50px] md:py-5 md:border-r-[3px] md:border-r-white">{subtitle}</p>
            <div className='hidden md:flex right-side'></div>
          </div>
          <div className='high-court-line'>
            <div className="title md:border-r-[3px] md:border-r-white">
              <h1 className='main_title py-5 pl-6 md:py-8 md:pl-[50px]'>{title}</h1>
            </div>
            <div className='hidden top-block md:h-28 bottom-[38vh] md:flex justify-center items-center w-full'>
            </div>
          </div>
          {button && (
            <div className='high-court-line flex-col md:flex-row'>
              <div className="title w-full md:w-1/2 md:border-r-[3px] md:border-r-white">
                <button className='main-btn my-5 md:my-8 ml-6 md:ml-[50px]'>Varaa nyt</button>
              </div>
              <div className='hidden md:block top-block'></div>
            </div>
          )}
          {note ? (
            <div className='tag-link-wrapper text-center'>
              <p className='tag-item text-white text-lg md:text-[21px] py-4 md:py-6 mx-6'>{note}</p>
            </div>
            ) : (
              <div className='court-line hidden md:flex'>
                <div className="small-court-line">
                  <div className="small-court-line"></div>
                  <div className='top-block'></div>
                </div>
                <div className='top-block'></div>
              </div>
            )
          }
          <img 
            src={image ? image : JarvTennis} 
            alt=""
            className={`hero-img md:absolute left-[65%] z-10 md:top-1/2 transform md:-translate-y-1/2 flex justify-self-center rotate-[6deg] ${button ? 'h-[320px]' : 'h-44 md:h-[210px]'}`}
          />
        </div>
      </div>
    </PageTitleStyles>
  )
}

export default PageTitle