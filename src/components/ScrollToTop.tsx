// code from https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/

import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

interface Props {
  children: ReactNode;
}

const ScrollToTop: React.FC<Props> = (props) => {
  const location = useLocation();

  useEffect(() => {
    const fromSideMenu = location.state?.fromSideMenu;

    if (!fromSideMenu) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;