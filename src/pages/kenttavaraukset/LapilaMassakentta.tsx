import { lapilaMassakentatImages } from '../../utils/galleryImages'
import GalleryComponent from '../../components/GalleryComponent'
import '../../index.css';

const LapilaMassakentta = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className='section_title'>Lapilan tenniskentät</h3>
      <div className='notice_box'>
        <span>
          Lapilan massakenttien varaukset tapahtuvat osoitteessa <a href="https://slotti.fi/booking/keravantennisseurary/#/" target="_blank" rel="noopener noreferrer" className='link'>https://slotti.fi/booking/keravantennisseurary/#/</a>
        </span>
      </div>
      <p>Lapilan massakenttiesta puolestaan löytyy kaksi ulkokenttää.</p>
      <GalleryComponent images={lapilaMassakentatImages} />
      <p>Lapilan massakentät sijaitsevat osoitteessa Lapilantie 19, Kerava.</p>
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.5285919203748!2d25.113311579345705!3d60.4034636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469201208af748e7%3A0x6b472118fecf93d2!2sLapilan%20tenniskent%C3%A4t!5e0!3m2!1sfi!2sfi!4v1751371069297!5m2!1sfi!2sfi"
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

export default LapilaMassakentta