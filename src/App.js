import "./App.css";
import Home from "./pages/HomeComponent/Home.jsx";
import Layout from "./components/LayoutComponent/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import DishDetails from "./pages/DishDetailsComponent/DishDetails.jsx";

function App() {
  return (
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="plat/:slug" element={<DishDetails />} />
          </Route>
        </Routes>
      </main>
  );
}

export default App;
