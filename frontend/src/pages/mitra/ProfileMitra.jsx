import {
    ArrowLeft,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import BackButton from "../../components/ui/BackButton";
import ProfileCard from "../../components/profile/ProfileCard";
import logoShopee from "../../assets/logo-shopee.png";
import { logout } from "../../components/utils/auth";

const ProfileMitra = () => {

    const navigate = useNavigate();

    const mitraData = {

        namaInstansi:
            "Shopee Indonesia",

        jenisInstansi:
            "Swasta",

        emailInstansi:
            "shopee@shopee.co.id",

    };

    const mitraFields = [

        {
            label: "Nama Instansi",
            name: "namaInstansi",
            fullWidth: true,
        },

        {
            label: "Jenis Instansi",
            name: "jenisInstansi",
        },

        {
            label: "Email Instansi",
            name: "emailInstansi",
        },

    ];

    return (

        <div>

            {/* BACK */}
            <div className="px-3 space-y-8 mb-8">
                <BackButton
                    label="Kembali"
                    color="text-bold-blue"
                    position="relative"
                    to="/dashboard-mitra"
                />
            </div>

            {/* PROFILE CARD */}
            <ProfileCard
                title="Data Instansi"
                fields={mitraFields}
                initialData={mitraData}
                initialImage={logoShopee}
            />

            {/* LOGOUT */}
            <div className="
                flex
                justify-center
                mt-8
            ">

            <Button
                label="Logout"
                onClick={() =>
                    logout(navigate)
                }
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

export default ProfileMitra;