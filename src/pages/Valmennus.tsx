import { Link } from 'react-router-dom';
import HeroServiceCard from '../components/HeroServiceCard';
import '../index.css';

const Valmennus = () => {
  return (
    <div className='flex items-center flex-col gap-4'>
      <HeroServiceCard url="https://docs.google.com/spreadsheets/d/1YHNQtAfKdeQ8s5jbRpbnfQgRCzcrtHQ0g2xFz7wy078/edit?pli=1&gid=0#gid=0" title='Sisäkauden 2024-2025 ryhmäjaot' subtitle='Harjoitukset alkavat maanantaina 12.8.' />
      <p className="font-text text-lg leading-relaxed">Järvenpään Tennisseura tarjoaa tennisopetusta sekä lapsille että aikuisille. Järjestämme viikoittaista pienryhmäopetusta sekä Järvenpäässä että Keravalla. Lisäksi tarjoamme yksityisopetusta, alkeiskursseja ja tehotreenejä. Lisätietoja saat JäTS:n valmennuspäällikkö Matti Käpylältä (puh. 0503052120 tai matti(at)jarvenpaantennisseura.fi).</p>
      <a
        href="/valmennus/aikuisvalmennus-sisakausi-2024-2025/"
        className='flex border-[3px] border-black items-stretch justify-between gap-6 min-w-[300px] p-3 text-lg font-semibold bg-[#e4e5e5] hover:bg-[#c8c9c9] transition-all duration-300 ease-in-out'
      >
        Lisätietoa aikuisvalmennuksesta
      </a>
      <Link
        to="/valmennus/juniorivalmennus-sisakausi-2024-2025/"
        className='flex border-[3px] border-black items-stretch justify-between gap-6 min-w-[300px] p-3 text-lg font-semibold bg-[#e4e5e5] hover:bg-[#c8c9c9] transition-all duration-300 ease-in-out'
      >
        Lisätietoa juniorivalmennuksesta
      </Link>
    </div>
  )
}

export default Valmennus