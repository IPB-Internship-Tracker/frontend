import SidebarMhs from "./SidebarMhs";
import TopbarMhs from "./TopbarMhs";
import { Outlet } from "react-router-dom";

const DashboardLayoutMhs = () => {
    return (
        <div className="flex bg-gray-100">

            {/* SIDEBAR */}
            <SidebarMhs />

            {/* RIGHT SIDE */}
            <div className="flex-1 flex flex-col">

                {/* TOPBAR */}
                <TopbarMhs />

                {/* CONTENT */}
                <main className="p-8">
                    < Outlet />
                </main>

            </div>

        </div>
    );
};

export default DashboardLayoutMhs;