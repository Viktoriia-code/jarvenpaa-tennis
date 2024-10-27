import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import HeroServiceCard from '../components/HeroServiceCard';
import ValmennusImage from '../assets/images/valmennus.jpg';
import '../index.css';
import styled from 'styled-components';

const ValmennusStyles = styled.section`
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

const Valmennus = () => {
  return (
    <>
      <PageTitle title='Viikoittainen valmennus' image={ValmennusImage} />
      <ValmennusStyles>
        <div className="container flex gap-10 items-start">
          <div className='flex flex-col gap-[3px]'>
            <a href="/seura/hallitus" className='side_link'>Aikuisvalmennus sisäkausi 2024-2025</a>
            <a href="/seura/hallitus" className='side_link'>Aikuisvalmennus sisäkausi 2024-2025</a>
            <a href="/seura/hallitus" className='side_link'>Valmennusehdot sisäkaudelle 2024-2025</a>
            <a href="/seura/hallitus" className='side_link'>Pelisäännöt valmennustunnille</a>
          </div>
          <div className='flex items-center flex-col gap-4'>
            <HeroServiceCard url="" title='Sisäkauden 2024-2025 ryhmäjaot' subtitle='Harjoitukset alkavat maanantaina 12.8.' />
            <p className="font-text text-lg leading-relaxed">Järvenpään Tennisseura tarjoaa tennisopetusta sekä lapsille että aikuisille. Järjestämme viikoittaista pienryhmäopetusta sekä Järvenpäässä että Keravalla. Lisäksi tarjoamme yksityisopetusta, alkeiskursseja ja tehotreenejä. Lisätietoja saat JäTS:n valmennuspäällikkö Matti Käpylältä (puh. 0503052120 tai matti(at)jarvenpaantennisseura.fi).</p>
            <a
              href="/valmennus/aikuisvalmennus-sisakausi-2024-2025/"
              className='flex border-[3px] border-black items-stretch justify-between gap-6 min-w-[300px] p-3 text-lg font-semibold hover:bg-lightGreen'
            >
              Lisätietoa aikuisvalmennuksesta
            </a>
            <Link
              to="/valmennus/juniorivalmennus-sisakausi-2024-2025/"
              className='flex border-[3px] border-black items-stretch justify-between gap-6 min-w-[300px] p-3 text-lg font-semibold hover:text-accent'
            >
              Lisätietoa juniorivalmennuksesta
            </Link>
          </div>
        </div>
      </ValmennusStyles>
    </>
  )
}

export default Valmennus