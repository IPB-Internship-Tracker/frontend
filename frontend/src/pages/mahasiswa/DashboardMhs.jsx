import BidangCard from "../../components/cards/BidangCard";
import { useState } from "react";
import PopUpNotif from "../../components/ui/PopUpNotif";
import Button from "../../components/ui/Button";
import {
  House,
  BriefcaseBusiness,
  Trophy,
  BookOpen,
  TriangleAlert
} from "lucide-react";


const DashboardMhs = () => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div>
            <h1 className="text-3xl font-bold text-indigo-700">
                Selamat Datang, <span className="text-indigo-900">Fatiyya</span>!
            </h1>

            {/* CARD SECTION */}
            <div className="grid grid-cols-3 gap-6 mt-8">
                <BidangCard
                    icon = {
                        <BriefcaseBusiness size={70} className="text-yellow-500" />
                    }
                    title = "Magang"
                />
                <BidangCard
                    icon = {
                        <Trophy size={70} className="text-yellow-500" />
                    }
                    title = "Kompetisi"
                />
                <BidangCard
                    icon = {
                        <BookOpen size={70} className="text-yellow-500" />
                    }
                    title = "Studi Independen"
                />
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
        </div>
        
    );
};

export default DashboardMhs;