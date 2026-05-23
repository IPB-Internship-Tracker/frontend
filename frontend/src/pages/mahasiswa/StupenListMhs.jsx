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
    title: "Machine Learning Engineer Path",
    company: "Dicoding Indonesia",
    deadline: "28 Mei 2026",
  },

  {
    id: 2,
    logo: logoShopee,
    title: "Frontend Web Development",
    company: "Tokopedia",
    deadline: "30 Mei 2026",
  },

  {
    id: 3,
    logo: logoShopee,
    title: "UI/UX Design Intensive Program",
    company: "Shopee Indonesia",
    deadline: "1 Juni 2026",
  },

  {
    id: 4,
    logo: logoShopee,
    title: "Cloud Computing Learning Path",
    company: "Google Indonesia",
    deadline: "5 Juni 2026",
  },

  {
    id: 5,
    logo: logoShopee,
    title: "Cyber Security Fundamentals",
    company: "Traveloka",
    deadline: "28 Mei 2026",
  },

  {
    id: 6,
    logo: logoShopee,
    title: "Digital Product Management",
    company: "Blibli",
    deadline: "30 Mei 2026",
  },

  {
    id: 7,
    logo: logoShopee,
    title: "Data Science Bootcamp",
    company: "Ruangguru",
    deadline: "2 Juni 2026",
  },

  {
    id: 8,
    logo: logoShopee,
    title: "Backend Developer Program",
    company: "Gojek",
    deadline: "7 Juni 2026",
  },

  {
    id: 9,
    logo: logoShopee,
    title: "Artificial Intelligence Program",
    company: "Microsoft Indonesia",
    deadline: "10 Juni 2026",
  },

  {
    id: 10,
    logo: logoShopee,
    title: "Mobile App Development",
    company: "Shopee Indonesia",
    deadline: "28 Mei 2026",
  },

  {
    id: 11,
    logo: logoShopee,
    title: "Game Development Academy",
    company: "Agate",
    deadline: "3 Juni 2026",
  },

  {
    id: 12,
    logo: logoShopee,
    title: "DevOps Engineering Program",
    company: "AWS Indonesia",
    deadline: "6 Juni 2026",
  },

  {
    id: 13,
    logo: logoShopee,
    title: "Business Intelligence Analytics",
    company: "Bukalapak",
    deadline: "8 Juni 2026",
  },

  {
    id: 14,
    logo: logoShopee,
    title: "Fullstack JavaScript Program",
    company: "Hacktiv8",
    deadline: "30 Mei 2026",
  },

  {
    id: 15,
    logo: logoShopee,
    title: "Software Quality Assurance",
    company: "Traveloka",
    deadline: "1 Juni 2026",
  },

  {
    id: 16,
    logo: logoShopee,
    title: "Blockchain Developer Path",
    company: "Binance Academy",
    deadline: "12 Juni 2026",
  },

];


const StupenListMhs = () => {

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
                    Studi Independen
                    
                </h1>
                <h2 className="text-lg text-bold-blue mb-3">
                    Jelajahi program Studi Independen yang cocok untukmu!
                    
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
                            to={`/studi-independen-detail/${program.id}`}
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
export default StupenListMhs;
