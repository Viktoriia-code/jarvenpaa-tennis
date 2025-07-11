import PageTitle from '../components/PageTitle';
import JarvTennis from '/images/pageBanners/Jats_logo_full.png';
import '../index.css';
import { Link } from 'react-router-dom';

const English = () => {
  return (
    <>
      <PageTitle title='In English' image={JarvTennis} />
      <section>
        <div className="container px-12">

          <p>Järvenpään Tennisseura provides tennis coaching for all levels and ages in Järvenpää and Kerava. You can take part in our weekly group sessions or have a private lesson to improve your own game. Contact head coach <Link className='link' to="/yhteystiedot/">Matti Käpylä</Link> to find out more!</p>
              
        </div>
      </section>
    </>
  )
}

export default English