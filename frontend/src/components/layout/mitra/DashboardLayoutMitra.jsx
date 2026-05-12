import SidebarMitra from "./SidebarMitra";
import TopbarMitra from "./TopbarMitra";
import { Outlet } from "react-router-dom";

const DashboardLayoutMitra = () => {
    return (
        <div className="flex bg-gray-100">

            {/* SIDEBAR */}
             <SidebarMitra />

             {/* RIGHT SIDE */}
            <div className="flex-1 flex flex-col">

                {/* TOPBAR */}
                <TopbarMitra />

                 {/* CONTENT */}
                <main className="p-8">
                    < Outlet />
                </main>

            </div>
        </div>
    );
};

export default DashboardLayoutMitra;