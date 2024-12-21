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
      <div className='notice_box'>
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

      <div>
        <h3 className='subtitle mb-2'>Valmennuspaikka</h3>
        <p>Opetuspaikkoina toimivat Järvenpään Tenniskeskus osoitteessa Kuuselankatu 2 sekä Keravan Tenniskeskus osoitteessa Metsolantie 5. </p>
      </div>

      <div>
        <h3 className='subtitle mb-2'>Järvenpään Tennisseura ry:n vastuun rajoitus</h3>
        <p>- Valmennettava vastaa aina itse omasta tapaturmavakuutuksestaan</p>
        <p>- Seura ei vastaa valmennuksessa sattuneista tapaturmista</p>
        <p>- Järvenpään Tennisseura ry varaa oikeuden rajoittaa valmennukseen osallistuvien lukumäärää valmennuskauden aikana</p>
        <p>- Järvenpään Tennisseura ry ei vastaa valmennuksen yhteydessä tai aikana mahdollisesti rikkoutuvista harrastusvälineistä</p>
      </div>

      <div>
        <h3 className='subtitle mb-2'>Valmennusmaksu ja sen perintä</h3>
        <p>Koko kauden valmennusmaksu peritään joko yhdessä erässä (koko sisäkausi kerralla), kahdessa erässä (kerran syksyllä ja kerran keväällä), neljässä erässä (kahdesti syksyllä ja kahdesti keväällä) tai kymmenessä erässä valmennettavan toiveen mukaan.</p>
      </div>

      <p>Valmennusmaksut laskutetaan sähköpostitse. Epassi ja Edenred ovat myös maksuvaihtoehtoina! <span className='font-semibold'>PYYDÄMME, ETTÄ LÄHETTÄISITTE KUVAKAAPPAUKSEN MAKSUSUORITUKSESTA OSOITTEESEEN <a href="mailto:laskutus@jarvenpaantennisseura.fi" className='link'>laskutus@jarvenpaantennisseura.fi</a> ja kopiona osoitteeseen matti@jarvenpaantennisseura.fi, niin helpotat maksusuoritusten seurantaa huomattavasti.</span></p>

      <div className='notice_box'>
        <span>
          <a 
            href="https://myedenred.fi/affiliate-payment/025128fc-92c1-4acd-abf6-d847e8a6b24f"
            className='link'
            target="_blank" 
            rel="noopener noreferrer">
              Suora Edenred Pay -maksulinkki
          </a>
          {' '}(avautuu uuteen välilehteen)
        </span>
      </div>

      <p>Valmennusmaksu suoritetaan kokonaan huolimatta siitä, montako kertaa valmennettava on osallistunut kauden aikana harjoituksiin 45 viikkoa kestävän sisäkauden aikana. Arkipäivien päiväaikojen (klo 7.00-15.00) ryhmätunneista annetaan 10%:n alennus.</p>

      <p>Vain yli kuukauden kestävä lääkärintodistuksella osoitettu poissaolo otetaan huomioon valmennusmaksuissa. Tällöin on sairaudesta kuitenkin ilmoitettava valmentajalle mahdollisimman aikaisin. Poissaolot voimme korvata vain lääkärintodistusta vastaan. </p>

      <p>Lopettaminen kesken kauden on mahdollista, mutta tällöin maksuvelvollisuus jatkuu käynnissä olevan laskutuskauden loppuun. Kahdessa erässä laskutettava ei esimerkiksi saa syyskaudesta palautusta, jos hän ilmoittaa lopettamisestaan lokakuussa. Force majeuren eli ylivoimaisen esteen sattuessa laskutusta jatketaan tapahtumahetkestä neljän viikon ajan valmennustoiminnan kulujen kattamiseksi ja jatkon mahdollistamiseksi. <span className='font-semibold'>Force majeuren eli ylivoimaisen esteen sattuessa laskutusta jatketaan tapahtumahetkestä neljän viikon ajan valmennustoiminnan kulujen kattamiseksi ja jatkon mahdollistamiseksi.</span></p>

      <p>Kesken kauden mukaan liittyvät uudet harrastajat voivat osallistua harjoituksiin kerran ennen sitoutumista, jos seuran valmennuspäällikkö pystyy tarjoamaan heille paikkaa käynnissä olevista harjoitusryhmistä.</p>

      <p className='font-semibold'>Varaamme oikeuden hintojen muutoksiin 1.1.2025 alkaen.</p>

      <p>Valmennusmaksu kattaa valmentajien palkkakulut, kenttä- ja hallivuokrat, valmennuksen tarvikekulut (pallot, verkot ja oheistarvikkeet) sekä hallinnollisia kuluja.</p>

      <p>Joissain tilanteissa laskuja on saamamme palautteen mukaan ohjautunut asiakkaan roskapostiin. Valitettavasti emme pysty tekemään turvamäärityksiä asiakkaiden sähköpostitileihin. Pyydämmekin ystävällisesti Teitä määrittämään sähköpostinne turva-asetukset siten, että hyväksytte kyseisen osoitteen luotettavaksi. Kiitämme yhteistyöstänne ja pahoittelemme mahdollista ylimääräistä vaivaa.</p>
      
      <div>
        <h3 className='subtitle mb-2'>Valmennusmaksuun lisättävät sivukulut</h3>

        <p>Valmennuksen laskuihin lisätään laskutuksen yhteydessä hallintokulu, jonka avulla katetaan mm. seuraavia kuluja:</p>
        <p>- seuran internetsivujen ylläpitoon liittyvät kulut</p>
        <p>- postituskulut</p>
        <p>- kirjanpidon ja laskutuksen kulut</p>
      </div>

      <p className='font-semibold'>Hallintokulun suuruus kaudella 2024-2025 on 7€ per lähetettävä lasku. </p>
      <p>Valmennukseen osallistuvilta edellytetään tennisseuran jäsenyyttä.</p>

      <div>
        <h3 className='subtitle mb-2'>Reklamaatiot</h3>
        <p>Järvenpään Tennisseura ry:n tavoite on tarjota mahdollisimman laadukasta valmennusta. Mikäli valmennettava ei ole tyytyväinen saamaansa valmennukseen, hänen on viipymättä otettava yhteyttä seuran valmennuspäällikköön ja kuvattava havaittu ongelma, jotta Järvenpään Tennisseura ry:llä on mahdollisuus löytää ratkaisu ongelmaan. Mikäli reklamaation jälkeen havaittuun ongelmaan ei ole löydetty valmennettavaa tyydyttävää ratkaisua, valmennettavalla on oikeus irtisanoutua valmennuksesta yllä kuvatuin aikaehdoin. Järvenpään Tennisseura ry ei ole velvollinen palauttamaan jo maksettuja valmennusmaksuja.</p>
      </div>

      <div className='notice_box'>
        <p className='font-semibold text-center'>Kuvaus ja videointi on tunneilla kielletty. Seura kysyy kuvausluvan erikseen ilmoittautumislomakkeessa, mutta kuvauslupa koskee vain seuran viestintävälineissä julkaistavaa materiaalia.</p>
      </div>
    </section>
  )
}

export default ValmennusEhdot