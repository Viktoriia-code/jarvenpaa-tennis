import { Link } from 'react-router-dom';
import JatsLogo from "../assets/images/jäts_logo.png";
import { useTranslation } from 'react-i18next';

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light }) => {
  const { t } = useTranslation();
  return (
    <Link to="/" className="flex items-center gap-3 max-w-[215px]">
      <img
        src={JatsLogo}
        alt="Jäts_logo"
        className="w-14 md:w-[70px]"
      />
      <p className={`font-title text-xl leading-tight font-black italic ${light ? 'text-white' : 'text-black'}`}>{t('logo')}</p>
    </Link>
  )
}

export default Logo