import { useState } from "react";

import Table from "../../components/ui/Table";
import BackButton from "../../components/ui/BackButton";
import LamaranStatus from "../../components/ui/LamaranStatus";
import Button from "../../components/ui/Button";
import LogoShopee from "../../assets/logo-shopee.png";
import Pagination from "../../components/ui/Pagination";
import PopUpNotif from "../../components/ui/PopUpNotif";

import {
  UserRoundSearch,
  Trash2,
} from "lucide-react";

const PelamarList = () => {

    // PAGINATION
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    // DROPDOWN STATUS
    const [openDropdownId, setOpenDropdownId] = useState(null);

    // POPUP STATUS
    const [openStatusPopup, setOpenStatusPopup] = useState(false);

    // POPUP DELETE
    const [openDeletePopup, setOpenDeletePopup] = useState(false);

    // TEMP DATA
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    const [selectedStatus, setSelectedStatus] = useState("");

  // DUMMY DATA
  const [applicants, setApplicants] = useState([

    {
      id: 1,
      applicantName: "Fatiyya Ilmi Zahra",
      email: "fatiyya@example.com",
      applyDate: "10/01/2026",
      status: "Diterima",
    },

    {
      id: 2,
      applicantName: "Fatiyya Ilmi Zahra",
      email: "fatiyya@example.com",
      applyDate: "10/01/2026",
      status: "Telah Mendaftar",
    },

    {
      id: 3,
      applicantName: "Fatiyya Ilmi Zahra",
      email: "fatiyya@example.com",
      applyDate: "10/01/2026",
      status: "Ditolak",
    },

    {
      id: 4,
      applicantName: "Fatiyya Ilmi Zahra",
      email: "fatiyya@example.com",
      applyDate: "10/01/2026",
      status: "Diterima",
    },

    {
      id: 5,
      applicantName: "Fatiyya Ilmi Zahra",
      email: "fatiyya@example.com",
      applyDate: "10/01/2026",
      status: "Wawancara",
    },
  ]);

  const totalPages = Math.ceil(
    applicants.length / itemsPerPage
    );

    const paginatedApplicants = applicants.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // HANDLE STATUS CHANGE
    const handleChangeStatus = (
        applicant,
        newStatus
        ) => {

        setSelectedApplicant(applicant);
        setSelectedStatus(newStatus);
        setOpenStatusPopup(true);
        setOpenDropdownId(null);
    };

    // HANDLE DELETE
    const handleDelete = (applicant) => {
        setSelectedApplicant(applicant);
        setOpenDeletePopup(true);
    };

    const statusOptions = [
        "Telah Mendaftar",
        "Wawancara",
        "Diterima",
        "Ditolak",
    ];

  // PROGRAM DETAIL
  const programDetail = {
    title: "UI/UX Designer Internship",
    company: "Shopee Indonesia",
    logo: LogoShopee,
  };

  // TABLE COLUMNS
  const columns = [

    {
      header: "No",
      accessor: "id",
    },

    {
      header: "Nama Pelamar",
      accessor: "applicantName",
    },

    {
      header: "Email Pelamar",
      accessor: "email",
    },

    {
      header: "Tanggal Melamar",
      accessor: "applyDate",
    },

    {
      header: "Status",

    render: (row) => (

        <div className="relative">

            {/* STATUS BUTTON */}
            <LamaranStatus
            status={row.status}
            onClick={() =>
                setOpenDropdownId(
                openDropdownId === row.id
                    ? null
                    : row.id
                )
            }
            />

            {/* DROPDOWN */}
            {openDropdownId === row.id && (

            <div
                className="
                absolute
                top-12
                left-0
                z-20
                bg-white
                border
                border-light-blue
                rounded-xl
                shadow-lg
                w-44
                overflow-hidden
                "
            >

                {statusOptions.map((status) => (

                <button
                    key={status}
                    onClick={() =>
                    handleChangeStatus(
                        row,
                        status
                    )
                    }
                    className="
                    block
                    w-full
                    px-4
                    py-3
                    text-left
                    hover:bg-light-blue-2
                    transition
                    cursor-pointer
                    "
                >
                    {status}
                </button>

                ))}

            </div>
            )}

        </div>
        ),
    },

    {
      header: "Aksi",

      render: (row) => (

        <div className="flex items-center gap-2">

          {/* DETAIL */}
          <Button
            label={
              <UserRoundSearch size={16} />
            }
            to={`/pelamar-detail/${row.id}`}
            iconOnly
            className="
              bg-blue-600
              text-white
              hover:bg-blue-700
            "
          />

          {/* DELETE */}
          <Button
            label={
              <Trash2 size={16} />
            }
            onClick={() =>
              handleDelete(row)
            }
            iconOnly
            className="
              bg-red-600
              text-white
              hover:bg-red-700
            "
          />

        </div>
      ),
    },
  ];

  return (
    <div className="px-3 space-y-4">

        {/* BACK BUTTON */}
      <BackButton
        label="Kembali"
        color="text-bold-blue"
        position="relative"
        to="/magang-list-mitra"
      />

      <div className="gap-2">
          <h1 className="text-xl font-bold text-black mb-2">
            Daftar Pelamar
          </h1>

        <h2 className="text-2xl font-bold text-bold-blue">
            {programDetail.title}
        </h2>

        <p className="text-md text-bold-blue">
            {programDetail.company}
        </p>
      </div>

        {/* TABLE CARD */}
        <div
            className="
                py-3
            "
            >

            {/* TABLE */}
            <Table
                columns={columns}
                data={paginatedApplicants}
        />

        <Pagination
        currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />

        {/* POPUP NOTIF */}
        <PopUpNotif
            isOpen={openStatusPopup}
            onClose={() =>
                setOpenStatusPopup(false)
            }

            icon={
                <div className="text-red-500 text-7xl">
                ⚠
                </div>
            }

            title="Apakah Anda yakin mengubah status lamaran?"

            description="
                Notifikasi perubahan status lamaran
                akan terkirim ke pelamar
            "
            >

            {/* CANCEL */}
            <Button
                label="Kembali"
                onClick={() =>
                setOpenStatusPopup(false)
                }
                className="
                bg-white
                border
                border-bold-blue
                text-bold-blue
                hover:bg-bold-blue
                "
            />

            {/* CONFIRM */}
            <Button
                label="Kirim"

                onClick={() => {
                    const updatedApplicants =
                        applicants.map((applicant) => {

                        if (
                            applicant.id === selectedApplicant.id
                        ) {
                            return {
                            ...applicant,
                            status: selectedStatus,
                            };
                        }

                        return applicant;
                        });
                    setApplicants(updatedApplicants);
                    setOpenStatusPopup(false);
                }}
            />

        </PopUpNotif>

    </div>
    </div>
    );
};

export default PelamarList;