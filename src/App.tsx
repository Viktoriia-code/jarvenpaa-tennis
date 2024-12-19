import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Seura from "./pages/Seura";
import Hallitus from "./pages/Hallitus";
import English from "./pages/English";
import Yksityistunnit from "./pages/Yksityistunnit";
import Tapahtumat from "./pages/Tapahtumat";
import Yhteystiedot from "./pages/Yhteystiedot";
import Senioritennis from "./pages/Senioritennis";
import LiityJaseneksi from "./pages/LiityJaseneksi";
import ScrollToTop from "./components/ScrollToTop";
import Kenttavaraukset from "./pages/Kenttavaraukset";
import Valmennus from "./pages/Valmennus";
import SideMenuLayout from "./layouts/SideMenuLayout";
import Aikuisvalmennus from "./pages/Valmennus/Aikuisvalmennus";
import Juniorvalmennus from "./pages/Valmennus/Juniorvalmennus";
import ValmennusEhdot from "./pages/Valmennus/ValmennusEhdot";
import Pelisaannot from "./pages/Valmennus/Pelisaannot";
import HallisarjajaTurnaukset from "./pages/HallisarjajaTurnaukset";

import { ValmennusMenuLinks } from "./utils/menuInfo";
import { TurnauksetLinks } from "./utils/menuInfo";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="seura" element={<Seura />} />
            <Route path="seura/hallitus" element={<Hallitus />} />
            <Route path="yksityistunnit" element={<Yksityistunnit />} />
            <Route path="tapahtumat-ja-kurssit" element={<Tapahtumat />} />
            <Route path="yhteystiedot" element={<Yhteystiedot />} />
            <Route path="liity-jaseneksi" element={<LiityJaseneksi />} />
            <Route path="kenttavaraukset" element={<Kenttavaraukset />} />
            <Route path="in-english" element={<English />} />
            <Route path="senioritennis" element={<Senioritennis />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/valmennus" element={<SideMenuLayout title="Viikoittainen valmennus" links={ValmennusMenuLinks} />}>
            <Route path="viikoittainen-valmennus" element={<Valmennus />} />
            <Route path="aikuisvalmennus-sisakausi-2024-2025" element={<Aikuisvalmennus />} />
            <Route path="juniorivalmennus-sisakausi-2024-2025" element={<Juniorvalmennus />} />
            <Route path="valmennusehdot-sisakaudelle-2024-2025" element={<ValmennusEhdot />} />
            <Route path="pelisaannot-valmennustunnille" element={<Pelisaannot />} />
          </Route>
          <Route path="/hallisarjajaturnaukset" element={<SideMenuLayout title="Hallisarja ja turnaukset" links={TurnauksetLinks} />}>
            <Route index element={<HallisarjajaTurnaukset />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;