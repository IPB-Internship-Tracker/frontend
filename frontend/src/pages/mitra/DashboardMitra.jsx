import Button from "../../components/ui/Button";
import TrafikCard from "../../components/cards/TrafikCard";
import ProgramStatus from "../../components/ui/ProgramStatus";
import ProgramListCard from "../../components/cards/ProgramListCard";
import ReminderCard from "../../components/cards/ReminderCard";
import logoShopee from "../../assets/logo-shopee.png";


import{
    BriefcaseBusiness,
    Trophy,
    BookOpen,
    UserRoundPlus,
} from "lucide-react";

const DashboardMitra = () => {
    const StatusComponent = ProgramStatus; 
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
                        {" "}Shopee Indonesia
                    </span>!
                </h1>

                {/* BUTTON */}
                <Button
                    label="+ Buat Kegiatan"
                    to="/create-magang"

                    className="text-md px-2 py-2 gap 3"
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

                    <TrafikCard
                        title="Magang"
                        icon={<BriefcaseBusiness size={45} />}

                        programCount={2}
                        participantCount={200}
                    />
                    <TrafikCard
                        title="Kompetisi"
                        icon={<Trophy size={45} />}

                        programCount={1}
                        participantCount={75}
                    />
                    <TrafikCard
                        title="Studi Independen"
                        icon={<BookOpen size={45} />}
                        programCount={1}
                        participantCount={200}
                    />
                    

                </div>

            </div>

            {/* IMPORT LAMARAN CARD untuk ProgramCard Mitra*/}
            <div className="grid grid-cols-3 gap-6 mt-8">
                {/* PROGRAM ANDA */}
                <div className="col-span-2">

                    <h2 className="
                        text-xl
                        font-bold
                        text-bold-blue
                        mb-4
                    ">
                        Program Anda
                    </h2>

                    <div className="space-y-4">
    
                        <ProgramListCard
                            logo={logoShopee}
                            title="UI/UX Designer Internship"
                            category="Program Magang"
                            participantInfo="Total: 100 Pendaftar"
                            status="Registrasi Dibuka"
                            statusComponent={StatusComponent}
                            to="/magang-detail-mitra"
                        />

                    </div>

                 </div>

                {/* DRAFT MITRA */}
                <div className="mb-3">
                    <h2 className="
                        mb-3
                        text-xl
                        font-bold
                        text-bold-blue
                    ">
                        Selesaikan Publikasi Anda
                    </h2>
                    {/* REMINDER LIST */}
                    <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">

                        <ReminderCard
                            title="Business Development Internship"
                            program="Program Magang"
                            status="Draft"
                            to="/magang-list-mitra"
                        />

                        <ReminderCard
                            title="Business Development Internship"
                            program="Program Magang"
                            status="Draft"
                            to="/magang-list-mitra"
                        />

                    </div>

                </div>

            </div>
            

        </div>
    );
};

export default DashboardMitra;
