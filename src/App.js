import "./App.css";
import Home from "./pages/HomeComponent/Home.jsx";
import Layout from "./components/LayoutComponent/Layout.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
  );
}

export default App;
