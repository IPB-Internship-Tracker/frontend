import BidangCard from "../../components/cards/BidangCard";
import LamaranCard from "../../components/cards/LamaranCard";
import ReminderCard from "../../components/cards/ReminderCard";
import NextButton from "../../components/ui/NextButton";
import logoShopee from "../../assets/logo-shopee.png";
import ProgramSection from "../../components/cards/ProgramSection";

import { useState } from "react";
import PopUpNotif from "../../components/ui/PopUpNotif";
import Button from "../../components/ui/Button";
import {
  House,
  BriefcaseBusiness,
  Trophy,
  BookOpen,
  CheckCheck,
  CircleX,
  Contact,
  FileClock
} from "lucide-react";

//nyoba dummy data program
const magangPrograms = [
    {
        logo: logoShopee,
        title: "UI/UX Designer Internship",
        company: "Shopee Indonesia",
        category: "Design & Creative",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },

    {
        logo: logoShopee,
        title: "Data Analyst Internship",
        company: "Tokopedia",
        category: "Data & Analytics",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },

    {
        logo: logoShopee,
        title: "Digital Marketing Internship",
        company: "Blibli",
        category: "Marketing & Communication",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },

    {
        logo: logoShopee,
        title: "Software Engineer Internship",
        company: "Traveloka",
        category: "Information Technology",
        location: "Bandung",
        deadline: "30 Mei 2026",
    },
];
  TriangleAlert
} from "lucide-react";


const DashboardMhs = () => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div className="px-6 ">
            <h1 className="text-3xl font-bold text-indigo-700">
                Selamat Datang, <span className="text-indigo-900">Fatiyya</span>!
            </h1>

            {/* BIDANG CARD SECTION */}
            <div className="grid grid-cols-3 gap-6 mt-8">
                <BidangCard
                    icon = {
                        <BriefcaseBusiness size={50} className="text-yellow-400"/>
                    }
                    title = "Magang"
                />
                <BidangCard
                    icon = {
                        <Trophy size={50} className="text-yellow-400" />
                    }
                    title = "Kompetisi"
                />
                <BidangCard
                    icon = {
                        <BookOpen size={50} className="text-yellow-400" />
                    }
                    title = "Studi Independen"
                />
            </div>
            
            {/* AKTIVITAS SECTION */}
            <div className="grid grid-cols-3 gap-6 mt-10">

                {/* LEFT SIDE - AKTIVITASMU */}
                <div className="col-span-2">

                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-4">

                        {/* TITLE */}
                        <h2 className="
                            text-xl
                            font-bold
                            text-indigo-700
                        ">
                            Aktivitasmu
                        </h2>

                        {/* NEXT BUTTON */}
                        <NextButton
                            to="/lamaran-saya"
                            label="Selengkapnya"
                        />

                    </div>

                    {/* LAMARAN LIST */}
                    <div className="space-y-4">

                        <LamaranCard
                            logo={logoShopee}
                            title="UI/UX Designer Internship"
                            company="Shopee Indonesia"
                            status="Telah Mendaftar"
                        />

                        <LamaranCard
                            logo={logoShopee}
                            title="Data Analyst Internship"
                            company="Blibli.com"
                            status="Diterima"
                        />

                    </div>

                </div>


                 {/* RIGHT SIDE - REMINDER */}
                <div>
                    {/* HEADER */}
                    <div className="mb-4">

                        {/* TITLE */}
                        <h2 className="
                            text-xl
                            font-semibold
                            text-indigo-700
                        ">
                            Reminder
                        </h2>

                    </div>

                    {/* REMINDER LIST */}
                    <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">

                        <ReminderCard
                            title="Logbook Harian"
                            program="UI/UX Designer Internship"
                            deadline="Hari ini, 23.59"
                        />

                        <ReminderCard
                            title="Logbook Harian"
                            program="Data Analyst Internship"
                            deadline="Hari ini, 23.59"
                        />

                    </div>

                </div>

            {/* BUTTON TEST */}
            <div className="mt-10">
                <button
                    onClick={() => setOpenPopup(true)}
                    className="
                    bg-bold-blue
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    "
                >
                    Test Popup
                </button>

                {/* POPUP */}
                <PopUpNotif
                    isOpen={openPopup}
                    onClose={() => setOpenPopup(false)}

                    icon={
                    <TriangleAlert
                        size={90}
                        className="text-red-600"
                    />
                    }

                    title="Apakah Anda yakin?"

                    description="Data akan terhapus permanen."
                >

                    <Button
                    label="Kembali"
                    onClick={() => setOpenPopup(false)}
                    className="
                        border
                        border-bold-blue
                        text-bold-blue
                        bg-white
                    "
                    />

                    <Button
                    label="Hapus"
                    onClick={() => {
                        console.log("DELETE");
                        setOpenPopup(false);
                    }}
                    className="
                        bg-red-500
                        text-white
                    "
                    />
                </PopUpNotif>
            </div>

            {/* EXPLORE SECTION */}
            <div className="mt-8">
                <h2 className="
                    text-xl
                    font-bold
                    text-indigo-700
                    mb-4
                ">
                    Eksplor program-program sesuai minat mu!
                </h2>

                <ProgramSection
                    sectionTitle="Program Magang"
                    buttonTo="/program-magang"
                    programs={magangPrograms}
                />

                <ProgramSection
                    sectionTitle="Kompetisi"
                    buttonTo="/kompetisi"
                    programs={magangPrograms}
                />

                <ProgramSection
                    sectionTitle="Studi Independen"
                    buttonTo="/studi-independen"
                    programs={magangPrograms}
                />

            </div>

        </div>
        
    );
};

export default DashboardMhs;