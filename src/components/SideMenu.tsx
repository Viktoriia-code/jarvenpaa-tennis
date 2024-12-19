import { NavLink, useLocation } from 'react-router-dom';
import '../index.css';

type MenuLink = {
  id: number;
  url: string;
  title: string;
};

interface SideMenuProps {
  linksList: MenuLink[];
}

const SideMenu: React.FC<SideMenuProps> = ({ linksList }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className='sticky top-7 flex flex-col max-w-80 gap-1 z-10 h-fit self-start'>
      {linksList.map((menu) => {
        const { id, url, title } = menu;
        const isActive = url === pathname;
        return (
          <NavLink
            key={id}
            className={`side_link ${isActive ? 'active':''}`}
            to={url}
          >
            {title}
          </NavLink>
        );
      })}
    </aside>
  )
}

export default SideMenu