import KategoriCard from "../../components/cards/KategoriCard";
import SearchBar from "../../components/ui/SearchBar";
import ProgramCard from "../../components/cards/ProgramCard";
import logoShopee from "../../assets/logo-shopee.png";
import {useState} from "react";
import Pagination from "../../components/ui/Pagination";

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


const KompetisiListMhs = () => {

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

            <div className="mt-8 space-y-4">
                <h1 className="text-2xl font-semibold text-bold-blue mb-2">
                    Kompetisi
                    
                </h1>
                <h2 className="text-lg text-bold-blue mb-3">
                    Jelajahi kompetisi yang cocok untukmu!
                    
                </h2>
            </div>

            <div className=
                "border-b border-indigo-200 mt-10">
            </div>

            {/* PROGRAM SECTION */}
            <div className="mt-10">
                <div className="grid grid-cols-3 gap-6">
                    {currentPrograms.map((program, index) => (
                        <ProgramCard
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
export default KompetisiListMhs;
