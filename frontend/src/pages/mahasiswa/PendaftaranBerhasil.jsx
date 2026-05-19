import {
  CircleCheck,
} from "lucide-react";

import Button from "../../components/ui/Button";
import ProgramSection from "../../components/cards/ProgramSection";

import LogoShopee from "../../assets/logo-shopee.png";

const PendaftaranBerhasil = () => {

  // PROGRAM YANG DIDAFTAR
  const registeredProgram = {
    title: "UI/UX Designer Internship",
    company: "Shopee Indonesia",
    logo: LogoShopee,
  };

  // REKOMENDASI PROGRAM
  const recommendedPrograms = [
    {
      id: 1,
      logo: LogoShopee,
      title: "UI/UX Designer Internship",
      company: "Shopee Indonesia",
      category: "Design",
      location: "Jakarta",
      deadline: "29 Mei 2026",
    },

    {
      id: 2,
      logo: LogoShopee,
      title: "Data Analyst Intern",
      company: "Tokopedia",
      category: "Data",
      location: "Jakarta",
      deadline: "29 Mei 2026",
    },

    {
      id: 3,
      logo: LogoShopee,
      title: "Digital Marketing Intern",
      company: "Blibli",
      category: "Marketing",
      location: "Jakarta",
      deadline: "29 Mei 2026",
    },

    {
      id: 4,
      logo: LogoShopee,
      title: "UI/UX Researcher Intern",
      company: "Shopee Indonesia",
      category: "Design",
      location: "Jakarta",
      deadline: "29 Mei 2026",
    },
  ];

  return (

    <div className="max-w-6xl mx-auto py-10">

      {/* SUCCESS SECTION */}
      <div className="flex flex-col items-center text-center">

        {/* ICON */}
        <div
          className="
            w-28
            h-28
            rounded-full
            bg-green-600
            flex
            items-center
            justify-center
            mb-6
          "
        >

          <CircleCheck
            size={60}
            className="text-white"
          />

        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-bold-blue mb-2">
          Pendaftaran berhasil!
        </h1>

        {/* DESCRIPTION */}
        <p className="text-md font-light max-w-2xl mb-8">
          Silakan cek secara berkala status
          pendaftaran Anda pada menu aktivitas.
        </p>

        {/* PROGRAM CARD */}
        <div
          className="
            bg-light-blue-2
            rounded-xl
            px-6
            py-4
            flex
            items-center
            gap-4
            mb-10
          "
        >

          {/* LOGO */}
          <div className="w-12 h-12">

            <img
              src={registeredProgram.logo}
              alt={registeredProgram.company}
              className="w-full h-full object-contain"
            />

          </div>

          {/* INFO */}
          <div className="text-left">

            <h2 className="text-md font-bold text-bold-blue">
              {registeredProgram.title}
            </h2>

            <p className="text-md text-bold-blue">
              {registeredProgram.company}
            </p>

          </div>

        </div>

        {/* BUTTON */}
        <div className="flex gap-4 flex-wrap mb-20">

          {/* KEMBALI */}
          <Button
            label="Kembali"
            to="/dashboard-mahasiswa"
            className="
              bg-white
              border
              border-bold-blue
              text-bold-blue
              hover:bg-bold-blue
              hover:text-white
              w-[180px]
            "
          />

          {/* STATUS */}
          <Button
            label="Lihat status"
            to="/lamaran-list"
            className="w-[180px]"
          />

        </div>

      </div>

      {/* LINE */}
      <div className="border-b border-light-blue/40 mb-10"></div>

      {/* REKOMENDASI */}
      <ProgramSection
        sectionTitle="Program lain yang mungkin Anda suka"
        buttonTo="/magang-list"
        programs={recommendedPrograms}
      />

    </div>
  );
};

export default PendaftaranBerhasil;