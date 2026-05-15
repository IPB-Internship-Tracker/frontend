import { useState } from "react";
import FormField from "../../components/forms/FormField";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  House,
  Building2,
  Globe,
} from "lucide-react";

const CreateMagangForm = () => {

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    namaPerusahaan: "",
    judulLamaran: "",
    posisi: "",
    deskripsi: "",
    bidang: "",
    kuota: "",
    tenggat: "",
    mulai: "",
    berakhir: "",
    kota: "",
    alamat: "",
    narahubung: "",
    informasi: "",
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // HARI INI
  const today = new Date();

  // H+1
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // FORMAT YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // MIN TENGGAT
  const minTenggat = formatDate(tomorrow);

  // MIN PROGRAM DIMULAI
  const minMulai =
    formData.tenggat || minTenggat;

  // MIN PROGRAM BERAKHIR
  const minBerakhir = (() => {
    // kalau belum pilih tanggal mulai
    if (!formData.mulai) {
      return minTenggat;
    }

    // H+1 dari tanggal mulai
    const nextDay = new Date(formData.mulai);
    nextDay.setDate(nextDay.getDate() + 1);
    return formatDate(nextDay);
  })();



  // VALIDASI FORM
  const validateForm = () => {
    let newErrors = {};
    // REQUIRED FIELD
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "Kolom ini wajib diisi.";
      }
    });

    // KUOTA
    if (formData.kuota && formData.kuota <= 0) {
      newErrors.kuota =
        "Kuota harus lebih dari 0.";
    }

    // TANGGAL TENGGAT
    if (formData.tenggat < minTenggat) {
      newErrors.tenggat =
        "Tenggat minimal H+1 dari hari ini.";
    }

    // PROGRAM DIMULAI
    if (formData.mulai < formData.tenggat) {
      newErrors.mulai =
        "Program dimulai tidak boleh sebelum tenggat.";
    }

    // PROGRAM BERAKHIR
    if (formData.berakhir <= formData.mulai) {
      newErrors.berakhir =
        "Program berakhir harus setelah tanggal dimulai.";
    }
    if (!formData.deskripsi.trim()) {

      newErrors.deskripsi =
        "Deskripsi program wajib diisi.";

    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};


