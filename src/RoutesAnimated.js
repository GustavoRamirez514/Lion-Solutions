import Vacantes from "containers/pages/Vacantes";
import Casos from "containers/pages/Casos";
import Contacto from "containers/pages/Contacto";
import Nosotros from "containers/pages/Nosotros";
import Servicios from "containers/pages/Servicios";
import Error404 from "containers/errors/error404";
import Home from "containers/pages/home";
import Blog from "containers/pages/Blog";


import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import BlogCategory from "containers/pages/BlogCategory";
import Search from "containers/pages/BlogSearch";
import BlogDetail from "containers/pages/BlogDetail";
import OptIn from "containers/pages/Opt-in";

function RoutesAnimated() {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      {/* Error en caso de encontrar un path que no existe */}
      <Route path="*" element={<Error404 />}></Route>
      <Route path="/Blog" element={<Blog />}></Route>
      <Route path="/Blog/:slug" element={<BlogDetail />}></Route>
      <Route path="/Category/:slug" element={<BlogCategory />}></Route>
      <Route path="/s=:term" element={<Search />}></Route>
      <Route path="/Vacantes" element={<Vacantes />}></Route>
      <Route path="/Casos" element={<Casos />}></Route>
      <Route path="/Contacto" element={<Contacto />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Nosotros" element={<Nosotros />}></Route>
      <Route path="/Servicios" element={<Servicios />}></Route>
      <Route path="/OptIn" element={<OptIn />}></Route>
    </Routes>
    </AnimatePresence>
  );
}
export default RoutesAnimated;
