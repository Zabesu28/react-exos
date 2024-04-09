import "./App.css";
import Home from "./pages/HomeComponent/Home.jsx";
import Layout from "./components/LayoutComponent/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import DishDetails from "./pages/DishDetailsComponent/DishDetails.jsx";
import NotFound from "./pages/NotFoundComponent/NotFound.jsx"
import Propos from "./pages/AboutComponent/About.jsx"

function App() {
  return (
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="propos" element={<Propos />} />
            <Route path="plat/:slug" element={<DishDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
  );
}

export default App;
