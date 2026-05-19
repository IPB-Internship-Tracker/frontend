import Button from "../../components/ui/Button";
import TrafikCard from "../../components/cards/TrafikCard";
import LamaranCard from "../../components/cards/LamaranCard";
import ProgramStatus from "../../components/ui/ProgramStatus";
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
            <div className="grid grid-cols-2 gap-4 mt-8">
                {/* PROGRAM ANDA */}
                <div className="mt-10">

                    <h2 className="
                        text-xl
                        font-bold
                        text-bold-blue
                        mb-4
                    ">
                        Program Anda
                    </h2>

                    <div className="space-y-4">

                        <LamaranCard
                            logo={logoShopee}
                            title="UI/UX Designer Internship"
                            bidang="Program Magang"
                            participantInfo="Total: 100 Pendaftar"
                            status="Registrasi Dibuka"
                            statusComponent={StatusComponent}
                        />

                    </div>

                 </div>

            </div>
            

        </div>
    );
};

export default DashboardMitra;
