import SidebarMhs from "./SidebarMhs";
import TopbarMhs from "./TopbarMhs";

const DashboardLayoutMhs = ({ children }) => {
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
                    {children}
                </main>

            </div>

        </div>
    );
};

export default DashboardLayoutMhs;