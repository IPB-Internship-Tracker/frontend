import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg-ahn.png";
import Logo from "../../components/common/Logo";
import LoginForm from "../../components/forms/LoginForm";
import BackButton from "../../components/ui/BackButton";
import SignupForm from "../../components/forms/SignupForm";

const SignUpMhs = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bold-blue via-bold-blue/80 to-bold-blue/40"></div>
        
        <BackButton to="/select-role" />

      {/* Content */}
        <div className="relative z-10 text-center text-white px-6 items-center">

            <div className="flex flex-col items-center gap-8 py-20">
                <Logo 
                    logoSize="w-100"
                    textSize="text-2xl"
                />
                <SignupForm
                    role="Mahasiswa IPB"
                    fields={[
                        { label: "Nama Lengkap", type: "text", placeholder: "Masukkan nama lengkap" },
                        { label: "Email", type: "email", placeholder: "Gunakan email IPB" },
                        { label: "NIM", type: "text", placeholder: "Masukkan NIM" },
                        { label: "Password", type: "password", placeholder: "Masukkan password" },
                        {label: "Fakultas",
                          type: "select",
                          placeholder: "Pilih fakultas",
                          options: [
                            "Fakultas Pertanian",
                            "Sekolah Kedokteran Hewan dan Biomedis",
                            "Fakultas Perikanan dan Ilmu Kelautan",
                            "Fakultas Peternakan",
                            "Fakultas Kehunanan dan Lingkungan",
                            "Fakultas Teknik dan Teknologi",
                            "Fakultas Matematika dan Ilmu Pengetahuan Alam",
                            "Fakulas Ekonomi dan Manajemen",
                            "Fakultas Ekologi Manusia",
                            "Sekolah Vokasi",
                            "Sekolah Bisnis",
                            "Fakultas Kedokteran dan Gizi",
                            "Sekolah Sains Data, Matematika, dan Informatika",
                          ]
                        },  
                        { label: "Konfirmasi Password", type: "password", placeholder: "Konfirmasi password" },
                        { label: "Program Studi", type: "text", placeholder: "Masukkan program studi" }
                    ]}
                    loginPath="/login-mahasiswa"
                />
            </div>
        </div>
     
      </div>
      
  );
};

export default SignUpMhs;