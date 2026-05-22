import BackButton from "../../components/ui/BackButton";
import CreateMagangForm from "../../components/forms/CreateMagangForm";
import DocRequirementForm from "../../components/forms/DocRequirementForm";
import PopUpNotif from "../../components/ui/PopUpNotif";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CircleAlert,
  CircleCheck,
} from "lucide-react";
import Button from "../../components/ui/Button";  

const EditMagang = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [openBackPopup, setOpenBackPopup] =
    useState(false);

    const [openSavePopup, setOpenSavePopup] =
    useState(false);

  // nanti fetch by id dari backend
  const initialData = {

    namaPerusahaan: "Shopee Indonesia",
    judulLamaran:
      "UI/UX Designer Internship",
    posisi: "UI/UX Designer",
    deskripsi:
      "Program internship untuk mahasiswa.",
    bidang: "Design & Creative",
    kuota: "10",
    salary: 3000000,
    tenggat: "2026-01-30",
    mulai: "2026-02-01",
    berakhir: "2026-05-31",
    kota: "Jakarta Selatan",
    alamat:
      "Jl. Rasuna Said Jakarta Selatan",
    narahubung: "+628123456789",
    informasi: "@shopeeindonesia",
  };

  // initial dokumen
  const initialDocs = [
    "Curriculum Vitae (CV)",
    "Portofolio",
    "Motivation Letter",
  ];

  return (

    <div className="flex flex-col items-center py-5">

      {/* BACK */}
      <div className="w-full max-w-4xl mb-5">
        <BackButton
            color="text-bold-blue"
            position="relative"
            onClick={() => setOpenBackPopup(true)}
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
            description="Perubahan yang belum disimpan dapat hilang."
            >

            {/* CANCEL */}
            <Button
                label="Lanjut Edit"
                onClick={() => setOpenBackPopup(false)}
                className="
                border
                border-bold-blue
                text-bold-blue
                bg-white
                "
            />

            {/* DISCARD */}
            <Button
                label="Batalkan Perubahan"
                onClick={() => {
                navigate(`/magang-detail-mitra/${id}`);
                }}
            />

        </PopUpNotif>   

      {/* FORM EDIT */}
      <CreateMagangForm
        initialData={initialData}
        isEdit={true}
        hideSubmitButton={true}
      />

      {/* DOC REQUIREMENT */}
      <div className="mt-8 w-full max-w-4xl">

        <DocRequirementForm
          isEdit={true}
          initialSelectedDocs={initialDocs}
          hideSubmitButton={true}
        />

      </div>

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

        description="Program magang berhasil diperbarui."
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
            navigate(`/magang-detail-mitra/${id}`);
            }}
        />

        </PopUpNotif>

    </div>
  );
};

export default EditMagang;