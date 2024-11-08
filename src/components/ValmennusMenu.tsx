import { NavLink, useLocation } from 'react-router-dom';
import '../index.css';
import { ValmennusMenuLinks } from "../utils/menuInfo";

const ValmennusMenu = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className='flex flex-col max-w-80 gap-1 border-l-[3px] border-black'>
      {ValmennusMenuLinks.map((menu) => {
        const { id, url, title } = menu;
        const isActive = url === pathname;
        return (
          <NavLink
            key={id}
            className={`side_link ${isActive ? 'bg-yellow hover:bg-yellow':'bg-grayBg'}`}
            to={url}
          >
            {title}
          </NavLink>
        );
      })}
    </aside>
  )
}

export default ValmennusMenu