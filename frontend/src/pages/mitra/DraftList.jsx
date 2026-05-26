import { useState } from "react";
import { CircleAlert } from "lucide-react";
import SearchBar from "../../components/ui/SearchBar";
import FilterButton from "../../components/ui/FilterButton";
import Pagination from "../../components/ui/Pagination";
import BackButton from "../../components/ui/BackButton";
import ProgramListCard from "../../components/cards/ProgramListCard";
import PopUpNotif from "../../components/ui/PopUpNotif";
import logoShopee from "../../assets/logo-shopee.png";
import Button from "../../components/ui/Button";

const DraftList = () => {

    // FILTER CATEGORY
    const [selectedCategory, setSelectedCategory] =
        useState("Semua");

    // SEARCH
    const [search, setSearch] =
        useState("");

    // PAGINATION
    const [currentPage, setCurrentPage] =
        useState(1);

    // DUMMY DATA
    const [programs, setPrograms] =
    useState([
        {
            id: 1,
            logo: logoShopee,
            title: "UI/UX Designer Internship BATCH",
            company: "Shopee Indonesia",
            category: "Magang",
            status: "Draft",
        },

        {
            id: 2,
            logo: logoShopee,
            title: "Business Case Competition",
            company: "Shopee Indonesia",
            category: "Kompetisi",
            status: "Draft",
        },

        {
            id: 3,
            logo: logoShopee,
            title: "Data Analyst Learning Path",
            company: "Shopee Indonesia",
            category: "Studi Independen",
            status: "Draft",
        },

        {
            id: 4,
            logo: logoShopee,
            title: "Ayo Belajar Figma",
            company: "Shopee Indonesia",
            category: "Studi Independen",
            status: "Draft"
        },

        {
            id: 5,
            logo: logoShopee,
            title: "MedStud Competition",
            company: "Shopee Indonesia",
            category: "Kompetisi",
            status: "Draft"
        },

        {
            id: 6,
            logo: logoShopee,
            title: "Digital Marketing Internship",
            company: "Shopee Indonesia",
            category: "Magang",
            status: "Draft"
        }
   ]);

    const [openDeletePopup, setOpenDeletePopup] =
    useState(false);

    const [selectedProgram, setSelectedProgram] =
    useState(null);

    const handleDeleteClick = (program) => {
        setSelectedProgram(program);
        setOpenDeletePopup(true);
    };

    // FILTER LOGIC
    const filteredPrograms = programs.filter(
        (program) => {
            // FILTER CATEGORY
            const matchCategory =
                selectedCategory === "Semua"
                ||
                program.category === selectedCategory;
            // SEARCH
            const matchSearch =
                program.title
                    .toLowerCase()
                    .includes(search.toLowerCase());

            return matchCategory && matchSearch;
        }
    );

    // PAGINATION
    const itemsPerPage = 4;

    const totalPages = Math.ceil(
        filteredPrograms.length / itemsPerPage
    );

    const startIndex =
        (currentPage - 1) * itemsPerPage;

    const currentPrograms =
        filteredPrograms.slice(
            startIndex,
            startIndex + itemsPerPage
        );

    const getEditProgram = (program) => {

    if (program.category === "Magang") {
        return `/edit-magang/${program.id}`;
    }

    if (program.category === "Kompetisi") {
        return `/edit-kompetisi/${program.id}`;
    }

    if (program.category === "Studi Independen") {
        return `/edit-studi-independen/${program.id}`;
    }

};

    return (
        <div>
            <BackButton
                label="Kembali"
                color="text-bold-blue"
                position="relative"
                to="/program-list-mitra"
            />

            {/* TITLE */}
            <h1 className="
                text-3xl
                font-bold
                text-indigo-700
                pt-6
            ">
                Draft Anda
            </h1>

            {/* SUBTITLE */}
            <p className="
                font-light
                mt-2
            ">
                Berikut adalah program yang telah Anda buat namun belum dipublikasikan.
            </p>

            {/* FILTER + SEARCH */}
            <div className="
                flex
                items-center
                justify-between
                gap-6
                mt-8
            ">

                {/* FILTER */}
                <div className="flex gap-2">

                    <FilterButton
                        label="Semua"
                        active={
                            selectedCategory === "Semua"
                        }
                        onClick={() =>
                            setSelectedCategory("Semua")
                        }
                    />

                    <FilterButton
                        label="Magang"
                        active={
                            selectedCategory === "Magang"
                        }
                        onClick={() =>
                            setSelectedCategory("Magang")
                        }
                    />

                    <FilterButton
                        label="Kompetisi"
                        active={
                            selectedCategory === "Kompetisi"
                        }
                        onClick={() =>
                            setSelectedCategory("Kompetisi")
                        }
                    />

                    <FilterButton
                        label="Studi Independen"
                        active={
                            selectedCategory ===
                            "Studi Independen"
                        }
                        onClick={() =>
                            setSelectedCategory(
                                "Studi Independen"
                            )
                        }
                    />

                </div>

                {/* SEARCH */}
                <div className="w-[420px]">

                    <SearchBar
                        placeholder="Cari program..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

            </div>

            {/* CARD LIST */}
            <div className="
                flex
                flex-col
                gap-5
                mt-8
            ">

                {currentPrograms.map(
                    (program) => (

                        <ProgramListCard
                            key={program.id}
                            logo={program.logo}
                            title={program.title}
                            company={program.company}
                            category={program.category}
                            status={program.status}
                            showParticipant={false}
                            showPeriod={false}
                            to={getEditProgram(program)}
                            onDelete={() => handleDeleteClick(program)}
                        />

                    )
                )}

            </div>

            <PopUpNotif
                isOpen={openDeletePopup}
                onClose={() => setOpenDeletePopup(false)}

                icon={
                    <CircleAlert
                    size={90}
                    className="text-red-500"
                    />
                }

                title="Hapus Draft?"
                description={`
                    Draft "${selectedProgram?.title}"
                    akan dihapus permanen.
                `}
                >

                <Button
                    label="Batal"
                    onClick={() => setOpenDeletePopup(false)}
                    className="
                    border
                    border-bold-blue
                    text-bold-blue
                    bg-white
                    "
                />

                <Button
                label="Hapus"
                onClick={() => {

                    console.log(
                    "DELETE DRAFT",
                    selectedProgram?.id
                    );

                    setPrograms((prev) =>
                    prev.filter(
                        (program) =>
                        program.id !== selectedProgram.id
                    )
                    );

                    setOpenDeletePopup(false);

                    setSelectedProgram(null);
                }}
                />

                </PopUpNotif>

            {/* PAGINATION */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />


        </div>
    
    );
};

export default DraftList;