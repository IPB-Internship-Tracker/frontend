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

const StupenDetailMitra = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [openBackPopup, setOpenBackPopup] =
    useState(false);

    const [openSavePopup, setOpenSavePopup] =
    useState(false);

// DUMMY DATA
const programDetail = {
  title: "Machine Learning Engineer Path",
  company: "Dicoding Indonesia",
  logo: logoShopee,
  poster: Poster,
  deadline: "30 Januari 2026",
  timeline: "1 Februari - 31 Mei 2026",
  link:
    "https://www.dicoding.com/academies/machine-learning",
  description:
    "Program Studi Independen Machine Learning Engineer Path dirancang untuk mahasiswa yang ingin mendalami bidang Artificial Intelligence dan Data Science. Peserta akan mempelajari dasar machine learning, data preprocessing, model training, hingga deployment model menggunakan tools dan framework industri terkini.",
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

export default StupenDetailMitra;