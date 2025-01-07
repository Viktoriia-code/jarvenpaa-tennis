import HeroImg from "../../assets/images/hero_bg.png";
import HeroCard from "../HeroServiceCard";
import { HeroServiceCards } from "../../utils/menuInfo";
import '../../index.css';
import PageTitle from '../PageTitle';
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle
      title={t('hero.title')}
      image={HeroImg}
      subtitle={t('hero.subtitle')}
      note={t('hero.note')}
      button={t('hero.cta')}
      />
      <section>
        <div className="container">
          <div className="flex w-full justify-center gap-6 md:justify-around flex-wrap">
            {HeroServiceCards.map((path, index) => {
              return <HeroCard {...path} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero