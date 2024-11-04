import { Link } from 'react-router-dom';
import '../index.css';

const ValmennusMenu = () => {
  return (
    <aside className='flex flex-col gap-1 max-w-80'>
      <Link to="/valmennus/aikuisvalmennus-sisakausi-2024-2025/" className='side_link'>Aikuisvalmennus sisäkausi 2024-2025</Link>
      <Link to="/valmennus/juniorivalmennus-sisakausi-2024-2025/" className='side_link'>Aikuisvalmennus sisäkausi 2024-2025</Link>
      <Link to="/valmennus/valmennusehdot-sisakaudelle-2024-2025/" className='side_link'>Valmennusehdot sisäkaudelle 2024-2025</Link>
      <Link to="/valmennus/pelisaannot-valmennustunnille/" className='side_link'>Pelisäännöt valmennustunnille</Link>
    </aside>
  )
}

export default ValmennusMenu