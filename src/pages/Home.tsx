import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import Schedule from "../components/home/Schedule";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Partners />
      <Schedule />
    </>
  );
};

export default Home;