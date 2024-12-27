import HeroImg from "../../assets/images/hero_bg.png";
import HeroCard from "../HeroServiceCard";
import { HeroServiceCards } from "../../utils/menuInfo";
import '../../index.css';
import { HomeHeroContent } from '../../utils/menuInfo';
import PageTitle from '../PageTitle';



const Hero: React.FC = () => {
  return (
    <section className="mt-1 md:mt-3">
      <PageTitle
        title='Tennis lapsille ja aikuisille'
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