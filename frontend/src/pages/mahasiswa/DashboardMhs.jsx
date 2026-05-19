import BidangCard from "../../components/cards/BidangCard";
import LamaranCard from "../../components/cards/LamaranCard";
import ReminderCard from "../../components/cards/ReminderCard";
import NextButton from "../../components/ui/NextButton";
import logoShopee from "../../assets/logo-shopee.png";
import ProgramSection from "../../components/cards/ProgramSection";
import LamaranStatus from "../../components/ui/LamaranStatus";

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
        id: 1,
        logo: logoShopee,
        title: "UI/UX Designer Internship",
        company: "Shopee Indonesia",
        category: "Design & Creative",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },

    {
        id: 2,
        logo: logoShopee,
        title: "Data Analyst Internship",
        company: "Tokopedia",
        category: "Data & Analytics",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },

    {
        id: 3,
        logo: logoShopee,
        title: "Digital Marketing Internship",
        company: "Blibli",
        category: "Marketing & Communication",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },

    {
        id:4,
        logo: logoShopee,
        title: "Software Engineer Internship",
        company: "Traveloka",
        category: "Information Technology",
        location: "Bandung",
        deadline: "30 Mei 2026",
    },

    
];

const DashboardMhs = () => {

    const StatusComponent = LamaranStatus;

    return (
        <div>
            <h1 className="text-3xl font-bold text-bold-blue">
                Selamat Datang, <span className="text-bold-blue">Fatiyya</span>!
            </h1>

            {/* BIDANG CARD SECTION */}
            <div className="grid grid-cols-3 gap-6 mt-8">

                <BidangCard
                    icon = {
                        <BriefcaseBusiness size={60} className="text-kuning-tua"/>
                    }
                    title = "Magang"
                    to="/magang-list"
                />
                <BidangCard
                    icon = {
                        <Trophy size={60} className="text-kuning-tua" />
                    }
                    title = "Kompetisi"
                    to = "/kompetisi-list"
                />
                <BidangCard
                    icon = {
                        <BookOpen size={60} className="text-kuning-tua" />
                    }
                    title = "Studi Independen"
                    to ="/stupen-list"
                />
            </div>

            <div className=
                "border-b border-indigo-200 mt-8">
            </div>
            
            {/* AKTIVITAS SECTION */}
            <div className="grid grid-cols-3 gap-4 mt-8">

                {/* LEFT SIDE - AKTIVITASMU */}
                <div className="col-span-2">

                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-3">

                        {/* TITLE */}
                        <h2 className="
                            text-xl
                            font-bold
                            text-bold-blue
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
                            statusComponent={StatusComponent}
                        />

                        <LamaranCard
                            logo={logoShopee}
                            title="Data Analyst Internship"
                            company="Blibli.com"
                            status="Diterima"
                            statusComponent={StatusComponent}
                        />

                    </div>

                </div>


                 {/* RIGHT SIDE - REMINDER */}
                <div>
                    {/* HEADER */}
                    <div className="mb-3">

                        {/* TITLE */}
                        <h2 className="
                            text-xl
                            font-semibold
                            text-bold-blue
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

            </div>
            <div className=
                "border-b border-indigo-200 mt-8">
            </div>

            {/* EXPLORE SECTION */}
            <div className="mt-8">
                <h2 className="
                    text-xl
                    font-bold
                    text-bold-blue
                    mb-4
                ">
                    Eksplor program-program sesuai minat mu!
                </h2>

                <ProgramSection
                    sectionTitle="Program Magang"
                    buttonTo="/magang-list"
                    programs={magangPrograms}
                />

                <ProgramSection
                    sectionTitle="Kompetisi"
                    buttonTo="/kompetisi-list"
                    programs={magangPrograms}
                />

                <ProgramSection
                    sectionTitle="Studi Independen"
                    buttonTo="/stupen-list"
                    programs={magangPrograms}
                />

            </div>

        </div>
        
    );
};

export default DashboardMhs;