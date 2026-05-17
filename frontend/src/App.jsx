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
import DashboardLayoutMhs from './components/layout/mahasiswa/DashboardLayoutMhs';
import DashboardMhs from './pages/mahasiswa/DashboardMhs';
import FormPendaftaran from './pages/mahasiswa/FormPendaftaran';
import LamaranList from './pages/mahasiswa/LamaranList';
import LamaranDetail from './pages/mahasiswa/LamaranDetail';
import LogbookDetail from './pages/mahasiswa/LogbookDetail';
import LogbookList from './pages/mahasiswa/LogbookList';
import MagangListMhs from './pages/mahasiswa/MagangListMhs';
import MagangDetailMhs from './pages/mahasiswa/MagangDetailMhs';
import KompetisiList from './pages/mahasiswa/KompetisiList';
import StupenList from './pages/mahasiswa/StupenList';

// mitra
import DashboardLayoutMitra from './components/layout/mitra/DashboardLayoutMitra';
import DashboardMitra from './pages/mitra/DashboardMitra';
import PelamarList from './pages/mitra/PelamarList';
import PelamarDetail from './pages/mitra/PelamarDetail';
import MagangListMitra from './pages/mitra/MagangListMitra';
import MagangDetailMitra from './pages/mitra/MagangDetailMitra';
import CreateMagang from './pages/mitra/CreateMagang';
import DocRequirement from './pages/mitra/DocRequirement';

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
        <Route element={<DashboardLayoutMhs />}>
          <Route path="/dashboard-mahasiswa" element={<DashboardMhs />} />
          <Route path="/formpendaftaran" element={<FormPendaftaran />} />
          <Route path="/lamaran-list" element={<LamaranList />} />
          <Route path="/lamaran-detail" element={<LamaranDetail />} />
          <Route path="/logbook-detail" element={<LogbookDetail />} />
          <Route path="/logbook-list" element={<LogbookList />} />
          <Route path="/magang-list" element={<MagangListMhs />} />
          <Route path="/magang-detail" element={<MagangDetailMhs />} />
          <Route path="/kompetisi-list" element={<KompetisiList />} />
          <Route path="/stupen-list" element={<StupenList />} />
        </Route>

        {/* Mitra */}
        <Route element={<DashboardLayoutMitra />}>
          <Route path="/dashboard-mitra" element={<DashboardMitra />} />
          <Route path="/pelamar-list" element={<PelamarList />} />
          <Route path="/pelamar-detail" element={<PelamarDetail />} />
          <Route path="/magang-list-mitra" element={<MagangListMitra />} />
          <Route path="/magang-detail" element={<MagangDetailMitra />} />
          <Route path="/create-magang" element={<CreateMagang />} />
          <Route path="/doc-requirement" element={<DocRequirement />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;