const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    console.log("FORM VALID");
    navigate("../doc-requirement");
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
        p-8 ">

      {/* HEADER */}
      <div
        className="
          bg-gradient-to-r from-kuning-tua to-kuning-muda
          rounded-2xl
          p-6
          text-center
          mb-10 ">

        <h1 className="text-3xl font-bold text-bold-blue mb-2">
          Buat Program Magang
        </h1>

        <p className="text-black">
          Isi informasi yang dibutuhkan untuk membuat
          program magang Anda.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAMA PERUSAHAAN + LOGO */}
        <div className="flex gap-5 items-end">

          <div className="flex-1">

            <FormField
              label="Nama Perusahaan"
              name="namaPerusahaan"
              value={formData.namaPerusahaan}
              onChange={handleChange}
              placeholder="Tuliskan nama perusahaan Anda"
              error={errors.namaPerusahaan}
            />

          </div>

        {/* UPLOAD LOGO */}
        <label
          className="
              flex
              items-center
              gap-2
              border
              border-light-blue
              rounded-lg
              px-4
              py-2
              text-bold-blue
              hover:bg-light-blue-2
              transition
              cursor-pointer
          "
          >

          <Upload size={18} />
          Tambahkan Logo

          <input
              type="file"
              accept="image/*"
              className="hidden"
          />

        </label>

        </div>

        {/* JUDUL */}
        <FormField
          label="Judul Lamaran"
          name="judulLamaran"
          value={formData.judulLamaran}
          onChange={handleChange}
          placeholder="Contoh: UI/UX Designer Internship"
          error={errors.judulLamaran}
        />

        {/* POSISI */}
        <FormField
          label="Posisi yang Dibuka"
          name="posisi"
          value={formData.posisi}
          onChange={handleChange}
          placeholder="Contoh: UI/UX Designer"
          error={errors.posisi}
        />

        {/* DESKRIPSI */}
          <div>

            <label className="text-left block text-bold-blue text-md font-bold mb-2">
              Deskripsi Program
            </label>

            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              placeholder="Tuliskan deskripsi program dengan lengkap. Anda bisa manfaatkan kolom ini untuk mencantumkan informasi yang belum tertera pada kolom lainnya."
              rows={5}
              className={`
                w-full rounded-lg border
                bg-light-blue-2
                px-4 py-3
                text-md text-bold-blue
                placeholder:font-light
                placeholder:text-light-blue
                placeholder:italic
                focus:outline-none
                focus:ring-1

                ${
                  errors.deskripsi
                    ? "border-red-500 focus:ring-red-500"
                    : "border-light-blue focus:ring-light-blue"
                }
              `}
            />

            {/* ERROR MESSAGE */}
            {errors.deskripsi && (

              <p className="text-left text-red-500 text-sm italic mt-1">
                {errors.deskripsi}
              </p>
            )}

          </div>

        {/* BIDANG */}
        <FormField
          label="Bidang"
          type="select"
          name="bidang"
          value={formData.bidang}
          onChange={handleChange}
          placeholder="Pilih salah satu bidang"
          error={errors.bidang}
          options={[
            "Information Technology",
            "Data & Analytics",
            "Business & Management",
            "Marketing & Communication",
            "Finance & Accounting",
            "Human Resources (HR)",
            "Operations & Logistics",
            "Administration",
            "Design & Creative",
            "Engineering (Non-IT)",
            "Research & Development",
            "Sales & Business Development",
            "Healthcare / Life Sciences",
            "Lainnya",
          ]}
        />

        {/* KUOTA */}
        <FormField
          label="Kuota"
          type="number"
          name="kuota"
          value={formData.kuota}
          onChange={handleChange}
          placeholder="Tuliskan dalam bentuk angka saja"
          error={errors.kuota}
        />

        {/* PENEMPATAN */}
        <div>

          <label className="text-left block text-bold-blue text-md font-bold mb-3">
            Penempatan
          </label>

          <div className="flex gap-3 flex-wrap">

            <button
              type="button"
              className="
                flex
                items-center
                gap-2
                border
                border-light-blue
                rounded-lg
                px-4
                py-2
                hover:bg-light-blue-2 ">

              <House size={18} />
              WFH

            </button>

            <button
              type="button"
              className="
                flex
                items-center
                gap-2
                border
                border-light-blue
                rounded-lg
                px-4
                py-2
                hover:bg-light-blue-2 ">

              <Globe size={18} />
              Hybrid

            </button>

            <button
              type="button"
              className="
                flex
                items-center
                gap-2
                border
                border-light-blue
                rounded-lg
                px-4
                py-2
                hover:bg-light-blue-2 ">


              <Building2 size={18} />
              WFO
            </button>
          </div>
        </div>

        {/* TANGGAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <FormField
            label="Tenggat Pendaftaran"
            type="date"
            name="tenggat"
            value={formData.tenggat}
            onChange={handleChange}
            min={minTenggat}
            error={errors.tenggat}
          />

          <FormField
            label="Program Dimulai"
            type="date"
            name="mulai"
            value={formData.mulai}
            onChange={handleChange}
            min={minMulai}
            error={errors.mulai}
          />

          <FormField
            label="Program Berakhir"
            type="date"
            name="berakhir"
            value={formData.berakhir}
            onChange={handleChange}
            min={minBerakhir}
            error={errors.berakhir}
          />

        </div>

        {/* LOKASI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <FormField
            label="Kota Lokasi"
            name="kota"
            value={formData.kota}
            onChange={handleChange}
            placeholder="Contoh: Jakarta Selatan"
            error={errors.kota}
          />

          <FormField
            label="Alamat Lengkap"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            placeholder="Tuliskan alamat lengkap perusahaan"
            error={errors.alamat}
          />

        </div>

        {/* NARAHUBUNG */}
        <FormField
          label="Narahubung"
          name="narahubung"
          value={formData.narahubung}
          onChange={handleChange}
          placeholder="Contoh: +628123456789"
          error={errors.narahubung}
        />

        {/* INFORMASI */}
        <FormField
          label="Informasi Lebih Lanjut"
          name="informasi"
          value={formData.informasi}
          onChange={handleChange}
          placeholder="Contoh: instagram, youtube, atau link pendaftaran online"
          error={errors.informasi}
        />

        {/* BUTTON */}
        <div className="flex justify-end pt-5">

          <Button
            label="Selanjutnya"
            type="submit"
            className="w-[180px]"
          />

        </div>

      </form>

    </div>
  );
};

export default CreateMagangForm;