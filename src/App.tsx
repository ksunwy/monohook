import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ForManagers from "./pages/ForManagers";
import HRDepartment from "./pages/HRDepartment";
import Shipments from "./pages/Shipments";
import SlaughterShop from "./pages/SlaughterShop";
import Header from "./components/Header/Header";
import { getTextFromPath } from "./components/Header/utils/getTextFromPath";
import {MonoHooksStore} from 'use-mono-hook';
import './App.css';

const AppContent = () => {
  const { pathname } = useLocation();
  const headerText = getTextFromPath(pathname);

  return (
    <main className="p-3 flex flex-col gap-[10px] text-black bg-white h-[100dvh]">
      <Header text={headerText} />
      <Routes>
        <Route path="/for-managers" element={<ForManagers />} />
        <Route path="/hr-department" element={<HRDepartment />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/slaughter-shop" element={<SlaughterShop />} />
      </Routes>
    </main>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
      <MonoHooksStore />
    </Router>
  );
}
export default App
