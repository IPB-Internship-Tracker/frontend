//import {useState} from 'react';
import {
    House,
    ChartLine,
    Settings,
} from "lucide-react";

const SidebarMitra = () => {
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

                {/* Dashboard */}
                <button className="text-md flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition">
                <House size={18} />
                <span>Dashboard</span>
                </button>

                {/* Program Saya */}
                <button className="text-md flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-indigo-700 transition">
                <ChartLine size={18} />
                <span>Program Saya</span>
                </button>
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