import SectionTitle from "../SectionTitle";
import JarvTennis from '../../assets/images/Partners/Jarvenpaan_tenniskeskus_logo.png';
import Kets from '../../assets/images/Partners/KETS_logo.jpeg';
import Intersport from '../../assets/images/Partners/Intersport_logo.png';
import KeravaTennis from '../../assets/images/Partners/Keravan_tenniskeskus_logo.png';
import Netvisor from '../../assets/images/Partners/Netvisor_logo.png';


const Partners: React.FC = () => {
  return (
    <section className='bg-white'>
      <div className="container">
        <div className="flex justify-center">
          <SectionTitle title="Kumppanimme" />
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-14 items-center">
          <img src={JarvTennis} alt="" className="w-full h-auto max-w-[30%]" />
          <img src={Kets} alt="" className="w-full h-auto max-w-[30%]" />
          <img src={Intersport} alt="" className="w-full h-auto max-w-[30%]" />
          <img src={KeravaTennis} alt="" className="w-full h-auto max-w-[30%]" />
          <img src={Netvisor} alt="" className="w-full h-auto max-w-[30%]" />
        </div>
      </div>
    </section>
  )
}

export default Partners