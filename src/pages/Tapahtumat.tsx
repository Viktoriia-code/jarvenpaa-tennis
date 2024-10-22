import PageTitle from '../components/PageTitle';
import TennisCourt from '../assets/images/tennis_court.png';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import '../index.css';
import styled from 'styled-components';

const TapahtumatFormStyles = styled.section`
  .form_input {
    padding: 0.5rem;
    min-width: 62%;
    border: 1px solid #d1d5db;
  }
`

const Tapahtumat = () => {
  return (
    <>
      <PageTitle title='Tapahtumat ja kurssit syksy 2024' image={TennisCourt} />
      <section>
        <div className="container flex flex-col gap-4 px-12">
          <p className="font-text text-lg leading-relaxed">Järvenpään Tennisseura tarjoaa tenniskursseja sekä aloittelijoille että jo pidempäänkin pelanneille Järvenpään Tenniskeskuksessa (Kuuselankatu 2). Järjestämme <span className="font-semibold">aikuisille alkeiskursseja, tehotreenejä ja tennisklinikoita. Kursseihin ja tapahtumiin osallistuminen ei edellytä JäTS:n jäsenyyttä!</span> Voit osallistua mukaan myös <Link to="/hallisarja/" className="link">hallisarjaan</Link>, mikä toimii sopivana muotona kilpailemisen aloittamiselle. </p>
          <p className="font-text text-lg leading-relaxed"><span className="font-semibold">Alkeiskurssit</span> (3h tai 4h) sopivat uusille pelaajille, jotka eivät ole aikaisemmin olleet tennivalmennustunnilla mukana. Kursseilla harjoitellaan perustekniikoita sekä käydään läpi tenniksen oleellisimmat säännöt. Sisältää myös lainamailan. Kurssin hinta 75€ (3 tuntia) tai 100€ (4 tuntia). Max. 6 osallistujaa.</p>
          <p className="font-text text-lg leading-relaxed"><span className="font-semibold">Tehotreenit</span> (1.5h) keskittyvät tietyn teeman ympärille (peruslyönnit, verkkopeli jne.) ja harjoituksissa tehdään paljon toistoja teemaan liittyen. Hinta 45€. Max. 4 osallistujaa.</p>
          <p className="font-text text-lg leading-relaxed"><span className="font-semibold">Tennisklinikoilla</span> (1.5h) keskitytään ennen kaikkea lyöntitekniikoiden tai taktiikan harjoitteluun. Klinikat sisältävät lyhyen luennon klinikan teemasta, mahdollisia videoanalyysejä suorituksistasi sekä paljon toistoja klinikan aiheeseen liittyen. Hinta 60€. Max. 4 osallistujaa ja kaksi valmentajaa.</p>
        </div>
      </section>
      <section className='bg-grayBg'>
        <div className='container_small'>
          <div className="flex justify-center">
            <SectionTitle title="Tapahtumat" />
          </div>
          <p className="subtitle mb-4 font-text">VAPAAT PAIKAT PÄIVITETTY 4.10. klo 13.00</p>
          <p className="font-text text-lg leading-relaxed mb-6">OSALLISTUJILLE LÄHETETÄÄN VAHVISTUSVIESTI TAPAHTUMAN TOTEUTUMISESTA TAPAHTUMAA EDELTÄVÄNÄ KESKIVIIKKONA.</p>
          
          <TapahtumatFormStyles className='flex flex-col gap-3'>
            <span className='flex justify-end'>*Vaaditaan</span>
            <label htmlFor="name" className="font-text text-lg leading-relaxed flex items-center justify-between">Osallistujan nimi
              <input id="name"
                type="text"
                name="name"
                //value={passwordData.confirmNewPassword}
                //onChange={handlePasswordChange}
                placeholder="Anna nimesi"
                className="form_input" />
            </label>

            <label htmlFor="email" className="font-text text-lg leading-relaxed flex items-center justify-between">Osallistujan sähköpostiosoite
              <input id="email"
                type="email"
                name="email"
                //value={passwordData.confirmNewPassword}
                //onChange={handlePasswordChange}
                placeholder="Anna sähköpostiosoitteesi"
                className="form_input" />
            </label>

            <label htmlFor="address" className="font-text text-lg leading-relaxed flex items-center justify-between">Osoitetiedot laskutusta varten (osoite, postinumero, kaupunki)*
              <input id="address"
                type="text"
                name="address"
                //value={passwordData.confirmNewPassword}
                //onChange={handlePasswordChange}
                placeholder="Anna osoitteesi"
                className="form_input" />
            </label>

            <label htmlFor="phone" className="font-text text-lg leading-relaxed flex items-center justify-between">Osallistujan puhelinnumero*
              <input id="phone"
                type="phone"
                name="phone"
                //value={passwordData.confirmNewPassword}
                //onChange={handlePasswordChange}
                placeholder="Anna puhelinnumerosi"
                className="form_input" />
            </label>

            <label htmlFor="level" className="font-text text-lg leading-relaxed flex items-center justify-between">Lyhyt kuvaus pelitasostasi (jos et ole aiemmin osallistunut JäTS:n kursseille)
              <input id="level"
                type="text"
                name="level"
                //value={passwordData.confirmNewPassword}
                //onChange={handlePasswordChange}
                placeholder="Anna pelitasosi"
                className="form_input" />
            </label>

            <div className="font-text text-lg leading-relaxed flex items-start justify-between mt-2">
              <legend>Mille kurssille haluat ilmoittautua?</legend>
              <div className='w-[62%] flex flex-col gap-3'>
                <div>
                  <input id="option-1" type="checkbox" name="option-1" className="w-4 h-4 mr-2"/>
                  <label htmlFor='option-1' className='select-none'>AIKUISTEN ALKEISKURSSI la 9.11. ja 23.11. klo 10.00-11.30 (TÄYNNÄ)</label>
                </div>
                <div>
                  <input id="option-2" type="checkbox" name="option-2" className="w-4 h-4 mr-2"/>
                  <label htmlFor='option-2' className='select-none'>Verkkopelin tehotreeni la 9.11. klo 11.30-13.00 (1 PAIKKA VAPAANA)</label>
                </div>
                <div>
                  <input id="option-3" type="checkbox" name="option-3" className="w-4 h-4 mr-2"/>
                  <label htmlFor='option-3' className='select-none'>Syötön ja palautuksen tehotreeni la 23.11. klo 11.30-13.00 (3 PAIKKAA VAPAANA)</label>
                </div>
                <div>
                  <input id="option-4" type="checkbox" name="option-4" className="w-4 h-4 mr-2"/>
                  <label htmlFor='option-4' className='select-none'>Peruslyöntien tehotreeni la 14.12. klo 10.00-11.30 (TÄYNNÄ)</label>
                </div>
                <div>
                  <input id="option-5" type="checkbox" name="option-5" className="w-4 h-4 mr-2"/>
                  <label htmlFor='option-5' className='select-none'>Syötön ja palautuksen tehotreeni la 14.12. klo 11.30-13.00 (2 PAIKKAA VAPAANA)</label>
                </div>
                <button className='main-btn'>Lähetä lomake</button>
              </div>
            </div>

          </TapahtumatFormStyles>
        </div>
      </section>
    </>
  )
}

export default Tapahtumat