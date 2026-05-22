import {
  Upload,
  FileText,
  TriangleAlert
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackButton from "../../components/ui/BackButton";
import Button from "../../components/ui/Button";
import LogoShopee from "../../assets/logo-shopee.png";
import PopUpNotif from "../../components/ui/PopUpNotif";
import PersonalInfoItem from "../../components/ui/PersonalInfoItem";

const FormPendaftaran = () => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [openPopup, setOpenPopup] = useState(false);

    const [uploadedFiles, setUploadedFiles] = useState({
    cv: null,
    motivation: null,
    portfolio: null,
    });


    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        setUploadedFiles({
            ...uploadedFiles,
            [field]: file,
        });

        // hapus error ketika upload ulang
        setErrors((prev) => ({
            ...prev,
            [field]: "",
        }));
    };

    
    const validateForm = () => {

        let newErrors = {};

        if (!uploadedFiles.cv) {
            newErrors.cv = "CV wajib diupload.";
        }

        if (!uploadedFiles.motivation) {
            newErrors.motivation =
            "Motivation Letter wajib diupload.";
        }

        if (!uploadedFiles.portfolio) {
            newErrors.portfolio =
            "Portofolio wajib diupload.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // munculin popup warning
            setOpenPopup(true);
        }
    };




  // PROGRAM DETAIL
  const programDetail = {
    title: "UI/UX Designer Internship",
    company: "Shopee Indonesia",
    logo: LogoShopee,
  };

  // DATA PRIBADI
  const personalData = {
    name: "Fatiyya Ilmi Zahra",
    email: "fatiyyailmi@apps.ipb.ac.id",
    nim: "G6401231016",
    faculty: "SSMI",
    phone: "081234568910",
    semester: "6",
    major: "Ilmu Komputer",
  };

  // DOKUMEN
const documents = [

  {
    label: "Curriculum Vitae / Resume",
    fileName: "CV-Fatiyyailmi.pdf",
    fileUrl:
      "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
  },

  {
    label: "Motivation Letter",
    fileName: "Motlet-Fatiyyailmi.pdf",
    fileUrl:
      "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
  },

  {
    label: "Portofolio",
    fileName: "Porto-Fatiyyailmi.pdf",
    fileUrl:
      "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
  },

];

  return (

    <div className="max-w-4xl mx-auto space-y-6">

      {/* BACK BUTTON */}
      <BackButton
        label="Kembali"
        color="text-bold-blue"
        position="relative"
        to="/lamaran-list"
      />

      {/* PROGRAM HEADER */}
      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          px-8
          py-6
          flex
          items-center
          gap-5
        "
      >

        {/* LOGO */}
        <div className="w-16 h-16">

          <img
            src={programDetail.logo}
            alt={programDetail.company}
            className="w-full h-full object-contain"
          />

        </div>

        {/* INFO */}
        <div>

          <h1 className="text-xl font-bold text-bold-blue">
            {programDetail.title}
          </h1>

          <p className="text-lg text-bold-blue">
            {programDetail.company}
          </p>

        </div>

      </div>

      {/* MAIN FORM CARD */}
    <form
    onSubmit={handleSubmit}
    className="
        bg-white
        rounded-2xl
        shadow-md
        p-10
    "
    >

        {/* TITLE */}
        <div className="text-center mb-10">

          <h1 className="text-2xl font-bold text-bold-blue mb-2">
            Detail Lamaran
          </h1>

          <p className="text-sm text-bold-blue/80 max-w-xl mx-auto">
            Berikut adalah detail lamaran yang telah kamu kirim. Data yang dikirim tidak dapat diubah.
          </p>

        </div>

        <div className="border-b border-light-blue/40 mb-12"></div>

        {/* DATA PRIBADI */}
        <div className="mb-12">

          <h2 className="text-xl font-semibold text-center mb-10">
            Data Pribadi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">

            {/* LEFT */}
            <div className="space-y-6">

            <PersonalInfoItem
                label="Nama Panjang"
                value={personalData.name}
            />

            <PersonalInfoItem
                label="Email"
                value={personalData.email}
            />

            <PersonalInfoItem
                label="NIM"
                value={personalData.nim}
            />

            <PersonalInfoItem
                label="Fakultas"
                value={personalData.faculty}
            />

            </div>

            {/* RIGHT */}
            <div className="space-y-6">

            <PersonalInfoItem
                label="Nomor HP"
                value={personalData.phone}
            />

            <PersonalInfoItem
                label="Semester"
                value={personalData.semester}
            />

            <PersonalInfoItem
                label="Program Studi"
                value={personalData.major}
            />

            </div>

          </div>

        </div>

        {/* LINE */}
        <div className="border-b border-light-blue/40 mb-12"></div>

        <div className="space-y-8">

        {documents.map((doc, index) => (

            <div key={index}>

            {/* LABEL */}
            <h3 className="text-md font-semibold mb-3">
                {doc.label}
            </h3>

            {/* FILE DISPLAY */}
            <div
                className="
                border
                border-light-blue
                bg-light-blue-2
                rounded-xl
                px-5
                py-4
                flex
                items-center
                gap-3
                "
            >

                <FileText
                size={22}
                className="text-bold-blue"
                />

                <a
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    text-bold-blue
                    underline
                    hover:text-indigo-700
                    transition
                "
                >
                {doc.fileName}
                </a>

            </div>

            </div>

        ))}

        </div>
      </form>
    </div>
  );
};

export default FormPendaftaran;