import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Blank from "./pages/Blank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Blank />} />
          <Route path="products" element={<Blank />} />
          <Route path="customers" element={<Blank />} />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
