import HeroServiceCard from '../components/HeroServiceCard';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import '../index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Harjoitukset = [
  'Säännölliset harjoitukset 1-3 krt viikossa',
  'Harjoitusten kesto 1 tunti',
  'Ryhmäkoko 3 tai 4 pelaajaa / kenttä / valmentaja',
  'Kuuden pelaajan ryhmät (vain uusille ja aloitteleville pelaajille) arkisin klo 17.00-21.00',
  'Yksityis- ja paritunteja (1 tai 2 pelaajaa) voidaan järjestää säännöllisesti arkisin klo 7.00-16.00 välisenä aikana tai satunnaisesti viikonloppuisin (la klo 10.00-15.00 tai su klo 14.00-19.00)',
  '10% alennus arkipäivien 3-4 pelaajan päiväryhmistä (klo 7:00-15:00)'
];

const Aikuisvalmennus = () => {
  const [continueWithSameGroup, setContinueWithSameGroup] = useState('');
  const [place, setPlace] = useState('');

  // Handle changes in the select dropdown
  const handleGroupSelectionChange = (event) => {
    setContinueWithSameGroup(event.target.value);
  };

  const handlePlace = (event) => {
    setPlace(event.target.value);
  };
  
  return (
    <>
      <h3 className='section-title'>Aikuisvalmennus sisäkausi 2024-2025</h3>
      <div className='mx-auto'>
        <HeroServiceCard url="https://docs.google.com/spreadsheets/d/1YHNQtAfKdeQ8s5jbRpbnfQgRCzcrtHQ0g2xFz7wy078/edit?pli=1&gid=0#gid=0" title='Sisäkauden 2024-2025 ryhmäjaot' subtitle='Harjoitukset alkavat maanantaina 12.8.' />
      </div>
      <p className="font-text text-lg leading-relaxed">Aikuisvalmennus on tarkoitettu kaikille tenniksestä kiinnostuneille aikuisille. Aikuisvalmennuksen valmennusryhmät kootaan pelaajien tason mukaisesti: pelaajia on mukana vasta-alkajista kilpaileviin pelaajiin.</p>
      
      <h4 className='subtitle'>RYHMÄHARJOITUKSET:</h4>
      <ul className='flex flex-col gap-3 ml-2'>
        {Harjoitukset.map((text, index) => (
          <li key={index} className="font-text text-lg leading-relaxed flex gap-3 items-start">
            <HandThumbUpIcon width={25} className='text-gray shrink-0' />
            {text}
          </li>
        ))}
      </ul>
      
      <h4 className='subtitle'>HARJOITUSPAIKKA:</h4>
      <p className="font-text text-lg leading-relaxed">Valmennusta järjestetään Järvenpään Tenniskeskuksen (Kuuselankatu 2, Järvenpää) lisäksi myös Keravan Tenniskeskuksessa (Metsolantie 5, Kerava) aina tiistaisin ja torstaisin. Harjoituksia saatetaan järjestää ulkokentillä (Järvenpään Tenniskeskuksen tekonurmikentä ja Keravalla Lapilan massakentät) mahdollisuuksien mukaan alkusyksystä ja keväällä.</p>

      <h3 className='section-title'>Aikuisvalmennuksen hinnasto sisäkaudelle 2024-2025</h3>
      <p className="font-text text-lg leading-relaxed">Sisäkausi alkaa Järvenpäässä ja Keravalla maanantaina 12.8.2024. Sisäkausi loppuu sunnuntaina 22.6.2025 (45 viikkoa). Valmennusmaksuihin lisätään laskutuksen yhteydessä hallintokulu, mikä on 7€ per lähetettävä lasku. Laskut lähetetään sähköpostitse pelaajan toiveen mukaisesti kymmenessä erässä, neljästi kaudessa, kahdesti kaudessa tai kerran kaudessa. Valmennukseen osallistuvilta edellytetään myös tennisseuran jäsenyyttä. Jäsenmaksut laskutetaan vasta vuonna 2025, mutta uudet pelaajat saavat halutessaan maksaa syksyllä myös <Link className='link' to="/liity-jaseneksi/">vuoden 2024 jäsenmaksun</Link>.</p>
      <p className="font-text text-lg leading-relaxed">Varaamme oikeuden hintojen muutoksiin 1.1.2025 alkaen.</p>

      <div className='bg-grayBg text-lg font-medium py-7 px-9 text-center flex flex-col gap-3 border-l-4 border-black'>
        <p>- Mikäli samasta ruokakunnasta on seuran valmennuksessa useampi kuin yksi pelaaja, myönnetään 10% perhealennus pienimmästä valmennusmaksusta!</p>
        <p>- 10% alennus arkipäivien 3-4 pelaajan päiväryhmistä (klo 7.00-15:00)</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Aikuisvalmennus kuuden hengen ryhmässä:</h3>
        <p className="font-text text-lg leading-relaxed">- Kuuden pelaajan ryhmät (vain uusille ja aloitteleville pelaajille) 19€/tunti eli koko sisäkaudelta 855€ + hallintokulu (laskutuskertojen mukaan) + jäsenmaksu</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Aikuisvalmennus neljän hengen ryhmässä:</h3>
        <p className="font-text text-lg leading-relaxed">- 25€/tunti/pelaaja (kausimaksu yhdellä viikkotunnilla ilman alennuksia 1125€ + hallintokulu (laskutuskertojen mukaan) + jäsenmaksu</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Aikuisvalmennus kolmen hengen ryhmässä:</h3>
        <p className="font-text text-lg leading-relaxed">- 30€/tunti/pelaaja</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Parivalmennus kahden hengen ryhmässä:</h3>
        <p className="font-text text-lg leading-relaxed">- 40€/tunti/pelaaja</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Yksityisvalmennus kerran viikossa:</h3>
        <p className="font-text text-lg leading-relaxed">- 70€/tunti/pelaaja</p>
      </div>
      <section className='bg-grayBg flex flex-col py-7 px-9 max-w-[800px]'>
        <h3 className='section-title mb-4 text-center'>Aikuisvalmennuslomake</h3>
        <span className='flex justify-end'>*Vaaditaan</span>
        <form className='w-full flex flex-col gap-6'>
          <label htmlFor="name" className="font-text text-lg leading-relaxed flex flex-col">Nimi *
            <input id="name"
              type="text"
              name="name"
              //value={passwordData.confirmNewPassword}
              //onChange={handlePasswordChange}
              placeholder="Anna nimesi"
              className="form_input" />
          </label>
          <label htmlFor="address" className="font-text text-lg leading-relaxed flex flex-col">Osoite, postinumero ja kaupunki *
            <input id="address"
              type="text"
              name="address"
              //value={passwordData.confirmNewPassword}
              //onChange={handlePasswordChange}
              placeholder="Anna osoitteesi"
              className="form_input" />
          </label>
          <label htmlFor="email" className="font-text text-lg leading-relaxed flex flex-col">Sähköposti (mm. laskutusta varten ja yhteydenpitoa varten) *
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
          <label htmlFor="year" className="font-text text-lg leading-relaxed flex flex-col">Syntymäaika (Tennisliiton rekisteriä varten)
            <input id="year"
              type="text"
              name="year"
              //value={passwordData.confirmNewPassword}
              //onChange={handlePasswordChange}
              placeholder="Anna syntymävuosi"
              className="form_input" />
          </label>

          <fieldset>
            <legend className='font-text text-lg leading-relaxed'>Haluaisin jatkaa samassa ryhmässä kuin viime kaudella (voit jättää alempana olevia kohtia väliin, jos vastasit "Kyllä"):</legend>

            <select 
              value={continueWithSameGroup} 
              onChange={handleGroupSelectionChange} 
              className='form_input w-full text-lg'
            >
              <option value="">Vatitse...</option>
              <option value="yes">Kyllä</option>
              <option value="no">Ei</option>
              <option value="new">Olen uusi pelaaja</option>
              <option value="indifferent">Ei väliä</option>
            </select>
          </fieldset>

          <fieldset className="font-text text-lg leading-relaxed">
            <legend className='mb-2'>Monessako erässä haluat maksaa valmennusmaksun? (kts. Valmennusehdot sisäkausi 2023-2024)</legend>
            <div className='ml-4 flex flex-col gap-3'>
              <label className="flex items-center select-none cursor-pointer">
                <input type="radio" name="payment-plan" className="w-4 h-4 mr-2"/>
                Kymmenessä erässä
              </label>
              <label className="flex items-center select-none cursor-pointer">
                <input type="radio" name="payment-plan" className="w-4 h-4 mr-2"/>
                Neljässä erässä
              </label>
              <label className="flex items-center select-none cursor-pointer">
                <input type="radio" name="payment-plan" className="w-4 h-4 mr-2"/>
                Kahdessa erässä
              </label>
              <label className="flex items-center select-none cursor-pointer">
                <input type="radio" name="payment-plan" className="w-4 h-4 mr-2"/>
                Yhdessä erässä
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className='font-text text-lg leading-relaxed'>Missä haluaisit osallistua harjoituksiin?</legend>

            <select 
              value={place} 
              onChange={handlePlace} 
              className='form_input w-full text-lg'
            >
              <option value="">Vatitse...</option>
              <option value="Jarvenpaa">Järvenpäässä</option>
              <option value="Kerava">Keravalla</option>
              <option value="Both">Kumpikin on ok</option>
            </select>
          </fieldset>

          <button className='main-btn mx-auto'>Lähetä lomake</button>
        </form>
      </section>
    </>
  )
}

export default Aikuisvalmennus