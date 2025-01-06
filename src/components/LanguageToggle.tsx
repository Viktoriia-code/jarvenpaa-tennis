import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'fi'; // Default to 'fi'
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className={`${className} border-[3px] border-gray p-0.5`}>
      <button
        onClick={() => handleChangeLanguage('fi')}
        className={`appearance-none focus:outline-none py-1 min-w-11 text-[17px] ${
          i18n.language === 'fi' ? 'bg-gray' : ''
        }`}
      >
        FI
      </button>
      <button
        onClick={() => handleChangeLanguage('en')}
        className={`appearance-none focus:outline-none py-1 min-w-11 text-[17px] ${
          i18n.language === 'en' ? 'bg-gray' : ''
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
