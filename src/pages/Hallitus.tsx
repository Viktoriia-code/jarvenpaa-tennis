import '../App.css';
import JarvTennis from '../assets/images/Jats_logo_full.png';
import PageTitle from '../components/PageTitle';
import arrowIcon from "../assets/icons/big-arrow.svg";

const Hallitus = () => {
  return (
    <>
      <PageTitle title='Seura' image={JarvTennis} />
      <section>
        <div className="container flex gap-10 items-start">
          <a
            href="/seura/hallitus"
            className='flex border-[3px] border-black items-stretch justify-between gap-6 min-w-[280px]'
          >
            <h3 className='p-3'>Hallitus</h3>
            <div className='border-l-[3px] border-black p-3'>
              <img
                src={arrowIcon}
                alt="Learn more"
                className="w-6 h-6"
              />
            </div>
          </a>
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