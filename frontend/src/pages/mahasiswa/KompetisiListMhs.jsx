import KategoriCard from "../../components/cards/KategoriCard";
import SearchBar from "../../components/ui/SearchBar";
import KompeStupenCard from "../../components/cards/KompeStupenCard";
import logoShopee from "../../assets/logo-shopee.png";
import {useState} from "react";
import Pagination from "../../components/ui/Pagination";

const programs = [

  {
    id: 1,
    logo: logoShopee,
    title: "National UI/UX Design Competition",
    company: "Shopee Indonesia",
    deadline: "28 Mei 2026",
  },

  {
    id: 2,
    logo: logoShopee,
    title: "Data Science Innovation Challenge",
    company: "Tokopedia",
    deadline: "28 Mei 2026",
  },

  {
    id: 3,
    logo: logoShopee,
    title: "Digital Marketing Competition",
    company: "Blibli",
    deadline: "28 Mei 2026",
  },

  {
    id: 4,
    logo: logoShopee,
    title: "Hackathon 2026",
    company: "Traveloka",
    deadline: "30 Mei 2026",
  },

  {
    id: 5,
    logo: logoShopee,
    title: "Business Case Competition",
    company: "Shopee Indonesia",
    deadline: "28 Mei 2026",
  },

  {
    id: 6,
    logo: logoShopee,
    title: "AI Innovation Challenge",
    company: "Tokopedia",
    deadline: "28 Mei 2026",
  },

  {
    id: 7,
    logo: logoShopee,
    title: "Creative Content Competition",
    company: "Blibli",
    deadline: "28 Mei 2026",
  },

  {
    id: 8,
    logo: logoShopee,
    title: "Software Development Contest",
    company: "Traveloka",
    deadline: "30 Mei 2026",
  },

  {
    id: 9,
    logo: logoShopee,
    title: "UI/UX Mobile App Challenge",
    company: "Shopee Indonesia",
    deadline: "28 Mei 2026",
  },

  {
    id: 10,
    logo: logoShopee,
    title: "Machine Learning Competition",
    company: "Tokopedia",
    deadline: "28 Mei 2026",
  },

  {
    id: 11,
    logo: logoShopee,
    title: "Brand Strategy Competition",
    company: "Blibli",
    deadline: "28 Mei 2026",
  },

  {
    id: 12,
    logo: logoShopee,
    title: "Cyber Security Challenge",
    company: "Traveloka",
    deadline: "30 Mei 2026",
  },

  {
    id: 13,
    logo: logoShopee,
    title: "Startup Pitching Competition",
    company: "Shopee Indonesia",
    deadline: "28 Mei 2026",
  },

  {
    id: 14,
    logo: logoShopee,
    title: "Big Data Analytics Competition",
    company: "Tokopedia",
    deadline: "28 Mei 2026",
  },

  {
    id: 15,
    logo: logoShopee,
    title: "Creative Poster Competition",
    company: "Blibli",
    deadline: "28 Mei 2026",
  },

  {
    id: 16,
    logo: logoShopee,
    title: "National Programming Contest",
    company: "Traveloka",
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
                    Jelajahi kompetisi dan perlombaan yang cocok untukmu!
                </h2>
            </div>

            <div className=
                "border-b border-indigo-200 mt-10">
            </div>

            {/* PROGRAM SECTION */}
            <div className="mt-10">
                <div className="grid grid-cols-3 gap-6">
                    {currentPrograms.map((program, index) => (
                        <KompeStupenCard
                            key={index}
                            logo={program.logo}
                            title={program.title}
                            company={program.company}
                            deadline={program.deadline}
                            to={`/kompetisi-detail/${program.id}`}
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
