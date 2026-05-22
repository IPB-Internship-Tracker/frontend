import {
    ArrowLeft,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";

import ProfileCard from "../../components/profile/ProfileCard";

import logoShopee from "../../assets/logo-shopee.png";

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
            <button
                onClick={() => navigate(-1)}
                className="
                    flex
                    items-center
                    gap-2

                    text-bold-blue
                    mb-6
                "
            >

                <ArrowLeft size={18}/>

                Kembali

            </button>

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

export default ProfileMitra;