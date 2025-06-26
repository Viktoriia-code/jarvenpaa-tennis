import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Seura from "./pages/seura/Seura";
import Hallitus from "./pages/seura/Hallitus";
import English from "./pages/English";
import Yksityistunnit from "./pages/Yksityistunnit";
import Tapahtumat from "./pages/Tapahtumat";
import Yhteystiedot from "./pages/Yhteystiedot";
import Senioritennis from "./pages/Senioritennis";
import LiityJaseneksi from "./pages/LiityJaseneksi";
import ScrollToTop from "./components/ScrollToTop";
import Kenttavaraukset from "./pages/Kenttavaraukset";
import Valmennus from "./pages/valmennus/Valmennus";
import Aikuisvalmennus from "./pages/valmennus/Aikuisvalmennus";
import Juniorvalmennus from "./pages/valmennus/Juniorvalmennus";
import ValmennusEhdot from "./pages/valmennus/ValmennusEhdot";
import Pelisaannot from "./pages/valmennus/Pelisaannot";
import SideMenuLayout from "./layouts/SideMenuLayout";
import HallisarjajaTurnaukset from "./pages/turnaukset/HallisarjajaTurnaukset";

import { SeuraMenuLinks, ValmennusMenuLinks } from "./utils/menuInfo";
import { TurnauksetLinks } from "./utils/menuInfo";
import JatsMestaruuskilpailut2023 from "./pages/turnaukset/JatsMestaruuskilpailut2023";
import JatsHallimestaruuskilpailut2024 from "./pages/turnaukset/JatsHallimestaruuskilpailut2024";
import JatsUlkokenttienkisat2024 from "./pages/turnaukset/JatsUlkokenttienkisat2024";

const App = () => {
  return (
    <Router>
      <div style={{ color: "black" }}>
        Test page — React работает
      </div>
    </Router>
  );
  /*
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="yksityistunnit" element={<Yksityistunnit />} />
            <Route path="tapahtumat-ja-kurssit" element={<Tapahtumat />} />
            <Route path="yhteystiedot" element={<Yhteystiedot />} />
            <Route path="liity-jaseneksi" element={<LiityJaseneksi />} />
            <Route path="kenttavaraukset" element={<Kenttavaraukset />} />
            <Route path="in-english" element={<English />} />
            <Route path="senioritennis" element={<Senioritennis />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/seura" element={<SideMenuLayout title="Seura" links={SeuraMenuLinks} />}>
            <Route index element={<Seura />} />
            <Route path="hallitus" element={<Hallitus />} />
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
            <Route path="jats-mestaruuskilpailut-2023" element={<JatsMestaruuskilpailut2023 />} />
            <Route path="jats-hallimestaruuskilpailut-2024" element={<JatsHallimestaruuskilpailut2024 />} />
            <Route path="jats-ulkokenttienkisat-2024" element={<JatsUlkokenttienkisat2024 />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );*/
};

export default App;