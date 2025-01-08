import ServiceCard from '../../components/ServiceCard';
import JuniorValmennusForm from '../../components/JuniorValmennusForm';
import { JuniorGroups } from '../../utils/menuInfo';

const Juniorvalmennus = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='section_title'>Juniorivalmennus sisäkausi 2024-2025</h3>
      <div className='mx-auto'>
        <ServiceCard url="https://docs.google.com/spreadsheets/d/1YHNQtAfKdeQ8s5jbRpbnfQgRCzcrtHQ0g2xFz7wy078/edit?pli=1&gid=0#gid=0" title='Sisäkauden 2024-2025 ryhmäjaot' subtitle='Harjoitukset alkavat maanantaina 12.8.' />
      </div>
      <div className='notice_box'>
        <p className='font-semibold'>Harjoitukset alkavat Järvenpäässä ja Keravalla maanantaina 12.8. ja loppuvat sunnuntaina 22.6.2025!</p>
      </div>
      {JuniorGroups.map((group, index) => (
        <div key={index}>
          <h3 className='subtitle mb-2 font-text'>{group.title}</h3>
          <ul className='flex flex-col gap-3 ml-2'>
            {group.info.map((info, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="shrink-0 text-xl">◦</span>
                {info}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h3 className='section_title'>Juniorivalmennuksen hinnasto sisäkaudelle 2024-2025</h3>
      <div className='notice_box text-center'>
        <p>- Varaamme oikeuden hintojen muutoksiin 1.1.2025 alkaen.</p>
        <p>- Mikäli samasta ruokakunnasta on seuran valmennuksessa useampi kuin yksi pelaaja, myönnetään 10% perhealennus pienimmästä valmennusmaksusta!</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Minitennis pikkuiset (kausihinta):</h3>
        <p>55min/viikko: 450€ kausi (10.00€/kerta)</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Minitennis isommat (kausihinta):</h3>
        <p>55min/viikko: 540€ kausi (12.00€/tunti)</p>
        <p>2 x 55min/viikko: 990€ kausi (11.00€/tunti)</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Miditennis ja junioritennis 9-18 -vuotiaille (kausihinta):</h3>
        <p>1h/viikko: 720€ kausi (16.00€/tunti)</p>
        <p>2h/viikko: 1350€ kausi (15.00€/tunti)</p>
        <p>3h/viikko: 1890€ kausi (14.00€/tunti)</p>
      </div>

      <p>HUOM! Laskut lähetetään toiveenne mukaisesti sähköpostitse kymmenessä erässä, neljästi kaudessa, kahdesti kaudessa tai kerran kaudessa. Valmennusmaksuihin lisätään laskutuksen yhteydessä hallintokulu, mikä on 7€ per lähetettävä lasku. Lisäksi jokaiselta valmennukseen osallistuvilta edellytetään tennisseuran jäsenyyttä.</p>

      <JuniorValmennusForm />
    </div>
  )
}

export default Juniorvalmennus