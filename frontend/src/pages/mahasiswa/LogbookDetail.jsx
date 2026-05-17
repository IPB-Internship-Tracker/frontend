import { useState } from "react";

import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import FormField from "../../components/forms/FormField";

import { X } from "lucide-react";

const LogbookDetail = () => {

  // POPUP
  const [openPopup, setOpenPopup] = useState(false);


  const [formData, setFormData] = useState({
  tanggal: "",
  waktuMulai: "",
  waktuSelesai: "",
  aktivitas: "",
  media: "",
  lokasi: "",
});


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const validateForm = () => {
    let newErrors = {};

    // REQUIRED
    Object.keys(formData).forEach((key) => {

      if (!formData[key]) {
        newErrors[key] = "Kolom ini wajib diisi.";
      }
    });

    // VALIDASI WAKTU
    if (
      formData.waktuMulai &&
      formData.waktuSelesai &&
      formData.waktuSelesai <= formData.waktuMulai
    ) {

      newErrors.waktuSelesai =
        "Waktu selesai tidak boleh lebih awal dari waktu mulai.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newLog = {
        no: data.length + 1,
        tanggal: formData.tanggal,
        waktuMulai: formData.waktuMulai,
        waktuSelesai: formData.waktuSelesai,
        aktivitas: formData.aktivitas,
        media: formData.media,
        lokasi: formData.lokasi,

      };

      console.log(newLog);
      setOpenPopup(false);
    }
  };


  const programDetail = {
    title: "UI/UX Designer Internship",
    company: "Shopee Indonesia",
    period: "Februari - April 2026",
  };


  const columns = [
    {
      header: "No",
      accessor: "no",
    },

    {
      header: "Tanggal & Waktu",

      render: (row) => (
        <div>
          <p>{row.tanggal}</p>
          <p className="text-sm text-gray-500">
            {row.waktuMulai} - {row.waktuSelesai}
          </p>
        </div>
      ),
    },

    {
      header: "Durasi",
      accessor: "durasi",
    },

    {
      header: "Aktivitas",
      accessor: "aktivitas",
    },

    {
      header: "Media",
      accessor: "media",
    },

    {
      header: "Lokasi",
      accessor: "lokasi",
    },
    {
      header: "Dokumentasi",
      accessor: "dokumentasi",

      render: () => (
        <button className="underline text-blue-600">
          Unduh
        </button>
      ),
    },
  ];

  const data = [
    {
      no: 1,
      tanggal: "29 Agustus 2025",
      waktuMulai: "08:00",
      waktuSelesai: "17:30",
      durasi: "8 Jam",
      aktivitas: "Membuat wireframe",
      media: "Offline",
      lokasi: "Di kantor",
    },

    {
      no: 2,
      tanggal: "29 Agustus 2025",
      waktuMulai: "08:00",
      waktuSelesai: "17:30",
      durasi: "8 Jam",
      aktivitas: "Membuat wireframe",
      media: "Offline",
      lokasi: "Di kantor",
    },

    {
      no: 3,
      tanggal: "29 Agustus 2025",
      waktuMulai: "08:00",
      waktuSelesai: "17:30",
      durasi: "8 Jam",
      aktivitas: "Membuat wireframe",
      media: "Offline",
      lokasi: "Di kantor",
    },

    {
      no: 4,
      tanggal: "29 Agustus 2025",
      waktuMulai: "08:00",
      waktuSelesai: "17:30",
      durasi: "8 Jam",
      aktivitas: "Membuat wireframe",
      media: "Offline",
      lokasi: "Di kantor",
    },
  ];

  const [errors, setErrors] = useState({});

  return (

    <div className="px-6 space-y-8">

      {/* HEADER */}
      <div className="flex items-start justify-between flex-wrap gap-2">
      
        <div>

          <h1 className="text-xl font-bold text-black mb-2">
            Log Aktivitas
          </h1>

          <h2 className="text-2xl font-bold text-bold-blue">
            {programDetail.title}
          </h2>

          <p className="text-md text-bold-blue">
            {programDetail.company}
          </p>

          <p className="mt-2 text-md">
            Periode:
            <span className="font-bold ml-1">
              {programDetail.period}
            </span>
          </p>

        </div>

        <Button
          label="+ Tambah Log"
          onClick={() => setOpenPopup(true)}
          className="w-[220px]"
        />

      </div>

      {/* TABLE */}
      <Table
        columns={columns}
        data={data}
      />

      {/* POPUP */}
      {openPopup && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/30
            backdrop-blur-sm
            px-4
          "
        >

          {/* MODAL */}
          <div
            className="
              relative
              bg-white
              rounded-2xl
              shadow-2xl
              w-full
              max-w-2xl
              px-8
              py-10
              animate-fadeInUp
            "
          >

            {/* CLOSE */}
            <button
              onClick={() => setOpenPopup(false)}
              className="
                absolute
                top-5
                right-5
                text-gray-500
                hover:text-black
              "
            >

              <X size={24} />

            </button>

            {/* TITLE */}
            <h1 className="text-xl text-center font-bold mb-2 text-black">
              Tambah Aktivitas
            </h1>

            <p className="text-md text-center text-bold-blue mb-8">
              Program:
              <span className="ml-2">
                {programDetail.title} - {programDetail.company}
              </span>
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* TANGGAL */}
                <FormField
                  label="Tanggal*"
                  type="date"
                  name="tanggal"
                  value={formData.tanggal}
                  onChange={handleChange}
                  error={errors.tanggal}
                />

                {/* AKTIVITAS */}
                <FormField
                  label="Aktivitas"
                  type="text"
                  name="aktivitas"
                  value={formData.aktivitas}
                  onChange={handleChange}
                  error={errors.aktivitas}
                  placeholder="Tuliskan deskripsi singkat aktivitas"
                />

                {/* WAKTU MULAI */}
                <FormField
                  label="Waktu Mulai*"
                  type="time"
                  name="waktuMulai"
                  value={formData.waktuMulai}
                  onChange={handleChange}
                  error={errors.waktuMulai}
                />

                {/* WAKTU SELESAI */}
                <FormField
                  label="Waktu Selesai*"
                  type="time"
                  name="waktuSelesai"
                  value={formData.waktuSelesai}
                  onChange={handleChange}
                  error={errors.waktuSelesai}
                />

                {/* MEDIA */}
                <FormField
                  label="Media"
                  type="select"
                  name="media"
                  value={formData.media}
                  onChange={handleChange}
                  error={errors.media}
                  placeholder=""
                  options={[
                    "Online",
                    "Offline",
                    "Hybrid",
                  ]}
                />

                {/* LOKASI */}
                <FormField
                  label="Lokasi"
                  type="text"
                  name="lokasi"
                  value={formData.lokasi}
                  onChange={handleChange}
                  error={errors.lokasi}
                  placeholder="Tuliskan lokasi aktivitas"
                />

                {/* DOKUMENTASI */}
                <div>

                  <label className="text-left block text-bold-blue text-md font-bold mb-2">
                    Dokumentasi
                  </label>

                  <input
                    type="file"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-light-blue
                      bg-light-blue-2
                      px-4
                      py-2
                      text-md
                      text-bold-blue
                      file:mr-4
                      file:px-4
                      file:rounded-md
                      file:bg-white
                      file:text-bold-blue
                      file:border-1
                      file:border-bold-blue
                      file:text-sm
                    "
                  />

                </div>

              </div>

              {/* BUTTON */}
              <div className="flex justify-center pt-4">

                <Button
                  label="Simpan"
                  type="submit"
                  className="w-[180px]"
                />

              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogbookDetail;