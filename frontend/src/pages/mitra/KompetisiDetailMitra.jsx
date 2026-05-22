import BackButton from "../../components/ui/BackButton";
import CreateMagangForm from "../../components/forms/CreateMagangForm";
import DocRequirementForm from "../../components/forms/DocRequirementForm";
import PopUpNotif from "../../components/ui/PopUpNotif";
import logoShopee from "../../assets/logo-shopee.png";
import Poster from "../../assets/poster.png";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProgramStatus from "../../components/ui/ProgramStatus";
import ProgramDetailCard from "../../components/cards/ProgramDetailCard";
import {
  CircleAlert,
  CircleCheck,
  CalendarDays,
  Pencil,
} from "lucide-react";
import Button from "../../components/ui/Button";  

const KompetisiDetailMitra = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [openBackPopup, setOpenBackPopup] =
    useState(false);

    const [openSavePopup, setOpenSavePopup] =
    useState(false);

// DUMMY DATA
const programDetail = {

  title:
    "National UI/UX Competition 2026",
  company:
    "Shopee Indonesia",
  logo: logoShopee,
  poster: Poster,
  deadline:
    "30 Januari 2026",
  timeline:
    "1 Februari - 31 Mei 2026",
  link:
    "https://competition.shopee.co.id",
  description:
    "National UI/UX Competition 2026 merupakan kompetisi desain tingkat nasional yang ditujukan bagi mahasiswa aktif di seluruh Indonesia. Peserta akan ditantang untuk menciptakan solusi desain aplikasi digital yang inovatif, fungsional, dan berorientasi pada pengalaman pengguna. Kompetisi ini terdiri dari beberapa tahap seleksi mulai dari penyisihan, mentoring, hingga final presentation yang akan dinilai langsung oleh praktisi industri digital.",

};

  return (

    <ProgramDetailCard
      programDetail={programDetail}
      backTo="/program-list-mitra"
      actionButton={
        <Button
          label="Edit"
          to={`/edit-kompetisi/${id}`}
          icon={<Pencil size={18} />}
          className="px-6"
        />
      }
    />
  );
};

export default KompetisiDetailMitra;