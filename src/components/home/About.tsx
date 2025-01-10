import styled from 'styled-components';
import SectionTitle from "../SectionTitle";
import '../../index.css';
import { useTranslation } from 'react-i18next';

const AboutStyles = styled.section`
  .title_wrapper {
    display: flex;
    justify-content: center;
  }
  .name_title {
    color: var(--dark-blue);
    font-family: Montserrat;
    font-size: 52px;
    font-style: italic;
    font-weight: 900;
    line-height: 55px; /* 98.214% */
    text-transform: uppercase;
  }
  .exp_card {
    border: 3px solid #2B2B2B;
    display: flex;
  }
  .exp_card_year {
    color: var(--white);
    border-right: 3px solid #2B2B2B;
    height: 75px;
    text-align: center;
    background-color: var(--orange);
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  .hero-card-content {
    display: flex;
  }
  .hero-card-icon {
    margin: 0 auto;
  }
`

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AboutStyles className='bg-grayBg'>
      <div className="title_wrapper">
        <SectionTitle title={t('about.sectionTitle')} />
      </div>
      <div className="container">
        <h2 className='main_title text-darkBlue mb-2'>{t('about.title')}</h2>
        <p className="subtitle mb-4 font-text">{t('about.subtitle')}</p>
        <div className="flex justify-between gap-6 flex-col md:flex-row md:gap-16">
          <p>{t('about.description')}</p>
          <div className="left-part">
            <div className='exp_card mb-4 bg-white items-center gap-6 w-full md:w-[410px]'>
              <div className="exp_card_year card_title w-20 md:w-[134px]">50+</div>
              <p>{t('about.featureCards.0')}</p>
            </div>
            <div className='exp_card bg-white items-center gap-6'>
              <div className="exp_card_year card_title w-20 md:w-[134px]">200+</div>
              <p>{t('about.featureCards.1')}</p>
            </div>
          </div>
        </div>
      </div>
    </AboutStyles>
  )
}

export default About