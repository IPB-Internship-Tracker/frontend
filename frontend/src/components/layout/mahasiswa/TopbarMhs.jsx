import {
    Bell,
    ChevronDown,
} from "lucide-react";

import fotoMhs from "../../../assets/profile-mahasiswa.jpg";

const TopbarMhs = () => {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-end items-center">

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">

                {/* NOTIFICATION */}
                <button className="text-indigo-800 hover:text-indigo-600 transition">
                    <Bell size={20}/>
                </button>

                {/* PROFILE */}
                <div className="flex items-center gap-3 cursor-pointer">

                    {/* AVATAR */}
                    <img
                        src={fotoMhs}
                        alt="Foto Mahasiswa"
                        className="w-7 h-7 rounded-full object-cover"
                    />

                    {/* NAME */}
                    <span className="text-sm font-regular text-gray-800">
                        Fatiyya Ilmi Zahra
                    </span>

                    {/* DROPDOWN */}
                    <ChevronDown size={18} className="text-gray-600"/>
                </div>

            </div>

        </header>
    );
};

export default TopbarMhs;