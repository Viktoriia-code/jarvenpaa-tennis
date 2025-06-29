import { useEffect, useState } from "react";

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`hidden flex-col items-center w-16 h-16 fixed bottom-10 right-4 p-3 text-gray bg-gray-800 
        rounded-full cursor-pointer z-[1000] border-[2px] border-gray hover:bg-lightGreen hover:text-black hover:border-black
        transition-all duration-300 ease-in-out ${
        visible ? "sm:flex" : "hidden"
      }`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 330 330"
        className="w-6 h-6 fill-current text-gray-500 group-hover:text-black transition-colors duration-300"
      >
        <path d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
          l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
          C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" />
      </svg>
      <span className="text-base">Top</span>
    </div>
  );
};

export default ScrollToTopBtn;
