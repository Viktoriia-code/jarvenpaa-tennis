import JarvTennis from '../assets/images/Jats_logo_full.png';
import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';
import '../index.css';

const Hallitus = () => {
  return (
    <>
      <PageTitle title='Seura' image={JarvTennis} />
      <section>
        <div className="container flex gap-10 items-start">
          <aside className='flex flex-col gap-1 max-w-80'>
            <Link to="/seura" className='side_link'>
              <h3 className='p-3'>Meidän historia</h3>
            </Link>
            <Link to="/seura/hallitus" className='side_link'>
              <h3 className='p-3'>Hallitus</h3>
            </Link>
          </aside>
          <div className='flex flex-col gap-4'>
            <h1 className='text-darkBlue'>Hallitus 2024-2025</h1>
            <p className="font-text text-lg leading-relaxed">Mathias Kalliokoski (puheenjohtaja)</p>

            <p className="font-text text-lg leading-relaxed">Sampo Haapaniemi</p>

            <p className="font-text text-lg leading-relaxed">Raija Komu</p>

            <p className="font-text text-lg leading-relaxed">Tuomo Saukkonen</p>

            <p className="font-text text-lg leading-relaxed">Virpi Kapanen</p>

            <p className="font-text text-lg leading-relaxed">Mikko Kolehmainen</p>

            <p className="font-text text-lg leading-relaxed">Hanne-Lotte Jylhä</p>
              
          </div>
        </div>
      </section>
    </>
  )
}

export default Hallitus