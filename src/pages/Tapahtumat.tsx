import PageTitle from '../components/PageTitle';
import TennisCourt from '../assets/images/tennis_court.png';
import { Link } from 'react-router-dom';

const Tapahtumat = () => {
  return (
    <>
      <PageTitle title='Tapahtumat ja kurssit syksy 2024' image={TennisCourt} />
      <section>
        <div className="container flex flex-col gap-4">
          <p className="font-text text-lg leading-relaxed">Järvenpään Tennisseura tarjoaa tenniskursseja sekä aloittelijoille että jo pidempäänkin pelanneille Järvenpään Tenniskeskuksessa (Kuuselankatu 2). Järjestämme <span className="font-semibold">aikuisille alkeiskursseja, tehotreenejä ja tennisklinikoita. Kursseihin ja tapahtumiin osallistuminen ei edellytä JäTS:n jäsenyyttä!</span> Voit osallistua mukaan myös <Link to="/hallisarja/" className="link">hallisarjaan</Link>, mikä toimii sopivana muotona kilpailemisen aloittamiselle. </p>
          <p className="font-text text-lg leading-relaxed"><span className="font-semibold">Alkeiskurssit</span> (3h tai 4h) sopivat uusille pelaajille, jotka eivät ole aikaisemmin olleet tennivalmennustunnilla mukana. Kursseilla harjoitellaan perustekniikoita sekä käydään läpi tenniksen oleellisimmat säännöt. Sisältää myös lainamailan. Kurssin hinta 75€ (3 tuntia) tai 100€ (4 tuntia). Max. 6 osallistujaa.</p>
          <p className="font-text text-lg leading-relaxed"><span className="font-semibold">Tehotreenit</span> (1.5h) keskittyvät tietyn teeman ympärille (peruslyönnit, verkkopeli jne.) ja harjoituksissa tehdään paljon toistoja teemaan liittyen. Hinta 45€. Max. 4 osallistujaa.</p>
          <p className="font-text text-lg leading-relaxed"><span className="font-semibold">Tennisklinikoilla</span> (1.5h) keskitytään ennen kaikkea lyöntitekniikoiden tai taktiikan harjoitteluun. Klinikat sisältävät lyhyen luennon klinikan teemasta, mahdollisia videoanalyysejä suorituksistasi sekä paljon toistoja klinikan aiheeseen liittyen. Hinta 60€. Max. 4 osallistujaa ja kaksi valmentajaa.</p>
          <p className="font-text text-lg leading-relaxed">VAPAAT PAIKAT PÄIVITETTY 4.10. klo 13.00</p>
          <p className="font-semibold text-lg leading-relaxed">OSALLISTUJILLE LÄHETETÄÄN VAHVISTUSVIESTI TAPAHTUMAN TOTEUTUMISESTA TAPAHTUMAA EDELTÄVÄNÄ KESKIVIIKKONA.</p>
        </div>
      </section>
    </>
  )
}

export default Tapahtumat