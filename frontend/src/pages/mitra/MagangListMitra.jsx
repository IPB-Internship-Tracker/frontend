import { useState } from "react";

import SearchBar from "../../components/ui/SearchBar";
import FilterButton from "../../components/ui/FilterButton";
import Pagination from "../../components/ui/Pagination";

import ProgramListCard from "../../components/cards/ProgramListCard";

import logoShopee from "../../assets/logo-shopee.png";

const MagangListMitra = () => {

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
    const programs = [

        {
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

    ];

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

    return (

        <div>

            {/* TITLE */}
            <h1 className="
                text-3xl
                font-bold
                text-indigo-700
            ">
                Program yang Anda Buat
            </h1>

            {/* SUBTITLE */}
            <p className="
                text-gray-600
                mt-2
            ">
                Lihat program yang telah Anda buat di sini
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
                <div className="flex gap-3">

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
                <div className="w-[320px]">

                    <SearchBar
                        placeholder="Cari program..."
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
                space-y-4
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

                            to="/magang-detail-mitra"
                        />
                    )
                )}

            </div>

            {/* PAGINATION */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

        </div>
    );
};

export default MagangListMitra;