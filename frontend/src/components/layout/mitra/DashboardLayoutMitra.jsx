import SidebarMitra from "./SidebarMitra";
import TopbarMitra from "./TopbarMitra";

const DashboardLayoutMitra = ({ children }) => {
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
                    {children}
                </main>

            </div>
        </div>
    );
};

export default DashboardLayoutMitra;