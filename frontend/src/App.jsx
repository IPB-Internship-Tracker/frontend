import './App.css'
import { Routes, Route } from 'react-router-dom';

import DashboardMhs from './pages/mahasiswa/DashboardMhs';
import LandingPage from './pages/auth/LandingPage';
import SelectRole from './pages/auth/SelectRole';
import LoginMhs from './pages/auth/LoginMhs';
import LoginMitra from './pages/auth/LoginMitra';
import DashboardMitra from './pages/mitra/DashboardMitra';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/dashboard-mahasiswa"
          element={<DashboardMhs />}
        />

        <Route
          path="/select-role"
          element={<SelectRole />}
        />

        <Route
          path="/login-mahasiswa"
          element={<LoginMhs />}
        />

        <Route
          path="/login-mitra"
          element={<LoginMitra />}
        />

          <Route
          path="/dashboard-mitra"
          element={<DashboardMitra />}
        />
      </Routes>
    </div>
  );
}

export default App;