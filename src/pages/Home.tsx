import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Partners />
    </>
  );
};

export default Home;