import BackButton from "../../components/ui/BackButton";
import CreateProgramForm from "../../components/forms/CreateProgramForm";
import PopUpNotif from "../../components/ui/PopUpNotif";
import logoShopee from "../../assets/logo-shopee.png";
import Poster from "../../assets/poster.png";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  CircleAlert,
  CircleCheck,
} from "lucide-react";

import Button from "../../components/ui/Button";

const EditStupen = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [openBackPopup, setOpenBackPopup] =
    useState(false);

  const [openSavePopup, setOpenSavePopup] =
    useState(false);

  const [isDirty, setIsDirty] =
    useState(false);

    const initialData = {

    title:
        "National UI/UX Competition 2026",
    company:
        "Shopee Indonesia",
    logo: logoShopee,
    poster: Poster,
    deadline:
        "2026-01-30",
    startDate:
        "2026-02-01",
    endDate:
        "2026-05-31",
    link:
        "https://competition.shopee.co.id",
    description:
        "National UI/UX Competition 2026 merupakan kompetisi desain tingkat nasional yang ditujukan bagi mahasiswa aktif di seluruh Indonesia. Peserta akan ditantang untuk menciptakan solusi desain aplikasi digital yang inovatif, fungsional, dan berorientasi pada pengalaman pengguna.",
    };

  return (

    <div className="flex flex-col items-center py-5">

      {/* BACK */}
      <div className="w-full max-w-4xl mb-5">

      <BackButton
        color="text-bold-blue"
        position="relative"

        onClick={() => {

          if (isDirty) {
            setOpenBackPopup(true);

          } else {
            navigate(`/kompetisi-detail-mitra/${id}`);
          }
        }}
      />
      </div>

      {/* POPUP BACK */}
      <PopUpNotif
        isOpen={openBackPopup}
        onClose={() => setOpenBackPopup(false)}

        icon={
          <CircleAlert
            size={90}
            className="text-yellow-500"
          />
        }

        title="Yakin ingin kembali?"

        description="
          Perubahan yang belum disimpan dapat hilang.
        "
      >

            {/* DISCARD */}
            <Button
                label="Batalkan Perubahan"
                onClick={() => {
                  navigate(`/magang-detail-mitra/${id}`);
                }}
                className="
                border
                border-bold-blue
                text-bold-blue
                bg-white
                "
            />

            {/* CANCEL */}
            <Button
                label="Lanjut Edit"
                onClick={() => setOpenBackPopup(false)}
           />

      </PopUpNotif>

      {/* FORM EDIT */}
      <CreateProgramForm
        title="Studi Independen"
        initialData={initialData}
        isEdit={true}
        hideSubmitButton={true}
        onDirtyChange={setIsDirty}
      />

      {/* FINAL SAVE BUTTON */}
      <div
        className="
          w-full
          max-w-4xl
          flex
          justify-center
          mt-8
        "
      >

        <Button
          label="Simpan"
          className="w-[220px]"

          onClick={() => {
            console.log("SAVE EDIT");
            setOpenSavePopup(true);
          }}
        />

      </div>

      {/* POPUP SAVE */}
      <PopUpNotif
        isOpen={openSavePopup}
        onClose={() => setOpenSavePopup(false)}

        icon={
          <CircleCheck
            size={90}
            className="text-green-600"
          />
        }

        title="Perubahan Berhasil Disimpan"

        description="
          Program kompetisi berhasil diperbarui.
        "
      >

        {/* CLOSE */}
        <Button
          label="Kembali"
          onClick={() => setOpenSavePopup(false)}

          className="
            border
            border-bold-blue
            text-bold-blue
            bg-white
          "
        />

        {/* SEE */}
        <Button
          label="Lihat Program"

          onClick={() => {

            setOpenSavePopup(false);

            navigate(`/kompetisi-detail-mitra/${id}`);
          }}
        />

      </PopUpNotif>

    </div>
  );
};

export default EditStupen;