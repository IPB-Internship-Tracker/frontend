import { useNavigate } from "react-router-dom";

import {
    House,
    ChartLine,
    Settings,
} from "lucide-react";

const SidebarMitra = () => {
    const navigate = useNavigate();
        const menuItems = [
        {
        label: "Dashboard",
        icon: House,
        path: "/dashboard-mitra",
        },

        {
        label: "Program Saya",
        icon: ChartLine,
        path: "/magang-list-mitra",
        },
    ];

    return (
        <aside className="fixed top-0 left-0w-64 min-h-screen bg-indigo-900 text-white flex flex-col">
            
            {/* Logo */}
            <div className="p-6 border-b border-indigo-500">
                <h1 className="text-2xl font-bold">ICON</h1>
                <p className="text-sm text-yellow-300">
                    IPB Career Opportunity Network
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">

            {/* MAIN MENU */}
                    {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className="
                                text-md
                                flex
                                items-center
                                gap-3
                                w-full
                                px-4
                                py-3
                                rounded-lg
                                hover:bg-indigo-700
                                transition ">
                            <Icon size={18} />

                            <span>
                                {item.label}
                            </span>
                        </button>
                    );
                    })}
            </nav>

            {/* SETTINGS */}
            <div className="p-4 border-t border-indigo-500">
                <button className="text-md flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-700 w-full">
                <Settings size={18} />
                <span>Pengaturan</span>
                </button>
            </div>
        </aside>
    );
};

export default SidebarMitra;