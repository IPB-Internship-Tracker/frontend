import BidangCard from "../../components/cards/BidangCard";
import LamaranCard from "../../components/cards/LamaranCard";
import ReminderCard from "../../components/cards/ReminderCard";
import NextButton from "../../components/ui/NextButton";
import logoShopee from "../../assets/logo-shopee.png";
import MagangSection from "../../components/cards/MagangSection";
import LamaranStatus from "../../components/ui/LamaranStatus";
import { useNavigate } from "react-router-dom";
import KompeStupenSection from "../../components/cards/KompeStupenSection";

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

const userData = {
    name: "Fatiyya Ilmi"
};

const aktivitasData = [

    {
        id: 1,
        logo: logoShopee,
        title: "UI/UX Designer Internship",
        company: "Shopee Indonesia",
        status: "Telah Mendaftar",
    },

    {
        id: 2,
        logo: logoShopee,
        title: "Data Analyst Internship",
        company: "Blibli.com",
        status: "Diterima",
    },

    {
        id: 3,
        logo: logoShopee,
        title: "Frontend Developer Internship",
        company: "Tokopedia",
        status: "Wawancara",
    },

    {
        id: 4,
        logo: logoShopee,
        title: "Backend Internship",
        company: "Traveloka",
        status: "Ditolak",
    },

];

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

const reminderData = [

    {
        id: 1,
        title: "Logbook Harian",
        program: "UI/UX Designer Internship",
        deadline: "Hari ini, 23.59",
    },

    {
        id: 2,
        title: "Logbook Harian",
        program: "Data Analyst Internship",
        deadline: "Hari ini, 23.59",
    },

    {
        id: 3,
        title: "Logbook Harian",
        program: "Frontend Developer Internship",
        deadline: "Hari ini, 23.59",
    },

    {
        id: 4,
        title: "Logbook Harian",
        program: "Backend Internship",
        deadline: "Hari ini, 23.59",
    },

];

const DashboardMhs = () => {

    const StatusComponent = LamaranStatus;
    const navigate = useNavigate();
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-bold-blue">
                Selamat Datang, <span className="text-bold-blue">{userData.name}</span>!
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
                            to="/lamaran-list"
                            label="Selengkapnya"
                        />

                    </div>

                    {/* LAMARAN LIST */}
                    <div className="space-y-4">

                        {
                            aktivitasData
                            .slice(0, 3)
                            .map((item) => (

                                <div
                                    key={item.id}

                                    onClick={() =>
                                        navigate(
                                            `/lamaran-detail/${item.id}`
                                        )
                                    }

                                    className="
                                        cursor-pointer
                                    "
                                >

                                    <LamaranCard
                                        logo={item.logo}
                                        title={item.title}
                                        company={item.company}
                                        status={item.status}
                                        statusComponent={StatusComponent}
                                    />

                                </div>

                            ))
                        }

                    </div>

                </div>


                 {/* RIGHT SIDE - REMINDER */}
                <div>
                    {/* HEADER */}
                    <div className="
                        flex
                         items-center
                        justify-between
                        mb-3
                    ">

                        {/* TITLE */}
                        <h2 className="
                            text-xl
                            font-semibold
                            text-bold-blue
                        ">
                            Reminder
                        </h2>
                        <NextButton
                            to="/logbook-list"
                            label="Selengkapnya"
                        />

                    </div>

                    {/* REMINDER LIST */}
                    <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">

                        {
                            reminderData
                            .slice(0, 3)
                            .map((item) => (

                                <div
                                    key={item.id}

                                    onClick={() =>
                                        navigate(
                                            `/logbook-detail/${item.id}`
                                        )
                                    }

                                    className="
                                        cursor-pointer
                                    "
                                >

                                    <ReminderCard
                                        title={item.title}
                                        program={item.program}
                                        deadline={item.deadline}
                                    />

                                </div>

                            ))
                        }

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

                <MagangSection
                    sectionTitle="Program Magang"
                    buttonTo="/magang-list"
                    programs={magangPrograms.map(
                        (item) => ({

                            ...item,

                            to: `/magang-detail/${item.id}`,

                        })
                    )}
                />

                <KompeStupenSection
                    sectionTitle="Kompetisi"
                    buttonTo="/kompetisi-list"
                    programs={magangPrograms.map(
                        (item) => ({

                            ...item,

                            to: `/kompetisi-detail/${item.id}`,

                        })
                    )}
                />

                <KompeStupenSection
                    sectionTitle="Studi Independen"
                    buttonTo="/stupen-list"
                    programs={magangPrograms.map(
                        (item) => ({

                            ...item,

                            to: `/studi-independen-detail/${item.id}`,

                        })
                    )}
                />

            </div>

        </div>
        
    );
};

export default DashboardMhs;