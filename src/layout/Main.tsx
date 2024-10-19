import Hero from "./Hero";
import About from "./About";
import Partners from "./Partners";
import Footer from "./Footer";


const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Partners />
      <Footer />
    </main>
  );
};

export default Home;