import '../App.css';
import JarvTennis from '../assets/images/Jats_logo_full.png';
import PageTitle from '../components/PageTitle';
import '../index.css';
import { Link } from 'react-router-dom';

const Seura = () => {
  return (
    <>
      <PageTitle title='Seura' image={JarvTennis} />
      <section>
        <div className="container flex gap-10 items-start">
          <Link to="/seura/hallitus" className='side_link'>
            <h3 className='p-3'>Hallitus</h3>
          </Link>
          <div className='flex flex-col gap-4'>
            <h1 className='text-darkBlue'>Järvenpään Tennisseura ry</h1>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Seura