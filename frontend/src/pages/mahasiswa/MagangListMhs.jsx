import KategoriCard from "../../components/cards/KategoriCard";
import SearchBar from "../../components/ui/SearchBar";
import MagangCard from "../../components/cards/MagangCard";
import logoShopee from "../../assets/logo-shopee.png";
import {useState} from "react";
import Pagination from "../../components/ui/Pagination";


import {
    MonitorCog,
    ChartColumnBig,
    HandCoins,
    MessageCircleHeart,
    BadgeDollarSign,
    UserStar,
    Truck,
    ScrollText,
    Palette,
    Wrench,
    Microscope,
    Handshake,
    Scale,
    HeartPulse,
} from "lucide-react";

const categories = [

    {
        title: "Information Technology",
        icon: <MonitorCog size={40}/>,
    },

    {
        title: "Data & Analytics",
        icon: <ChartColumnBig size={40} />,
    },

    {
        title: "Business & Management",
        icon: <HandCoins size={40} />,
    },

    {
        title: "Marketing & Communication",
        icon: <MessageCircleHeart size={35}/>,
    },

    {
        title: "Finance & Accounting",
        icon: <BadgeDollarSign size={40} />,
    },

    {
        title: "Human Resources (HR)",
        icon: <UserStar size={40} />,
    },

    {
        title: "Operations & Logistics",
        icon: <Truck size={40} />,
    },

    {
        title: "Administration",
        icon: <ScrollText size={40} />,
    },

    {
        title: "Design & Creative",
        icon: <Palette size={40} />,
    },

    {
        title: "Engineering",
        icon: <Wrench size={40} />,
    },

    {
        title: "Research & Development",
        icon: <Microscope size={40} />,
    },

    {
        title: "Sales & Business Development",
        icon: <Handshake size={40} />,
    },

    {
        title: "Legal",
        icon: <Scale size={40} />,
    },

    {
        title: "Healthcare / Life Sciences",
        icon: <HeartPulse size={40} />,
    },

];

const programs = [

    {
        id: 1,
        logo: logoShopee,
        title: "UI/UX Designer Internship",
        company: "Shopee Indonesia",
        category: "Design & Creative",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 2,
        logo: logoShopee,
        title: "Data Analyst Internship",
        company: "Tokopedia",
        category: "Data & Analytics",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 3,
        logo: logoShopee,
        title: "Digital Marketing Internship",
        company: "Blibli",
        category: "Marketing & Communication",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 4,
        logo: logoShopee,
        title: "Software Engineer Internship",
        company: "Traveloka",
        category: "Information Technology",
        location: "Bandung",
        deadline: "30 Mei 2026",
    },

    {
        id: 5,
        logo: logoShopee,
        title: "UI/UX Designer Internship",
        company: "Shopee Indonesia",
        category: "Design & Creative",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 6,
        logo: logoShopee,
        title: "Data Analyst Internship",
        company: "Tokopedia",
        category: "Data & Analytics",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 7,
        logo: logoShopee,
        title: "Digital Marketing Internship",
        company: "Blibli",
        category: "Marketing & Communication",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 8,
        logo: logoShopee,
        title: "Software Engineer Internship",
        company: "Traveloka",
        category: "Information Technology",
        location: "Bandung",
        deadline: "30 Mei 2026",
    },

    {
        id: 9,
        logo: logoShopee,
        title: "UI/UX Designer Internship",
        company: "Shopee Indonesia",
        category: "Design & Creative",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 10,
        logo: logoShopee,
        title: "Data Analyst Internship",
        company: "Tokopedia",
        category: "Data & Analytics",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 11,
        logo: logoShopee,
        title: "Digital Marketing Internship",
        company: "Blibli",
        category: "Marketing & Communication",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 12,
        logo: logoShopee,
        title: "Software Engineer Internship",
        company: "Traveloka",
        category: "Information Technology",
        location: "Bandung",
        deadline: "30 Mei 2026",
    },

    {
        id: 13,
        logo: logoShopee,
        title: "UI/UX Designer Internship",
        company: "Shopee Indonesia",
        category: "Design & Creative",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 14,
        logo: logoShopee,
        title: "Data Analyst Internship",
        company: "Tokopedia",
        category: "Data & Analytics",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 15,
        logo: logoShopee,
        title: "Digital Marketing Internship",
        company: "Blibli",
        category: "Marketing & Communication",
        location: "Jakarta",
        deadline: "28 Mei 2026",
    },
    
    {
        id: 16,
        logo: logoShopee,
        title: "Software Engineer Internship",
        company: "Traveloka",
        category: "Information Technology",
        location: "Bandung",
        deadline: "30 Mei 2026",
    },

];


const MagangListMhs = () => {

    // STATE
    const [currentPage, setCurrentPage] = useState(1);

    // PAGINATION LOGIC
    const programsPerPage = 12;
    const lastIndex = currentPage * programsPerPage;
    const firstIndex = lastIndex - programsPerPage;
    const currentPrograms = programs.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(programs.length / programsPerPage);

    return (

        <div>
            {/* SEARCHBAR SECTION */}
            <div className="mb-8">
                <SearchBar
                    placeholder = "Cari..."
                />

            </div>

            {/* CATEGORY SECTION */}
            <div className="mt-8 space-y-4">
                <h1 className="text-2xl font-semibold text-bold-blue mb-2">
                    Magang
                    
                </h1>
                <h2 className="text-lg text-bold-blue mb-3">
                    Jelajahi program magang sesuai bidang yang kamu minati!
                    
                </h2>
                {/* CATEGORY LIST */}
                <div
                    className="
                        flex
                        gap-4
                        overflow-x-auto
                        scrollbar-hide
                    "
                >

                    {categories.map((category, index) => (

                        <KategoriCard
                            key={index}
                            icon={category.icon}
                            title={category.title}
                        />

                    ))}

                </div>

            </div>

            <div className=
                "border-b border-indigo-200 mt-10">
            </div>

            {/* PROGRAM SECTION */}
            <div className="mt-10">
                <div className="grid grid-cols-3 gap-6">
                    {currentPrograms.map((program, index) => (
                        <MagangCard
                            key={index}
                            logo={program.logo}
                            title={program.title}
                            company={program.company}
                            category={program.category}
                            location={program.location}
                            deadline={program.deadline}
                            to={`/magang-detail/${program.id}`}
                        />
                    
                    ))}

                    

                </div>

            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />      
            
            
            
        </div>
    );
};
export default MagangListMhs;
