import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ValmennusMenuStyles = styled.div`
  .side_link {
    background-color: #e4e5e5;
    min-width: 300px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    transition: all 300ms ease-in-out;
    display: flex;
  }
  .side_link:hover {
    background-color: #c8c9c9;
  }
`

const ValmennusMenu = () => {
  return (
    <ValmennusMenuStyles className='flex flex-col gap-[3px] max-w-80'>
      <Link to="/valmennus/aikuisvalmennus-sisakausi-2024-2025/" className='side_link'>Aikuisvalmennus sisäkausi 2024-2025</Link>
      <Link to="/valmennus/juniorivalmennus-sisakausi-2024-2025/" className='side_link'>Aikuisvalmennus sisäkausi 2024-2025</Link>
      <Link to="/valmennus/valmennusehdot-sisakaudelle-2024-2025/" className='side_link'>Valmennusehdot sisäkaudelle 2024-2025</Link>
      <Link to="/valmennus/pelisaannot-valmennustunnille/" className='side_link'>Pelisäännöt valmennustunnille</Link>
    </ValmennusMenuStyles>
  )
}

export default ValmennusMenu