import styled from 'styled-components';
import { Content } from "../utils/Content";
import SectionTitle from "../components/SectionTitle";

const AboutStyles = styled.section`
  .title_wrapper {
    display: flex;
    justify-content: center;
  }
  .name_title {
    color: var(--dark-blue);
    font-family: Montserrat;
    font-size: 56px;
    font-style: italic;
    font-weight: 900;
    line-height: 55px; /* 98.214% */
    text-transform: uppercase;
  }
  .exp_card {
    border: 3px solid #2B2B2B;
    width: 410px;
    display: flex;
  }
  .exp_card_year {
    color: var(--white);
    border-right: 3px solid #2B2B2B;
    width: 134px;
    height: 89px;
    text-align: center;
    background-color: var(--orange);
    font-family: 'Montserrat';
    font-size: 40px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-card-content {
    display: flex;
  }
  .hero-card-icon {
    margin: 0 auto;
  }
  .top_part {
    display: flex;
  }
`

const About: React.FC = () => {
  return (
    <AboutStyles>
      <div className="container">
        <div className="title_wrapper">
          <SectionTitle title={Content.about.title} />
        </div>
        <div className="top_part">
          <div className='right_part'>
            <p className="subtitle">Hello, my name is</p>
            <h1 className='name_title'>Stefan Aalto-Setälä</h1>
            <p className="subtitle">Tennis and padel couch</p>
            <p className="main_text">
            I am an enegetic and passionate tennis and padel coach. I am a dedicated, focused and very well organized coach, and can take care of a group of players from the individual physical, technical and mental program as well as scheduling a good tournament program.
            </p>
          </div>
          <div className="left-part">
            <div className='exp_card'>
              <div className="exp_card_year">20+</div>
              <h3>Years of Tennis Playing Experience</h3>
            </div>
          </div>
        </div>
      </div>
    </AboutStyles>
  )
}

export default About