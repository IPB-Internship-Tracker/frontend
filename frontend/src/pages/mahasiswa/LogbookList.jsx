import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import { Eye, Send, X } from "lucide-react";
import { useState } from "react";
import FormField from "../../components/forms/FormField";

const LogbookList = () => {

    const [formData, setFormData] = useState({
    program: "",
    company: "",
    periode: "",
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };


    const validateForm = () => {

        let newErrors = {};

        if (!formData.program.trim()) {
            newErrors.program = "Nama program wajib diisi.";
        }

        if (!formData.company.trim()) {
            newErrors.company = "Nama perusahaan wajib diisi.";
        }

        if (!formData.periode.trim()) {
            newErrors.periode = "Periode wajib diisi.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
        };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
            setOpenPopup(false);
            // nanti fetch backend di sini
        }
    };

  // COLUMNS
  const columns = [
    {
      header: "No",
      accessor: "no",
    },

    {
      header: "Nama Program",
      accessor: "program",
    },

    {
      header: "Penyelenggara",
      accessor: "company",
    },

    {
      header: "Periode",
      accessor: "periode",
    },

    {
    header: "Aksi",
    accessor: "aksi",

    render: (row) => (

        <div className="flex gap-2 flex-wrap">

        {/* LIHAT LOGBOOK */}
        <Button
        icon={<Eye size={18} />}
        to={`/logbook-detail/${row.id}`}
        iconOnly
        className="
            bg-blue-600
            text-white
            hover:bg-blue-700
        "
        />

        </div>
    ),
    },
  ];

  const data = [
  {
    id: 1,
    no: 1,
    program: "UI/UX Designer Internship",
    company: "Shopee Indonesia",
    periode: "Februari - April 2026",
  },

  {
    id: 2,
    no: 2,
    program: "Data Analyst Internship",
    company: "Tokopedia",
    periode: "Januari - Maret 2026",
  },

  {
    id: 3,
    no: 3,
    program: "Frontend Developer Internship",
    company: "Traveloka",
    periode: "Maret - Juni 2026",
  },
];

  return (

    <div className="space-y-8 px-3">

      {/* HEADER */}
    <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
            <h1 className="text-2xl font-bold text-bold-blue mb-2">
            Logbook Anda
            </h1>

            <p className="text-lg">
            Berikut adalah daftar seluruh logbook aktivitas Anda.
            </p>
        </div>

    </div>


      {/* TABLE */}
      <Table
        columns={columns}
        data={data}
      />



    </div>
  );
};

export default LogbookList;