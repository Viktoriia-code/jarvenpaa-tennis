import { ServiceCards } from "../utils/menuInfo";
import arrowIcon from "../assets/icons/big-arrow.svg";
import styled from 'styled-components';

const HeroCardStyles = styled.a`
  border: 3px solid #7D7D7D;
  display: flex;
  flex-direction: column;
  .herocard_subtitle {
    border-bottom: 3px solid #7D7D7D;
    background-color: var(--gray-bg);
    display: flex;
    align-self: center;
    width: 100%;
  }
  .card-title {
    color: #0A4E91;
    border-right: 3px solid #7D7D7D;
    display: flex;
    align-items: center;
    max-width: 500px;
  }
  .hero-card-content {
    display: flex;
  }
`;

export interface ServiceCards {
  url: string;
  title: string;
  subtitle: string;
}

function ServiceCard(ServiceCards: ServiceCards) {
  return (
    <HeroCardStyles href={ServiceCards.url} target="_blank" rel="noopener noreferrer">
      <div className="herocard_subtitle px-3 py-2 md:py-3 md:px-6">
        <h3>{ServiceCards.subtitle}</h3>
      </div>
      <div className="hero-card-content">
        <div className="card_title card-title p-3 md:py-5 md:px-6">{ServiceCards.title}</div>
        <img
          src={arrowIcon}
          alt="Learn more"
          className="hero-card-icon w-6 md:w-10 my-2 mx-3 md:my-3 md:mx-5"
        />
      </div>
    </HeroCardStyles>
  );
}

export default ServiceCard;