import Button from "../../components/ui/Button";
import TrafikCard from "../../components/cards/TrafikCard";
import ProgramStatus from "../../components/ui/ProgramStatus";
import ProgramListCard from "../../components/cards/ProgramListCard";
import ReminderCard from "../../components/cards/ReminderCard";
import logoShopee from "../../assets/logo-shopee.png";
import PopUpNotif from "../../components/ui/PopUpNotif";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import{
    BriefcaseBusiness,
    Trophy,
    BookOpen,
    UserRoundPlus,
    X,
    ArrowRight,
} from "lucide-react";

const userData = {
    name: "Shopee Indonesia"
};

const trafficData = [
  {
    id: 1,
    title: "Magang",
    icon: (
      <BriefcaseBusiness size={45} />
    ),
    programCount: 2,
    participantCount: 200,
  },

  {
    id: 2,
    title: "Kompetisi",
    icon: (
      <Trophy size={45} />
    ),
    programCount: 1,
    participantCount: 75,
  },

  {
    id: 3,
    title: "Studi Independen",
    icon: (
      <BookOpen size={45} />
    ),
    programCount: 1,
    participantCount: 200,
  },
];

{/* DUMMY PROGRAM */}
const programs = [

  {
    id: 1,
    logo: logoShopee,
    title: "UI/UX Designer Internship",
    category: "Program Magang",
    company: "Shopee Indonesia",
    participantInfo:
      "Total: 100 Pendaftar",
    status: "Registrasi Dibuka",
    period: "1 Januari - 31 Januari"
  },

  {
    id: 2,
    logo: logoShopee,
    title: "Ayo Belajar Figma",
    category: "Program Studi Independen",
    participantInfo:
      "Total: 100 Pendaftar",
    status: "Registrasi Dibuka",
    company: "Shopee Indonesia",
    period: "1 Januari - 31 Januari"

  },

  {
    id: 3,
    logo: logoShopee,
    title: "MedStud Competition",
    category: "Program Kompetisi",
    participantInfo:
      "Total: 100 Pendaftar",
    status: "Registrasi Dibuka",
    company: "Shopee Indonesia",
    period: "1 Januari - 31 Januari"
  },
    {
        id: 4,
        logo: logoShopee,
        title: "MedStud Competition",
        category: "Program Kompetisi",
        participantInfo:
        "Total: 100 Pendaftar",
        status: "Registrasi Dibuka",
        company: "Shopee Indonesia",
        period: "1 Januari - 31 Januari"
    },

    {
        id: 5,
        logo: logoShopee,
        title: "MedStud Competition",
        category: "Program Kompetisi",
        participantInfo:
        "Total: 100 Pendaftar",
        status: "Registrasi Dibuka",
        company: "Shopee Indonesia",
        period: "1 Januari - 31 Januari"
    }
];

