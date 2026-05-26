import {
    ArrowLeft,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import BackButton from "../../components/ui/BackButton";
import Button from "../../components/ui/Button";
import ProfileCard from "../../components/profile/ProfileCard";
import fotoMhs from "../../assets/profile-mahasiswa.jpg";

const ProfileMhs = () => {

    const navigate = useNavigate();

    const mahasiswaData = {

        nama: "Fatiyya Ilmi Zahra",

        email:
            "fatiyya@apps.ipb.ac.id",

        hp: "081234567890",

        nim: "G64123012",

        semester: "6",

        fakultas: "SSMI",

        prodi: "Ilmu Komputer",

    };

    const mahasiswaFields = [

        {
            label: "Nama Mahasiswa",
            name: "nama",
            fullWidth: true,
        },

        {
            label: "Email",
            name: "email",
        },

        {
            label: "NIM",
            name: "nim",
        },

        {
            label: "Semester",
            name: "semester",
        },

        {
            label: "Fakultas",
            name: "fakultas",
        },

        {
            label: "Program Studi",
            name: "prodi",
        },

    ];

    return (

        <div>
            <div className="px-3 space-y-8 mb-8">
                <BackButton
                    label="Kembali"
                    color="text-bold-blue"
                    position="relative"
                    to="/dashboard-mahasiswa"
                />
            </div>
            {/* PROFILE CARD */}
            <ProfileCard
                title="Data Pribadi"
                fields={mahasiswaFields}
                initialData={mahasiswaData}
                initialImage={fotoMhs}
            />

            {/* LOGOUT */}
            <div className="
                flex
                justify-center
                mt-8
            ">

                <Button
                    label="Logout"
                    to="/"

                    className="
                        bg-red-700
                        text-white
                        hover:bg-red-800
                    "
                />

            </div>

        </div>

    );

};

export default ProfileMhs;