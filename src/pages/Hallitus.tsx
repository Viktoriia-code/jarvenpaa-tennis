import JarvTennis from '../assets/images/Jats_logo_full.png';
import PageTitle from '../components/PageTitle';
import '../index.css';
import SideMenu from '../components/SideMenu';
import { SeuraMenuLinks } from '../utils/menuInfo';

const Hallitus = () => {
  return (
    <>
      <PageTitle title='Seura' image={JarvTennis} />
      <section>
        <div className="container flex gap-10 items-start">
          <SideMenu linksList={SeuraMenuLinks} />
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