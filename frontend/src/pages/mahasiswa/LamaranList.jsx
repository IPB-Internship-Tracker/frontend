import { useState } from "react";

import FilterButton from "../../components/ui/FilterButton";
import SearchBar from "../../components/ui/SearchBar";
import Pagination from "../../components/ui/Pagination";
import LamaranListCard from "../../components/cards/LamaranListCard";
import logoShopee from "../../assets/logo-shopee.png";


const LamaranList = () => {

    // FILTER CATEGORY
    const [selectedCategory, setSelectedCategory] =
        useState("Semua");

    // FILTER STATUS
    const [selectedStatus, setSelectedStatus] =
        useState("Semua");

    // SEARCH
    const [search, setSearch] =
        useState("");

    // PAGINATION
    const [currentPage, setCurrentPage] =
        useState(1);

    // DUMMY DATA
    const applications = [

        {
            id: 1,
            logo: logoShopee,
            title: "UI/UX Designer Internship",
            company: "Shopee Indonesia",
            category: "Magang",
            appliedDate: "27 Januari 2026",
            updatedDate: "1 Februari 2026",
            status: "Telah Mendaftar",
        },

        {
            id: 2,
            logo: logoShopee,
            title: "Data Analyst Internship",
            company: "Shopee",
            category: "Magang",
            appliedDate: "15 Januari 2026",
            updatedDate: "19 Januari 2026",
            status: "Diterima",
        },

        {
            id: 3,
            logo: logoShopee,
            title: "Digital Marketing Internship",
            company: "Shopee Indonesia",
            category: "Magang",
            appliedDate: "15 Januari 2026",
            updatedDate: "19 Januari 2026",
            status: "Ditolak",
        },

        {
            id: 4,
            logo: logoShopee,
            title: "Internship",
            company: "Traveloka",
            category: "Magang",
            appliedDate: "29 Desember 2025",
            updatedDate: "1 Januari 2026",
            status: "Wawancara",
        },

    ];

    // FILTER LOGIC
    const filteredApplications =
        applications.filter((item) => {

            // FILTER CATEGORY
            const matchCategory =

                selectedCategory === "Semua"

                ||

                item.category === selectedCategory;

            // FILTER STATUS
            const matchStatus =

                selectedStatus === "Semua"

                ||

                item.status === selectedStatus;

            // SEARCH
            const matchSearch =

                item.title
                    .toLowerCase()
                    .includes(search.toLowerCase());

            return (
                matchCategory
                &&
                matchStatus
                &&
                matchSearch
            );
        });

    // PAGINATION
    const itemsPerPage = 6;

    const totalPages = Math.ceil(
        filteredApplications.length
        / itemsPerPage
    );

    const startIndex =
        (currentPage - 1)
        * itemsPerPage;

    const currentApplications =
        filteredApplications.slice(
            startIndex,
            startIndex + itemsPerPage
        );

    return (

        <div>

            {/* TITLE */}
            <h1 className="
                text-3xl
                font-bold
                text-bold-blue
            ">
                Lamaran Saya
            </h1>

            {/* SUBTITLE */}
            <p className="
                text-lg
                text-gray-700
                mt-2
            ">
                Lihat status program yang telah Anda lamar di sini
            </p>

            {/* FILTER CATEGORY SEARCH */}
            <div className="
                flex
                items-end
                justify-between
                gap-3
                
            ">
                {/* FILTER STATUS */}
                <div className="mt-8">

                    {/* TITLE */}
                    <h2 className="
                        text-lg
                        font-semibold
                        text-bold-blue
                        mb-4
                    ">
                        Filter status lamaran
                    </h2>

                    {/* BUTTON LIST */}
                    <div className="
                        flex
                        gap-3
                        flex-wrap
                    ">

                        <FilterButton
                            label="Semua"
                            active={
                                selectedStatus ===
                                "Semua"
                            }
                            onClick={() =>
                                setSelectedStatus(
                                    "Semua"
                                )
                            }
                        />

                        <FilterButton
                            label="Telah Mendaftar"
                            active={
                                selectedStatus ===
                                "Telah Mendaftar"
                            }
                            onClick={() =>
                                setSelectedStatus(
                                    "Telah Mendaftar"
                                )
                            }
                        />

                        <FilterButton
                            label="Diterima"
                            active={
                                selectedStatus ===
                                "Diterima"
                            }
                            onClick={() =>
                                setSelectedStatus(
                                    "Diterima"
                                )
                            }
                        />

                        <FilterButton
                            label="Ditolak"
                            active={
                                selectedStatus ===
                                "Ditolak"
                            }
                            onClick={() =>
                                setSelectedStatus(
                                    "Ditolak"
                                )
                            }
                        />

                        <FilterButton
                            label="Wawancara"
                            active={
                                selectedStatus ===
                                "Wawancara"
                            }
                            onClick={() =>
                                setSelectedStatus(
                                    "Wawancara"
                                )
                            }
                        />

                    </div>

                </div>

                {/* SEARCH BAR */}
                <div className="w-auto">

                    <SearchBar
                        placeholder="Cari..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

            </div>

            

            {/* LIST PROGRAM LAMARAN */}
            <div className="
                mt-8
                space-y-4
            ">

                {currentApplications.map(
                    (application, index) => (

                        <LamaranListCard
                            key={index}

                            logo={application.logo}

                            title={application.title}

                            company={application.company}

                            category={application.category}

                            appliedDate={
                                application.appliedDate
                            }

                            updatedDate={
                                application.updatedDate
                            }

                            status={application.status}

                            to={`/lamaran-detail/${application.id}`}
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

export default LamaranList;