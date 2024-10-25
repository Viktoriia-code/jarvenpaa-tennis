import PageTitle from '../components/PageTitle';
import '../index.css';

const Kenttavaraukset = () => {
  return (
    <>
      <PageTitle title='Kenttävaraukset' />
      <section>
        <div className="container flex flex-col gap-4 px-12">
          <p className='font-text text-lg leading-relaxed'>Järvenpään Tenniskeskus sijaitsee osoitteessa Kuuselankatu 2. Keskuksesta löytyy kolme sisäkenttää ja kaksi ulkokenttää. Voit varata kentän osoitteessa <a href="https://www.jarvenpaantennishalli.fi/" target="_blank" rel="noopener noreferrer" className='link'>https://www.jarvenpaantennishalli.fi/</a></p>
          <p className='font-text text-lg leading-relaxed'>Keravan Tenniskeskuksesta puolestaan löytyy kaksi sisäkenttää ja kenttien varaaminen tapahtuu osoitteessa <a href="https://www.keravantennishalli.fi/" target="_blank" rel="noopener noreferrer" className='link'>https://www.keravantennishalli.fi/</a>. Keskus sijaitsee osoitteessa Metsolantie 5, Kerava. Lapilan massakenttien varaukset tapahtuvat osoitteessa <a href="https://slotti.fi/booking/keravantennisseurary/#/" target="_blank" rel="noopener noreferrer" className='link'>https://slotti.fi/booking/keravantennisseurary/#/</a></p>
        </div>
      </section>
    </>
  )
}

export default Kenttavaraukset