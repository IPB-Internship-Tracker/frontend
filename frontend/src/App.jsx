import './App.css'
import { Routes, Route } from 'react-router-dom';

import DashboardMhs from './pages/mahasiswa/DashboardMhs';
import DashboardMitra from './pages/mitra/DashboardMitra';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route
          path="/dashboard-mahasiswa"
          element={<DashboardMhs />}
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
