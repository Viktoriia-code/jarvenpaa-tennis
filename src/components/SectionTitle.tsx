import styled from 'styled-components';

const TitleStyles = styled.div`
    display: flex;
    overflow: hidden;
    column-gap: 40px;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    height: 84px;
    background: var(--blue-court);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 45px;
    white-space: nowrap;
  h2 {
    color: white;
  }
  .title-doubler {
    font-family: 'Montserrat';
    font-size: 40px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    text-transform: uppercase;
    color: transparent !important;
    -webkit-text-stroke: 1px white;
  }

`

export interface TitleProp {
  title: string;
}

function SectionTitle({ title }: TitleProp) {
  return (
    <TitleStyles>
      <span className='title-doubler'>{title}</span>
      <span className='title-doubler'>{title}</span>
      <span className='title-doubler'>{title}</span>
      <h2>{title}</h2>
      <span className='title-doubler'>{title}</span>
      <span className='title-doubler'>{title}</span>
      <span className='title-doubler'>{title}</span>
    </TitleStyles>
  );
}

export default SectionTitle;