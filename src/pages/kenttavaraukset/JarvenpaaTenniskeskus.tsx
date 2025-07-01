import GalleryComponent from '../../components/GalleryComponent';
import '../../index.css';
import { jarvenpaaTenniskeskusImages } from '../../utils/galleryImages';

const JarvenpaaTenniskeskus = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className='section_title'>Järvenpään Tenniskeskus</h3>
      <div className='notice_box'>
        <span>
          Voit varata kentän osoitteessa <a href="https://www.jarvenpaantennishalli.fi/" target="_blank" rel="noopener noreferrer" className='link'>https://www.jarvenpaantennishalli.fi/</a>
        </span>
      </div>
      <p>Keskuksesta löytyy kolme sisäkenttää ja kaksi ulkokenttää.</p>
      <GalleryComponent images={jarvenpaaTenniskeskusImages} />
      <p>Järvenpään Tenniskeskus sijaitsee osoitteessa Kuuselankatu 2.</p>
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.5380021663698!2d25.081555113005738!3d60.485851275091555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e00f5dbecfdcd%3A0xefbc6006ad160fe6!2zS3V1c2VsYW5rYXR1IDIsIDA0NDEwIErDpHJ2ZW5ww6TDpA!5e0!3m2!1sfi!2sfi!4v1751368086486!5m2!1sfi!2sfi"
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

export default JarvenpaaTenniskeskus