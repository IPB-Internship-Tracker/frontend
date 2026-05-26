import { useState } from "react";
import { CircleAlert } from "lucide-react";
import SearchBar from "../../components/ui/SearchBar";
import FilterButton from "../../components/ui/FilterButton";
import Pagination from "../../components/ui/Pagination";
import ProgramListCard from "../../components/cards/ProgramListCard";
import logoShopee from "../../assets/logo-shopee.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import PopUpNotif from "../../components/ui/PopUpNotif";

const ProgramListMitra = () => {
    const navigate = useNavigate();

    // FILTER CATEGORY
    const [selectedCategory, setSelectedCategory] =
        useState("Semua");

    // SEARCH
    const [search, setSearch] =
        useState("");

    // PAGINATION
    const [currentPage, setCurrentPage] =
        useState(1);

    const getDetailRoute = (program) => {

    // MAGANG
    if (program.category === "Magang") {
        return `/magang-detail-mitra/${program.id}`;
    }

    // KOMPETISI
    else if (program.category === "Kompetisi") {
        return `/kompetisi-detail-mitra/${program.id}`;
    }

    // STUPEN
    else {
        return `/stupen-detail-mitra/${program.id}`;
    }

};
    // DUMMY DATA
    const [programs, setPrograms] =
    useState([

        {
            id: 1,
            logo: logoShopee,
            title: "UI/UX Designer Internship",
            company: "Shopee Indonesia",
            category: "Magang",
            participantInfo:
                "Total Pendaftar: 100 Orang",
            period:
                "1 Februari - 31 Mei 2026",
            status:
                "Registrasi Dibuka",
        },

        {
            id: 2,
            logo: logoShopee,
            title: "Business Case Competition",
            company: "Shopee Indonesia",
            category: "Kompetisi",
            participantInfo:
                "Total Pendaftar: 10 Tim",
            period:
                "1 Februari - 31 Mei 2026",
            status:
                "Registrasi Ditutup",
        },
   ]);

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

    const [openDeletePopup, setOpenDeletePopup] =
    useState(false);

    const [selectedProgram, setSelectedProgram] =
    useState(null);

    const handleDeleteClick = (program) => {
        setSelectedProgram(program);
        setOpenDeletePopup(true);
    };

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

    return (
        <div>
            {/* HEADER */}
            <div className="
                flex
                items-center
                justify-between
            ">

                {/* TITLE */}
                <h1 className="
                    text-3xl
                    font-bold
                    text-indigo-700
                ">
                    Program yang Anda Buat
                </h1>

                {/* DRAFT BUTTON */}
                <Button
                    label="Draft"
                    to="/draft-list"
                    className="
                        text-md
                        px-5
                        py-2
                    "
                />

            </div>

            {/* SUBTITLE */}
            <p className="
                font-light
                mt-2
            ">
                Lihat program yang telah Anda buat di sini
            </p>

            {/* FILTER SEARCH */}
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
                        placeholder="Cari..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

            </div>

            {/* PROGRAM LIST */}
            <div className="
                mt-8
                space-y-5
            ">

                {currentPrograms.map(
                    (program, index) => (

                        <ProgramListCard
                            key={index}
                            logo={program.logo}
                            title={program.title}
                            company={program.company}
                            category={program.category}
                            participantInfo={
                                program.participantInfo
                            }
                            period={program.period}
                            status={program.status}
                            to={getDetailRoute(program)}
                            onDelete={() => handleDeleteClick(program)}
                            showParticipant={
                                program.category === "Magang"
                            }
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

                title="Hapus Program?"
                description={`
                    Program "${selectedProgram?.title}"
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
                    setPrograms((prev) =>
                    prev.filter(
                        (item) =>
                        item.id !== selectedProgram.id
                    )
                    );

                    setOpenDeletePopup(false);
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

export default ProgramListMitra;