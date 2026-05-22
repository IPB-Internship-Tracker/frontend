import {
  CalendarDays,
  Link as LinkIcon,
} from "lucide-react";

import { useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import BackButton from "../../components/ui/BackButton";
import ProgramStatus from "../../components/ui/ProgramStatus";
import Poster from "../../assets/poster.png";
import LogoShopee from "../../assets/logo-shopee.png";

const StupenDetail = () => {

  const { id } = useParams();

  console.log(id);

// DUMMY DATA
const programDetail = {
  title: "Machine Learning Engineer Path",
  company: "Dicoding Indonesia",
  logo: LogoShopee,
  poster: Poster,
  deadline: "30 Januari 2026",
  timeline: "1 Februari - 31 Mei 2026",
  link:
    "https://www.dicoding.com/academies/machine-learning",
  description:
    "Program Studi Independen Machine Learning Engineer Path dirancang untuk mahasiswa yang ingin mendalami bidang Artificial Intelligence dan Data Science. Peserta akan mempelajari dasar machine learning, data preprocessing, model training, hingga deployment model menggunakan tools dan framework industri terkini.",
};

  return (

    <div className="max-w-4xl mx-auto space-y-6">

      {/* BACK */}
      <BackButton
        label="Kembali"
        color="text-bold-blue"
        position="relative"
        to="/kompetisi-list"
      />

      {/* TITLE */}
      <div className="flex justify-between items-center">

        <h1 className="text-xl font-bold text-black">
          Detail Program
        </h1>

        <Button
          label="Daftar"
          to={programDetail.link}
          className="w-[180px]"
        />

      </div>

      {/* MAIN CARD */}
      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          p-8
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-8
        "
      >

        {/* LEFT */}
        <div className="flex gap-5">

          {/* LOGO */}
          <img
            src={programDetail.logo}
            alt={programDetail.company}
            className="w-18 h-18 object-contain"
          />

          {/* DETAIL */}
          <div>

            <h1 className="text-xl font-bold text-bold-blue">
              {programDetail.title}
            </h1>

            <p className="text-xl text-bold-blue mb-5">
              {programDetail.company}
            </p>

            {/* DEADLINE */}
            <p className="text-gray-500 text-md">
              Deadline Pendaftaran:
              <span className="font-bold text-black ml-2">
                {programDetail.deadline}
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between items-end">
          <ProgramStatus status="Registrasi Dibuka" />
          {/* TIMELINE */}
          <div className="flex items-center gap-4 mt-10">
            <div className="text-right">
              <p className="text-gray-500">
               Timeline Kegiatan:
              </p>
              <p className="font-bold text-lg">
                {programDetail.timeline}
              </p>
            </div>

            <CalendarDays
              size={42}
              className="text-bold-blue"
            />
          </div>
        </div>
      </div>

      {/* DESKRIPSI */}
      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          p-8
        "
      >

        <h1 className="text-2xl font-semibold text-center mb-8">
          Deskripsi Kegiatan
        </h1>

        <p className="text-md leading-relaxed whitespace-pre-line">
          {programDetail.description}
        </p>

      </div>

      {/* POSTER */}
      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          p-8
        "
      >

        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-center mb-8">
          Poster Kegiatan
        </h1>

        {/* IMAGE */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-light-blue/30
          "
        >

          <img
            src={programDetail.poster}
            alt={programDetail.title}
            className="
              w-full
              h-auto
              object-cover
            "
          />

        </div>

      </div>

    </div>
  );
};

export default StupenDetail;