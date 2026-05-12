import './App.css'
import { Routes, Route } from 'react-router-dom';

// auth
import LandingPage from './pages/auth/LandingPage';
import SelectRole from './pages/auth/SelectRole';
import LoginMhs from './pages/auth/LoginMhs';
import LoginMitra from './pages/auth/LoginMitra';
import SignUpMhs from './pages/auth/SignUpMhs';
import SignUpMitra from './pages/auth/SignUpMitra';

//mahasiswa
import DashboardMhs from './pages/mahasiswa/DashboardMhs';
import FormPendaftaran from './pages/mahasiswa/FormPendaftaran';
import LamaranList from './pages/mahasiswa/LamaranList';
import LamaranDetail from './pages/mahasiswa/LamaranDetail';
import LogbookDetail from './pages/mahasiswa/LogbookDetail';

// mitra
import DashboardMitra from './pages/mitra/DashboardMitra';
import PelamarList from './pages/mitra/PelamarList';
import PelamarDetail from './pages/mitra/PelamarDetail';
import MagangList from './pages/mitra/MagangList';
import CreateMagang from './pages/mitra/CreateMagang';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />}/>

        {/* Auth */}
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/login-mahasiswa" element={<LoginMhs />}/>
        <Route path="/login-mitra" element={<LoginMitra />}/>
        <Route path="/sign-up-mahasiswa" element={<SignUpMhs />} />
        <Route path="/sign-up-mitra" element={<SignUpMitra />}/>

        {/* Mahasiswa */}
        <Route path="/dashboard-mahasiswa" element={<DashboardMhs />} />
        <Route path="/formpendaftaran" element={<FormPendaftaran />} />
        <Route path="/lamaran-list" element={<LamaranList />} />
        <Route path="/lamaran-detail" element={<LamaranDetail />} />
        <Route path="/logbook-detail" element={<LogbookDetail />} />

        {/* Mitra */}
        <Route path="/dashboard-mitra" element={<DashboardMitra />} />
        <Route path="/pelamar-list" element={<PelamarList />} />
        <Route path="/pelamar-detail" element={<PelamarDetail />} />
        <Route path="/magang-list" element={<MagangList />} />
        <Route path="/create-magang" element={<CreateMagang />} />

      </Routes>
    </div>
  );
}

export default App;