import '../../index.css';

const Seura = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='section_title'>Järvenpään Tennisseura ry</h3>
      <p className="font-text text-lg leading-relaxed">
        JäTS on perinteikäs tennisseura, joka on perustettu vuonna 1975. Tavoitteenamme on edistää tennisharrastusta Järvenpäässä ja Keski-Uudellamaalla siten, että mahdollisimman monella on mahdollisuus harrastaa tennistä edellytystensä ja tavoitteidensa mukaisesti.  Seurassa on tällä hetkellä (loppuvuosi 2023) 170 aikuisjäsentä ja 85 juniorijäsentä. Valmennustoimintaan osallistuu noin 150 pelaajaa. Seuran toiminta on keskittynyt Järvenpäähän ja Keravalle. 
      </p>
      <p className="font-text text-lg leading-relaxed">
        Järvenpäässä toiminta pyörii Kuuselankadun <a className='link' href="http://www.jarvenpaantennis.fi/" target="_blank" rel="noopener noreferrer">Tenniskeskuksessa</a>
        , jossa on kolme yhden kentän tennishallia ja kaksi hiekkanurmipintaista ulkokenttää. Hallit omistaa halliyhtiö (Tennishalli Oy) ja Tennisseura on osakkaana halliyhtiössä. 
      </p>
      <p className="font-text text-lg leading-relaxed">
        Syksystä 2019 alkaen olemme tehneet yhteistyötä Keravan Tennisseuran kanssa ja JäTS vastaakin valmennustoiminnan hallinnoinnista ja järjestämisestä Keravalla myös sisäkaudella 2023-2024. Valmennus tapahtuu sisäkaudella <a className='link' href="https://www.keravantennishalli.fi/" target="_blank" rel="noopener noreferrer">Keravan Tenniskeskuksessa</a>, jossa on kaksi sisäkenttää. Ulkokaudella toimintaa järjestetään Lapilan kahdella massakentällä sekä Koivikon ulkokentillä Saviolla.
      </p>
      <p className="font-text text-lg leading-relaxed">
        <a className='link' href="https://www.jarvenpaantennisseura.fi/hallisarja/" target="_blank" rel="noopener noreferrer">Keski-Uudenmaan hallisarja</a> on pyörinyt jo useamman vuoden ajan Järvenpään ja Keravan Tenniskeskuksissa. Hallisarja jatkui myös sisäkaudella 2023-2024, jolloin sarjassa oli mukana 51 pelaajaa.
      </p>
      <p className="font-text text-lg leading-relaxed">
        Järvenpään Tennisseuran joukkueet osallistuvat  myös Tennisliiton järjestämään kansalliseen sarjatennikseen. Miesten joukkueita on tällä hetkellä mukana yleisissä sarjoissa kolme ja naisten joukkueita yksi. Lisäksi seniorisarjoissa on kaudella 2023-2024 mukana yhteensä kaksi JäTS:n joukkuetta.
      </p>
      <p className="subtitle font-text">Järvenpään Tennisseura ry</p>
      <p className="font-text text-lg leading-relaxed">Käyntiosoite: Kuuselankatu 2, 04410, Järvenpää</p>
      <p className="font-text text-lg leading-relaxed">Yhdistysrekisteritunnus: (Ly 1731189-2)</p>
      <div style={{ width: '100%', height: '400px' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13225.539010169525!2d25.07333213313807!3d60.48551961879322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e00f5dbecfdcd%3A0xefbc6006ad160fe6!2zS3V1c2VsYW5rYXR1IDIsIDA0NDEwIErDpHJ2ZW5ww6TDpA!5e0!3m2!1sfi!2sfi!4v1736442962737!5m2!1sfi!2sfi"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
    </div>
  )
}

export default Seura