import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

  const navigate = useNavigate();
  const location = useLocation();

// main menu
  const menuItems = [
    {
      label: "Beranda",
      icon: House,
      path: "/dashboard-mahasiswa",
    },

    {
      label: "Magang",
      icon: BriefcaseBusiness,
      path: "/magang-list",
    },

    {
      label: "Kompetisi",
      icon: Trophy,
      path: "/kompetisi-list",
    },

    {
      label: "Studi Independen",
      icon: BookOpen,
      path: "/stupen-list",
    },
  ];

// sub menu aktivitas
  const aktivitasMenu = [
    {
      label: "Lamaran Saya",
      path: "/lamaran-list",
    },

    {
      label: "Logbook",
      path: "/logbook-list",
    },
  ];


    const [isOpen, setIsOpen] = useState(
      aktivitasMenu.some(
        (item) => item.path === location.pathname
      )
    );


  return (

    <aside className="fixed top-0 left-0 w-64 min-h-screen bg-indigo-900 text-white flex flex-col">

      {/* LOGO */}
      <div className="p-6 border-b border-indigo-500">

        <h1 className="text-2xl font-bold">
          ICON
        </h1>

        <p className="text-sm text-yellow-300">
          IPB Career Opportunity Network
        </p>

      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 p-4 space-y-2">

        {/* MAIN MENU */}
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (

            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`
                text-md
                flex
                items-center
                gap-3
                w-full
                px-4
                py-3
                rounded-xl
                transition

                ${
                  location.pathname === item.path
                    ? "bg-indigo-950 text-kuning-tua"
                    : "text-white hover:bg-indigo-700"
                }
              `}
            >

             <Icon
                size={18}
                className={
                  location.pathname === item.path
                    ? "text-kuning-tua"
                    : "text-white"
                }
              />

              <span>
                {item.label}
              </span>

            </button>
          );
        })}

        {/* DROPDOWN */}
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              items-center
              justify-between
              w-full
              px-4
              py-3
              rounded-lg
              hover:bg-indigo-700
              transition ">

            <div className="text-md flex items-center gap-3">
              <ChartNoAxesColumn size={18} />
              <span>Aktivitas</span>
            </div>

            {isOpen
              ? <ChevronUp />
              : <ChevronDown />
            }

          </button>

          {/* SUBMENU */}
          {isOpen && (

            <div className="ml-8 mt-2 space-y-2">

              {aktivitasMenu.map((item, index) => (

            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`
                block
                w-full
                text-left
                px-4
                py-2
                rounded-lg
                transition

                ${
                  location.pathname === item.path
                    ? "bg-indigo-950 text-kuning-tua"
                    : "text-white hover:text-kuning-tua"
                }
              `}
            >                          
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* SETTINGS */}
      <div className="p-4 border-t border-indigo-500">

        <button
          className="
            text-md
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            hover:bg-indigo-700
            w-full ">

          <Settings size={20} />
          <span>Pengaturan</span>
        </button>

      </div>

    </aside>
  );
};

export default SidebarMhs;