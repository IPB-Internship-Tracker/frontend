import {useState} from 'react';
import {
    House,
    BriefcaseBusiness,
    Trophy,
    BookOpen,
    ChartNoAxesColumn,
    ChevronUp,
    ChevronDown,
    Settings,
} from "lucide-react";

const SidebarMhs = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className="w-64 min-h-screen bg-indigo-900 text-white flex flex-col">
            
            {/* Logo */}
            <div className="p-6 border-b border-indigo-500">
                <h1 className="text-2xl font-bold">ICON</h1>
                <p className="text-sm text-yellow-300">
                    IPB Career Opportunity Network
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">

                {/* BERANDA */}
                <button className="text-md flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition">
                <House size={18} />
                <span>Beranda</span>
                </button>

                {/* MAGANG */}
                <button className="text-md flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-indigo-700 transition">
                <BriefcaseBusiness size={18} />
                <span>Magang</span>
                </button>

                {/* KOMPETISI */}
                <button className="text-md flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-indigo-700 transition">
                <Trophy size={18} />
                <span>Kompetisi</span>
                </button>

                {/* STUDI INDEPENDEN */}
                <button className="text-md flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-indigo-700 transition">
                <BookOpen size={18} />
                <span>Studi Independen</span>
                </button>

                {/* DROPDOWN */}
                <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                    <div className="text-md flex items-center gap-3">
                    <ChartNoAxesColumn size={18} />
                    <span>Aktivitas</span>
                    </div>

                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                </button>

                {/* SUBMENU */}
                {isOpen && (
                    <div className="ml-8 mt-2 space-y-2 text-sm">
                    <p className="text-md hover:text-yellow-300 cursor-pointer">
                        Lamaran Saya
                    </p>

                    <p className="text-md hover:text-yellow-300 cursor-pointer">
                        Logbook
                    </p>

                    <p className="text-md hover:text-yellow-300 cursor-pointer">
                        Wishlist
                    </p>
                    </div>
                )}
                </div>
            </nav>

            {/* SETTINGS */}
            <div className="p-4 border-t border-indigo-500">
                <button className="text-md flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-700 w-full">
                <Settings size={20} />
                <span>Pengaturan</span>
                </button>
            </div>

        </aside>
    );
};

export default SidebarMhs;