const DashboardMitra = () => {
    const StatusComponent = ProgramStatus; 
    const navigate = useNavigate();
    const getDetailRoute = (program) => {
    // MAGANG
    if (
        program.category ===
        "Program Magang"
    ) {
        return `/magang-detail-mitra/${program.id}`;
    }

    // KOMPETISI
    else if (
        program.category ===
        "Program Kompetisi"
    ) {
        return `/kompetisi-detail-mitra/${program.id}`;
    }

    // STUDI INDEPENDEN
    else {
        return `/studi-independen-detail-mitra/${program.id}`;
    }
};
    const [openCreatePopup, setOpenCreatePopup] =
        useState(false);

    return (
        <div>

            {/* TOP SECTION */}
            <div className="
                flex
                items-center
                justify-between
                mb-5
            ">
                
                <h1 className="text-3xl font-bold text-light-blue">
                    Selamat Datang,
                    <span className="text-bold-blue">
                        {" "}{userData.name}
                    </span>!
                </h1>

                {/* BUTTON */}
                <Button
                    label = "+ Buat Kegiatan"
                    onClick={() =>
                    setOpenCreatePopup(true)
                }

                className="text-md px-4 py-2"
                />
            </div>
            
            {/* TRAFIK PROGRAM SECTION */}
            <div className="mt-6">
                <h2 className="
                    text-xl
                    font-bold
                    text-bold-blue
                    mb-6
                ">
                    Trafik Program
                </h2>

                {/* BIDANG PROGRAM MITRA */}
                <div className="grid grid-cols-3 gap-6">
                    {trafficData.map((item) => (
                        <TrafikCard
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                            programCount={
                                item.programCount
                            }
                            participantCount={
                                item.participantCount
                            }
                        />
                    ))}
                </div>
            </div>

            {/* IMPORT LAMARAN CARD untuk ProgramCard Mitra*/}
            <div className="grid grid-cols-3 gap-6 mt-8">
                {/* PROGRAM ANDA */}
                <div className="col-span-2">

                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-4
                    ">

                        {/* TITLE */}
                        <h2 className="
                            text-xl
                            font-bold
                            text-bold-blue
                        ">
                            Program Anda
                        </h2>

                        {/* SELENGKAPNYA */}
                        <button
                            onClick={() =>
                                navigate("/program-list-mitra")
                            }
                            className="
                                flex
                                items-center
                                gap-1

                                text-sm
                                text-bold-blue

                                hover:underline
                                cursor-pointer
                            "
                        >
                            Selengkapnya

                            <ArrowRight size={16}/>
                        </button>

                    </div>


                    <div className="space-y-4">

                    {programs.map((program) => (

                        <ProgramListCard
                            key={program.id}
                            logo={program.logo}
                            title={program.title}
                            company={(program.company)}
                            category={program.category}
                            participantInfo={
                                program.participantInfo
                            }
                            period={program.period}
                            status={program.status}
                            statusComponent={
                                StatusComponent
                            }
                            to={`/magang-detail-mitra/${program.id}`}
                        />
                    ))}
                    </div>
                 </div>

                {/* DRAFT MITRA */}
                <div className="mb-3">
                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-3
                    ">

                        {/* TITLE */}
                        <h2 className="
                            text-xl
                            font-bold
                            text-bold-blue
                        ">
                            Selesaikan Publikasi Anda
                        </h2>

                        {/* SELENGKAPNYA */}
                        <button
                            onClick={() =>
                                navigate("/draft-list")
                            }
                            className="
                                flex
                                items-center
                                gap-1

                                text-sm
                                text-bold-blue

                                hover:underline
                                cursor-pointer
                            "
                        >
                            Selengkapnya

                            <ArrowRight size={16}/>
                        </button>

                    </div>
                    


                    {/* REMINDER LIST */}
                    <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">

                        <ReminderCard
                            title="Business Development Internship"
                            program="Program Magang"
                            status="Draft"
                            to="/edit-magang/1"
                        />

                        <ReminderCard
                            title="Business Development Internship"
                            program="Program Magang"
                            status="Draft"
                            to="/draft-kompetisi/2"
                        />
                    </div>

                </div>

            </div>

            {/* POPUP CREATE PROGRAM */}
            <PopUpNotif
                isOpen={openCreatePopup}
                onClose={() =>
                    setOpenCreatePopup(false)
                }
                title="Buat Kegiatan"
                description=""
            >
                <div className="w-full space-y-4">
                    {/* MAGANG */}
                    <button
                        onClick={() =>
                            navigate("/create-magang")
                        }
                        className="
                            w-full
                            border
                            border-light-blue
                            rounded-2xl
                            p-5
                            flex
                            items-center
                            gap-5
                            hover:bg-light-blue-2
                            transition
                            cursor-pointer
                        "
                    >
                        <BriefcaseBusiness
                            size={25}
                            className="text-bold-blue"
                        />
                        <span className="text-lg font-medium">
                            Magang
                        </span>
                    </button>

                    {/* KOMPETISI */}
                    <button
                    onClick={() =>
                        navigate("/create-kompetisi")
                        }
                        className="
                            w-full
                            border
                            border-light-blue
                            rounded-2xl
                            p-5
                            flex
                            items-center
                            gap-5
                            hover:bg-light-blue-2
                            transition
                            cursor-pointer
                        "
                    >
                        <Trophy
                            size={25}
                            className="text-bold-blue"
                        />
                        <span className="text-lg font-medium">
                            Kompetisi
                        </span>
                    </button>

                    {/* STUPEN */}
                    <button
                    onClick={() =>
                        navigate("/create-studi-independen")
                        }
                        className="
                            w-full
                            border
                            border-light-blue
                            rounded-2xl
                            p-5
                            flex
                            items-center
                            gap-5
                            hover:bg-light-blue-2
                            transition
                            cursor-pointer
                        "
                    >
                        <BookOpen
                            size={25}
                            className="text-bold-blue"
                        />
                        <span className="text-lg font-medium">
                            Studi Independen
                        </span>
                    </button>
                </div>
            </PopUpNotif>
        
        </div>
    );
};

export default DashboardMitra;
