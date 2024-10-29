import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import '../index.css';

const Saannot = [
  'Olen ajoissa valmennustunnilla',
  'Pukeudun tennisvarusteisiin ja otan mukaan juomapullon',
  'Yritän aina parhaani',
  'Kuuntelen valmentajaa ja toimin annettujen ohjeiden mukaan',
  'Kunnioitan valmentajaa ja muita pelaajia',
  'Otan vastuuta omasta toiminnastani ja käytöksestäni'
]

const Pelisaannot = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='section-title'>Pelisäännöt valmennustunnille</h3>
      <ul className='flex flex-col gap-3 ml-2'>
        {Saannot.map((saanto, index) => (
          <li key={index} className="font-text text-lg leading-relaxed flex gap-3 items-center">
            <HandThumbUpIcon width={25} className='text-darkGray' />
            {saanto}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pelisaannot