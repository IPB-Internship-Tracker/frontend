import {
    Bell,
    ChevronDown,
} from "lucide-react";

import logoShopee from "../../../assets/logo-shopee.png";

const TopbarMitra = () => {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-end items-center">

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">

                {/* NOTIFICATIION */}
                <button className="text-indigo-800 hover:text-indigo-600 transition">
                    <Bell size={20}/>
                </button>


                { /* PROFILE */}
                <div className="flex items-center gap-3 cursor-pointer">
                    {/* AVATAR */}
                    <img
                        src={logoShopee}
                        alt="Logo Shopee"
                        className="w-8 h-8.rounded object-contain"
                    />
                    
                    {/* NAME */}
                    <span className="text-sm font-regular text-gray-800">
                        Shopee Indonesia
                    </span>

                    {/* DROPDOWN */}
                    <ChevronDown size={18} className="text-gray-600"/>
                </div>



            </div>

        </header>
    );

};

export default TopbarMitra;