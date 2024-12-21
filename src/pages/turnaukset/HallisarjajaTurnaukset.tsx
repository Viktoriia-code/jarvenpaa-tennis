import HallisarjaForm from '../../components/HallisarjaForm';

const HallisarjajaTurnaukset = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h3 className='section-title'>KESKI-UUDENMAAN HALLISARJA 2023-2024</h3>
      <div className='notice_box'>
        <span>
          <a 
            href="https://docs.google.com/spreadsheets/d/1_t46ZjOB6EAiH6Z7VkyxCbjSvHqkdx2l3XDwhqswvVs/htmlview#gid=1624013709"
            className='link'
            target="_blank" 
            rel="noopener noreferrer">
              Hallisarjan lohkot ja aikataulut
          </a>
          {' '}(avautuu uuteen välilehteen)
        </span>
      </div>
      <p>Hallisarjassa pelataan tunnin mittaisia otteluita 5-7 pelaajan lohkoissa. Kaiken tasoiset pelaajat ovat tervetulleita osallistumaan. Hallisarja toimii hyvänä mahdollisuutena pelata kilpailuhenkisiä otteluita uusia pelaajia vastaan. Samalla voit myös hankkia itsellesi uusia saman tasoisia pelikavereita.</p>

      <p>Ottelut aikataulutetaan alustavasti seuran varaamille Järvenpään Tenniskeskuksen hallivuoroille (ti klo 20-21 Best, to klo 17-18 Best, la klo 10-12 Best, su klo 15-16 Best ja su klo 18-20 LS), mutta otteluita saa myös sopia ja pelata omakustanteisesti omilla vuoroilla.</p>

      <p>Osallistujilta laskutetaan 11€ per pelattu ottelu, jolla katetaan varattujen vuorojen kenttämaksut. Hallisarjaan liittyviin kysymyksiin vastaa Matti Käpylä 0503052120.</p>

      <HallisarjaForm />

      <h3 className='section-title'>HALLISARJAN SÄÄNNÖT</h3>

      <div>
        <h3 className='subtitle mb-2 font-text'>Ottelun kesto on 1 tunti</h3>
        <p>Otteluissa noudatetaan yleisiä tenniksen sääntöjä. Pallottelu kestää 5 minuuttia, jonka jälkeen pelaajat arpovat normaaliin tapaan syöttäjän, vastaanottajan ja aloituspelipuolet. Itse peli kestää 55 minuuttia. Peliajan päättymiseen voidaan käyttää esimerkiksi matkapuhelimen herätyskelloa. Näin vältytään tulkintaerimielisyyksiltä.</p>
        <p className='italic'>Varatkaa mukaan omat pallot!</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Otteluiden pistelasku</h3>
        <p>Noudatamme otteluissa normaalia tenniksen pistelaskua ja pelataan mahdollisimman monta syöttövuoroa tunnin aikana (tulos esim. 11-7). Kenttäpuolia vaihdetaan aina tenniksen sääntöjen mukaisesti parittomien pelattujen syöttövuorojen jälkeen. Molemmat tuomitsevat omat kenttäpuoliskonsa pelitapahtumat. Jos et ole tuomiosta varma, pelaa pallo oikeana. Pelaa ottelusi reilussa hengessä.</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Ottelun tulos ja pisteet</h3>
        <p>Ottelun tulos (esim. 11-7) syötetään järjestelmään. Pisteet ottelusta jaetaan seuraavasti: voitto 2p, tasapeli 1p, häviö 0.5p.</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Lohkojen tulokset</h3>
        <p>Lohkon sisällä samaan pistemäärään päätyneiden pelaajien sijoitukset ratkaistaan ensijaisesti keskinäisen ottelun voittajan perusteella. Seuraava ratkaiseva tekijä on hävittyjien pelien/geimien määrä.</p>
      </div>

      <div>
        <h3 className='subtitle mb-2 font-text'>Tuloksen merkintä ja ilmoittaminen</h3>
        <p>Pelaajat sopivat ottelun jälkeen kumpi syöttää tuloksen järjestelmään (hyvä nyrkkisääntö on, että ottelun voittaja).</p>
      </div>
    </section>
  )
}

export default HallisarjajaTurnaukset