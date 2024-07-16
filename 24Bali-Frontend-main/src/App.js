import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import SignUp from "./component/SignUp";
import BalireportPage from "./pages/BalireportPage";
import AddLaporanPage from "./pages/AddLaporanPage";
import EmergencyPage from "./pages/EmergencyPage";
import Response from "./component/Response";
import HoaxCheckPage from "./pages/HoaxCheckPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/balireport" element={<BalireportPage />} />
          <Route path="/addlaporan" element={<AddLaporanPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/Response" element={<Response />} />
          <Route path="/HoaxCheck" element={<HoaxCheckPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
