import { Link } from 'react-router-dom';
import '../../index.css';

const ValmennusEhdot = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h3 className='section-title'>Valmennusehdot sisäkaudelle 2024-2025</h3>
      <div>
        <h3 className='subtitle mb-2 font-text'>Valmennuskauden pituus</h3>
        <p>Sisäkausi alkaa sekä Järvenpäässä ja Keravalla maanantaina 12.8.2024 ja loppuu sunnuntaina 22.6.2025.</p>
      </div>
      <div className='bg-grayBg text-lg font-medium py-7 px-9 flex flex-col gap-3 border-l-4 border-black'>
        <h3 className='subtitle mb-2 font-text'>Valmennusta ei järjestetä seuraavina ajankohtina:</h3>
        <ol className='list-decimal pl-5'>
          <li>Syysloma ma 14.10.2024 – su 20.10.2024 (aikuisvalmennus pyörii normaalisti, aikataulumuutokset mahdollisia!)</li>
          <li>Itsenäisyyspäivä pe 6.12.2024</li>
          <li>Joululoma la 21.12.2024 – ma 6.1.2025</li>
          <li>Talviloma ma 17.2.2025 – su 23.2.2025 (vk 8) (aikuisvalmennus pyörii normaalisti, aikataulumuutokset mahdollisia!)</li>
          <li>Pääsiäistauko pe 18.4.2025 – ma 21.4.2025</li>
          <li>Vappu to 1.5.2025</li>
          <li>Helatorstai 29.5.2025</li>
          <li>Juhannusaatto pe 20.6.2025</li>
        </ol>
      </div>

      <div>
        <h3 className='subtitle mb-2'>Tiedottaminen</h3>
        <p>Seuran nettisivut toimivat ensisijaisena tiedotusvälineenä. Äkillisissä ja henkilökohtaisessa kommunikoinnissa käytämme sähköpostiviestintää sekä tekstiviesti-/WhatsApp-viestintää. Valmentajien yhteystiedot löytyvät <Link to="/yhteystiedot/" className='link'>täältä</Link>.</p>
      </div>

    </section>
  )
}

export default ValmennusEhdot