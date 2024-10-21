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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="seura" element={<Seura />} />
          <Route path="seura/hallitus" element={<Hallitus />} />
          <Route path="yksityistunnit" element={<Yksityistunnit />} />
          <Route path="tapahtumat-ja-kurssit" element={<Tapahtumat />} />
          <Route path="yhteystiedot" element={<Yhteystiedot />} />
          <Route path="in-english" element={<English />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;