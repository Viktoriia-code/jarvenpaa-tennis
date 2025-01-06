import HeroImg from "../../assets/images/hero_bg.png";
import HeroCard from "../HeroServiceCard";
import { HeroServiceCards } from "../../utils/menuInfo";
import '../../index.css';
import { HomeHeroContent } from '../../utils/menuInfo';
import PageTitle from '../PageTitle';
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-1 md:mt-3">
      <PageTitle
        title={t('hero.title')}
        image={HeroImg}
        subtitle='Sekä arkisin että viikonloppuisin'
        note={HomeHeroContent.info}
        button
      />
      <div className="container">
        <div className="flex w-full justify-center gap-6 md:justify-around flex-wrap">
          {HeroServiceCards.map((path, index) => {
            return <HeroCard {...path} key={index} />;
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero