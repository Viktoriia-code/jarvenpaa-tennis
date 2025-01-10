import { NavLink } from 'react-router-dom';
import '../index.css';
import { useTranslation } from 'react-i18next';
import { MenuLink } from '../utils/menuInfo';

interface SideMenuProps {
  linksList: MenuLink[];
}

const SideMenu: React.FC<SideMenuProps> = ({ linksList }) => {
  const { i18n } = useTranslation();
  return (
    <aside className='md:sticky md:top-7 flex flex-col max-w-80 gap-1 z-10 h-fit md:self-start self-center'>
      {linksList.map((menu) => {
        const { id, url, title_fi, title_en } = menu;
        const title = i18n.language === 'fi' ? title_fi : title_en;
        
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