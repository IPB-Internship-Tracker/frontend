import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import { Eye, Send, X } from "lucide-react";
import { useState } from "react";
import FormField from "../../components/forms/FormField";

const LogbookList = () => {
    const [openPopup, setOpenPopup] = useState(false);

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

    render: () => (

        <div className="flex gap-2 flex-wrap">

        {/* LIHAT LOGBOOK */}
        <Button
        label={<Eye size={18} />}
        to="/logbook-detail"
        iconOnly
        className="
            bg-blue-600
            text-white
            hover:bg-blue-700
        "
        />

        {/* FINALISASI */}
        <Button
        label={<Send size={18} />}
        iconOnly
        className="
            bg-green-600
            text-white
            hover:bg-green-700
        "
        />

        </div>
    ),
    },
  ];

  const data = [
  {
    no: 1,
    program: "UI/UX Designer Internship",
    company: "Shopee Indonesia",
    periode: "Februari - April 2026",
  },

  {
    no: 2,
    program: "Data Analyst Internship",
    company: "Tokopedia",
    periode: "Januari - Maret 2026",
  },

  {
    no: 3,
    program: "Frontend Developer Internship",
    company: "Traveloka",
    periode: "Maret - Juni 2026",
  },
];

  return (

    <div className="px-6 space-y-8">

      {/* HEADER */}
    <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
            <h1 className="text-3xl font-bold text-bold-blue mb-2">
            Logbook Anda
            </h1>

            <p className="text-lg">
            Berikut adalah daftar seluruh logbook aktivitas Anda.
            </p>
        </div>

        <Button
          label="+ Buat Logbook"
          onClick={() => setOpenPopup(true)}
          className="w-[220px]"
        /> 
    </div>


      {/* TABLE */}
      <Table
        columns={columns}
        data={data}
      />

      {/* POPUP */}
        {openPopup && (

        <div
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/30
            backdrop-blur-sm
            px-4
            "
        >

            {/* MODAL */}
            <div
            className="
                relative
                bg-white
                rounded-2xl
                shadow-2xl
                w-full
                max-w-2xl
                px-8
                py-10
                animate-fadeInUp
            "
            >

            {/* CLOSE */}
            <button
                onClick={() => setOpenPopup(false)}
                className="
                absolute
                top-5
                right-5
                text-gray-500
                hover:text-black
                "
            >

                <X size={24} />

            </button>

            {/* TITLE */}
            <h1 className="text-3xl text-center font-bold mb-2 text-black">
                Buat Logbook Baru
            </h1>

            <p className="text-md text-center text-gray-500 mb-10">
                Isi informasi program untuk membuat logbook aktivitas.
            </p>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                {/* PROGRAM */}
                <FormField
                label="Nama Program"
                type="text"
                name="program"
                value={formData.program}
                onChange={handleChange}
                error={errors.program}
                placeholder="Contoh: UI/UX Designer Internship"
                />

                {/* COMPANY */}
                <FormField
                label="Nama Perusahaan"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                error={errors.company}
                placeholder="Contoh: Shopee Indonesia"
                />

                {/* PERIODE */}
                <FormField
                label="Periode"
                type="text"
                name="periode"
                value={formData.periode}
                onChange={handleChange}
                error={errors.periode}
                placeholder="Contoh: Februari - April 2026"
                />

                {/* BUTTON */}
                <div className="flex justify-center pt-4">

                <Button
                    label="Simpan"
                    type="submit"
                    className="w-[180px]"
                />

                </div>

            </form>
            </div>
        </div>
        )}


    </div>
  );
};

export default LogbookList;