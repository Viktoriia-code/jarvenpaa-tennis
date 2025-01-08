import HeroImg from "../../assets/images/hero_bg.png";
import { ServiceCards } from "../../utils/menuInfo";
import '../../index.css';
import PageTitle from '../PageTitle';
import { useTranslation } from "react-i18next";
import ServiceCard from "../ServiceCard";

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
            {ServiceCards.map((item, index) => {
              return (
                <ServiceCard 
                  url={item.url} 
                  key={index} 
                  title={t(`hero.serviceCards.${index}.title`)} 
                  subtitle={t(`hero.serviceCards.${index}.subtitle`)}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero