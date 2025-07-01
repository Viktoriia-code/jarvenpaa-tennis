import GalleryComponent from '../../components/GalleryComponent';
import '../../index.css';
import { keravaTenniskeskusImages } from '../../utils/galleryImages';

const KeravaTenniskeskus = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className='section_title'>Keravan Tenniskeskus</h3>
      <div className='notice_box'>
        <span>
          Kenttien varaaminen tapahtuu osoitteessa <a href="https://www.keravantennishalli.fi/" target="_blank" rel="noopener noreferrer" className='link'>https://www.keravantennishalli.fi/</a>
        </span>
      </div>
      <p>Keravan Tenniskeskuksesta puolestaan löytyy kaksi sisäkenttää.</p>
      <GalleryComponent images={keravaTenniskeskusImages} />
      <p>Keskus sijaitsee osoitteessa Metsolantie 5, Kerava.</p>
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.095659387229!2d25.087659513001203!3d60.410613375052336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468dff86acb4243d%3A0x697af8e951de186b!2sMetsolantie%205%2C%2004200%20Kerava!5e0!3m2!1sfi!2sfi!4v1751369833797!5m2!1sfi!2sfi"
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

export default KeravaTenniskeskus