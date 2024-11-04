import { HeroServiceCards } from "../utils/menuInfo";
import arrowIcon from "../assets/icons/big-arrow.svg";
import styled from 'styled-components';

const HeroCardStyles = styled.a`
  border: 3px solid #2B2B2B;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  .herocard_subtitle {
    border-bottom: 3px solid #2B2B2B;
    background-color: var(--gray-bg);
    display: flex;
    align-self: center;
    padding: 10px 22px 9px 22px;
    width: 100%;
  }
  .card-title {
    color: #0A4E91;
    padding: 10px 40px 17px 25px;
    border-right: 3px solid #2B2B2B;
    max-width: 297px;
  }
  .hero-card-content {
    display: flex;
  }
  .hero-card-icon {
    margin: 0 22px;
  }
`;

export interface HeroServiceCards {
  url: string;
  title: string;
  subtitle: string;
}

function HeroServiceCard(heroServiceCards: HeroServiceCards) {
  return (
    <HeroCardStyles href={heroServiceCards.url} target="_blank" rel="noopener noreferrer">
      <div className="herocard_subtitle">
        <h3>{heroServiceCards.subtitle}</h3>
      </div>
      <div className="hero-card-content">
        <div className="card-title">{heroServiceCards.title}</div>
        <img
          src={arrowIcon}
          alt="Learn more"
          className="hero-card-icon"
        />
      </div>
    </HeroCardStyles>
  );
}

export default HeroServiceCard;