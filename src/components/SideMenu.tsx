import { NavLink } from 'react-router-dom';
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
  return (
    <aside className='sticky top-7 flex flex-col max-w-80 gap-1 z-10 h-fit self-start'>
      {linksList.map((menu) => {
        const { id, url, title } = menu;
        
        return (
          <NavLink
            key={id}
            className='side_link'
            to={url}
            state={{ fromSideMenu: true }}
            end
          >
            {title}
          </NavLink>
        );
      })}
    </aside>
  )
}

export default SideMenu