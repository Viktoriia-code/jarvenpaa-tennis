import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import '../index.css';
import styled from 'styled-components';

const FormStyles = styled.div`
  .form_input {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
  }
`

const LiityJaseneksi = () => {
  return (
    <>
      <PageTitle title='Liity jäseneksi' />
      <section>
        <div className='container flex flex-col gap-4 px-12'>
          <p className='font-text text-lg leading-relaxed'>Kaikille valmennustoimintaan osallistuville lähetetään vuosittain seuran jäsenmaksu, koska seuran järjestämä valmennus ja ohjattu tennistoiminta on hinnoiteltu jäsenten eduksi. Valmennuksessa mukana olevien ei siis tarvitsee erikseen täyttää alla olevaa lomaketta ja liittyä jäseneksi.</p>
          <p className='font-text text-lg leading-relaxed'>Liity jäseneksi (vuonna 2024 aikuiset 40 € ja juniorit 20 € / vuosi). Jäsenmaksusta lähetetään lasku sähköpostitse ja jäsenyys astuu voimaan kun maksu on suoritettu. Jäsenmaksun tason määrittää Suomen Tennisliitolle maksettava tilitysosuus, jolla katetaan liiton toimintaa.</p>
          <p className='subtitle mb-4 font-text'>Laita sähköpostia osoitteeseen  matti(at)jarvenpaantennisseura.fi tai saarioraija(at)gmail.com, jos haluat erota seurasta tai jäsentietosi muuttuvat!</p>
        </div>
      </section>
      <section className='bg-grayBg'>
        <div className='container'>
          <div className="flex justify-center">
            <SectionTitle title="Jäsentietolomake" />
          </div>
          <div className='flex gap-16 justify-between flex-col-reverse md:flex-row'>
            <FormStyles className='w-full flex flex-col gap-6'>
              <span className='flex justify-end'>*Vaaditaan</span>
              <label htmlFor="name" className="font-text text-lg leading-relaxed flex flex-col">Nimi *
                <input id="name"
                  type="text"
                  name="name"
                  //value={passwordData.confirmNewPassword}
                  //onChange={handlePasswordChange}
                  placeholder="Anna nimesi"
                  className="form_input" />
              </label>
              <label htmlFor="email" className="font-text text-lg leading-relaxed flex flex-col">Sähköpostiosoite *
                <input id="email"
                  type="email"
                  name="email"
                  //value={passwordData.confirmNewPassword}
                  //onChange={handlePasswordChange}
                  placeholder="Anna sähköpostiosoitteesi"
                  className="form_input" />
              </label>
              <label htmlFor="phone" className="font-text text-lg leading-relaxed flex flex-col">Puhelinnumero *
                <input id="phone"
                  type="phone"
                  name="phone"
                  //value={passwordData.confirmNewPassword}
                  //onChange={handlePasswordChange}
                  placeholder="Anna puhelinnumerosi"
                  className="form_input" />
              </label>
              <label htmlFor="year" className="font-text text-lg leading-relaxed flex flex-col">Syntymävuosi *
                <input id="year"
                  type="text"
                  name="year"
                  //value={passwordData.confirmNewPassword}
                  //onChange={handlePasswordChange}
                  placeholder="Anna syntymävuosi"
                  className="form_input" />
              </label>
              <label htmlFor="address" className="font-text text-lg leading-relaxed flex flex-col">Osoitetiedot *
                <input id="address"
                  type="text"
                  name="address"
                  //value={passwordData.confirmNewPassword}
                  //onChange={handlePasswordChange}
                  placeholder="Anna osoitteesi"
                  className="form_input" />
              </label>
              <div className="font-text text-lg leading-relaxed flex items-center gap-24 mt-2">
                <legend>Liityn jäseneksi</legend>
                <div className='flex items-center gap-3'>
                  <input id="option-1" type="checkbox" name="option-1" className="w-4 h-4 mr-2"/>
                  <label htmlFor='option-1' className='select-none'>Kyllä</label>
                </div>
              </div>
              <button className='main-btn'>Lähetä lomake</button>
            </FormStyles>
            <div className='w-full flex flex-col gap-3'>
              <h2 className='text-darkBlue text-center mb-4'>Miksi JäTS:n jäseneksi kannattaa liittyä?</h2>
              <p className="font-text text-lg leading-relaxed">- Yksityistunnit ovat seuran jäsenille edullisempia kuin ei-jäsenille</p>
              <p className="font-text text-lg leading-relaxed">- Saat alennusta ulkokauden kenttävarauksista Järvenpään Tenniskeskuksessa</p>
              <p className="font-text text-lg leading-relaxed">- Seuran jäsenet saavat 10%:n alennuksen tennisverkkokauppa www.tenniswarehouse-europe.comista tai 5%:n alennuksen https://global.tennis-point.comista. Etukoodit voit saada Matilta (matti (at) jarvenpaantennisseura.fi)</p>
              <p className="font-text text-lg leading-relaxed">- Seuran jäsenet saavat myös alennusta Järvenpään Intersportin tennisvarusteista</p>
              <p className="font-text text-lg leading-relaxed">- Jäsenillä on mahdollisuus ostaa lippuja tennismaaotteluihin ennakkoon ja alennettuun hintaan</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LiityJaseneksi