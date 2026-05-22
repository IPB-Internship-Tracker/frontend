import { useState } from "react";

import FormField from "../../components/forms/FormField";
import Button from "../../components/ui/Button";

import {
  Upload,
} from "lucide-react";

const CreateProgramForm = ({
  initialData = null,
  isEdit = false,
  hideSubmitButton = false,

  title = "Program",
}) => {

  const [errors, setErrors] =
    useState({});

  const [formData, setFormData] =
    useState(

      initialData || {

        poster: null,
        namaKegiatan: "",
        deskripsi: "",
        linkPendaftaran: "",
        tenggat: "",
        mulai: "",
        berakhir: "",
        statusKegiatan: "",
      }
    );

  // HANDLE POSTER
  const handlePosterChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      poster: file,
    });
  };

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATE
  const validateForm = () => {

    let newErrors = {};

    Object.keys(formData).forEach(
      (key) => {

        if (!formData[key]) {

          newErrors[key] =
            "Kolom ini wajib diisi.";
        }
      }
    );

    if (!formData.deskripsi.trim()) {
      newErrors.deskripsi =
        "Deskripsi wajib diisi.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();
    if (validateForm()) {
      console.log("FORM VALID");

      if (isEdit) {
        console.log("UPDATE PROGRAM");
      }

      else {
        console.log("CREATE PROGRAM");
      }
    }
  };

  return (

    <div
      className="
        bg-white
        rounded-2xl
        shadow-xl
        w-full
        max-w-4xl
        p-8
      "
    >

      {/* HEADER */}
      <div
        className="
          bg-gradient-to-r
          from-kuning-tua
          to-kuning-muda
          rounded-2xl
          p-6
          text-center
          mb-10
        "
      >

        <h1
          className="
            text-2xl
            font-bold
            text-bold-blue
            mb-1
          "
        >

          {isEdit
            ? `Edit ${title}`
            : `Buat ${title}`
          }

        </h1>

        <p className="text-black font-light">

          {isEdit
            ? `Perbarui informasi ${title}.`
            : `Isi informasi untuk membuat ${title}.`
          }
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* POSTER */}
        <div>

          <label
            className="
              text-left
              block
              text-bold-blue
              text-md
              font-bold
              mb-2
            "
          >
            Poster Program
          </label>

          <label
            className="
              flex
              items-center
              gap-2
              border
              border-light-blue
              rounded-lg
              px-4
              py-3
              text-bold-blue
              hover:bg-light-blue-2
              transition
              cursor-pointer
            "
          >

            <Upload size={18} />

            <span className="max-w-[180px] truncate">

              {formData.poster
                ? formData.poster.name
                : "Tambahkan Poster"
              }

            </span>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePosterChange}
            />

          </label>

          {errors.poster && (

            <p className="text-red-500 text-sm italic mt-1">
              {errors.poster}
            </p>
          )}

        </div>

        {/* NAMA KEGIATAN */}
        <FormField
          label="Nama Kegiatan"
          name="namaKegiatan"
          value={formData.namaKegiatan}
          onChange={handleChange}
          placeholder="Masukkan nama kegiatan"
          error={errors.namaKegiatan}
        />

        {/* DESKRIPSI */}
        <div>

          <label
            className="
              text-left
              block
              text-bold-blue
              text-md
              font-bold
              mb-2
            "
          >
            Deskripsi Program
          </label>

          <textarea
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            placeholder="Tuliskan deskripsi program"
            rows={5}

            className={`
              w-full
              rounded-lg
              border
              bg-light-blue-2
              px-4
              py-3
              text-md
              text-bold-blue
              placeholder:italic
              placeholder:text-light-blue
              focus:outline-none
              focus:ring-1

              ${
                errors.deskripsi
                  ? "border-red-500 focus:ring-red-500"
                  : "border-light-blue focus:ring-light-blue"
              }
            `}
          />

          {errors.deskripsi && (

            <p className="text-red-500 text-sm italic mt-1">
              {errors.deskripsi}
            </p>
          )}

        </div>

        {/* LINK */}
        <FormField
          label="Link Pendaftaran"
          name="linkPendaftaran"
          value={formData.linkPendaftaran}
          onChange={handleChange}
          placeholder="https://..."
          error={errors.linkPendaftaran}
        />

        {/* TANGGAL */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
          "
        >

          <FormField
            label="Deadline Pendaftaran"
            type="date"
            name="tenggat"
            value={formData.tenggat}
            onChange={handleChange}
            error={errors.tenggat}
          />

          <FormField
            label="Tanggal Mulai"
            type="date"
            name="mulai"
            value={formData.mulai}
            onChange={handleChange}
            error={errors.mulai}
          />

          <FormField
            label="Tanggal Selesai"
            type="date"
            name="berakhir"
            value={formData.berakhir}
            onChange={handleChange}
            error={errors.berakhir}
          />

        </div>

        {/* STATUS */}
        <FormField
          label="Status Kegiatan"
          name="statusKegiatan"
          value={formData.statusKegiatan}
          onChange={handleChange}
          placeholder="Contoh: Registrasi Dibuka"
          error={errors.statusKegiatan}
        />

        {/* BUTTON */}
        <div className="flex justify-end pt-5">

          {!hideSubmitButton && (

            <Button
              label={
                isEdit
                  ? "Simpan"
                  : "Publikasikan"
              }

              type="submit"
              className="w-[180px]"
            />
          )}

        </div>

      </form>

    </div>
  );
};

export default CreateProgramForm;