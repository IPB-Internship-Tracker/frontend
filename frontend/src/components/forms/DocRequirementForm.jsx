import { useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import PopUpNotif  from "../../components/ui/PopUpNotif";
import { CircleCheck} from "lucide-react";

const DocRequirementForm = () => {
const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();

  // LIST DOKUMEN
  const documents = [
    "Curriculum Vitae (CV)",
    "Motivation Letter",
    "Transkrip Nilai",
    "Surat Rekomendasi Kampus",
    "Surat Izin Dosen Pembimbing",
    "Portofolio",
  ];


  // STATE CHECKLIST
  const [selectedDocs, setSelectedDocs] = useState([]);
  // ERROR
  const [error, setError] = useState("");
  // HANDLE CHECKBOX
  const handleCheckboxChange = (doc) => {
    if (selectedDocs.includes(doc)) {
      setSelectedDocs(
        selectedDocs.filter((item) => item !== doc)
      );
    } else {
      setSelectedDocs([
        ...selectedDocs,
        doc,
      ]);
    }
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    // MINIMAL 1
    if (selectedDocs.length === 0) {
      setError(
        "Pilih minimal satu dokumen."
      );
      return;
    }

    setError("");
    console.log("DOKUMEN:", selectedDocs);
    setOpenPopup(true);
  };

  return (

    <div
      className="
        bg-white
        rounded-2xl
        shadow-xl
        w-full
        max-w-4xl
        p-8 ">

      {/* HEADER */}
      <div
        className="
          bg-gradient-to-r
          from-kuning-tua
          to-kuning-muda
          rounded-2xl
          p-6
          text-center
          mb-10">

        <h1 className="text-3xl font-bold text-bold-blue mb-2">
          Dokumen yang Dibutuhkan
        </h1>

        <p className="text-black">
          Pilih persuratan yang Anda butuhkan
          untuk menyeleksi kandidat.
        </p>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5">

        {/* CHECKLIST */}
        <div
        className={`
            space-y-4
            rounded-xl
            p-2
            transition

            ${
            error
                ? "border-2 border-red-500"
                : "border-2 border-transparent"
            }
        `}
        >

        {documents.map((doc, index) => (

            <label
            key={index}
            className="
                flex
                items-center
                justify-between
                border
                border-light-blue
                rounded-lg
                bg-light-blue-2
                px-5
                py-4
                cursor-pointer
                hover:bg-light-blue/20
                transition ">

            <span className="text-lg text-black">
                {doc}
            </span>

            <input
                type="checkbox"
                checked={selectedDocs.includes(doc)}
                onChange={() => handleCheckboxChange(doc)}
                className="
                w-5
                h-5
                accent-bold-blue
                cursor-pointer"
            />
            </label>
        ))}

        </div>

        {/* ERROR */}
        {error && (
        <p className="text-red-500 italic text-sm">
            {error}
        </p>
        )}

        {/* BUTTON */}
        <div className="flex justify-between pt-8 flex-wrap gap-4">
          <Button
            to="../create-magang"
            label="Sebelumnya"
            type="button"
            className="
              border-bold-blue
              border-2
              text-bold-blue
              bg-transparent
              w-[180px]
            "
          />

            {/* BUTTON SIMPAN */}
            <div className="mt-10">
                <Button
                    label="Simpan"
                    type="submit"
                    className="w-[180px]"
                />

                {/* POPUP */}
                <PopUpNotif
                    isOpen={openPopup}
                    onClose={() => setOpenPopup(false)}

                    icon={
                    <CircleCheck
                        size={90}
                        className="text-green-600"
                    />
                    }
                    title="Program Berhasil Disimpan"
                    description="Lihat detail program yang telah dibuat.">

                    <Button
                    label="Kembali"
                    onClick={() => setOpenPopup(false)}
                    className="
                        border
                        border-bold-blue
                        text-bold-blue
                        bg-white
                    "
                    />

                    <Button
                    label="Lihat"
                    onClick={() => {
                       setOpenPopup(false);
                       navigate("/magang-list-mitra")
                    }}
                    className="
                        bg-kuning-tua
                        text-bold-blue
                    "
                    />
                </PopUpNotif>
            </div>
        </div>
      </form>
    </div>
  );
};

export default DocRequirementForm;