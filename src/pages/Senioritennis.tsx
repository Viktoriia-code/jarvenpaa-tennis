import PageTitle from "../components/PageTitle"
import '../index.css';

const Senioritennis = () => {
  return (
    <>
      <PageTitle title='Senioritennis' />
      <section>
        <div className="container px-12 flex flex-col gap-8">
          <p className="font-text text-lg leading-relaxed">Senioritenniksen toiminta on vilkasta. Toivomuksia ja uusien jäsenten ilmoittautumisia ottaa vastaan Olavi Rintala: <a href="mailto:olavi.rintala@kolumbus.fi" className="link">olavi.rintala@kolumbus.fi</a> ja puh. 0400 477 240.</p>
          <div>
            <h1 className='subtitle mb-2 font-text'>Diva-tennis</h1>
            <p className="font-text text-lg leading-relaxed">Syksyllä 2011 seuraan perustettiin DIVA-tennisryhmä. Nimi viittaa siihen, että tämän ryhmän jäsenistä monet ovat pelanneet aiemmin senioritenniksen divisioonasarjoissa. Ryhmään pääsee ilman divisioona-taustaakin. Järvenpään Tenniskeskuksen Diva-ryhmä pelaa perjantaisin klo 10-12.</p>
          </div>

          <div>
            <h1 className='subtitle mb-2 font-text'>Ilotennis</h1>
            <p className="font-text text-lg leading-relaxed">Syksyllä 2006 aloitimme erityisesti seniori-ikäisille miehille ja naisille suunnatun Ilotenniksen, jota pelaamme sekanelinpelinä keskiviikkoisin klo 10-12. Ilotenniksessä tavoitteena on liikunnallinen ilo ja mukava yhdessäolo, vaikka itse pelissä "taistellaan" tenniksen tapaan kaikista pisteistä! Kesällä Ilotennis jatkaa ulkokentillä keskiviikkoisin klo 10-12 (ellei keväällä sovita toisin).</p>
          </div>

          <div>
            <h1 className='subtitle mb-2 font-text'>Nopsatennis</h1>
            <p className="font-text text-lg leading-relaxed">Nopsatennis alkoi syksyllä 2015, kun ryhmiin alkoi tulla lisää jäseniä. Monet toivoivat, että uudessa ryhmässä pelitaidot ja -kunto olisivat kohtuullisella tasolla niin, että voisi syntyä - ainakin ajoittain - "kunnon" peliä. Ryhmä pelaa tiistaisin klo 10-12.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Senioritennis