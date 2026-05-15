import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";

const LogbookDetail = () => {

  const columns = [
    {
      header: "No",
      accessor: "no",
    },

    {
      header: "Tanggal & Waktu",
      accessor: "tanggal",
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
      tanggal: "29 Agustus 2025\n08:00 - 17:30",
      durasi: "8 Jam",
      aktivitas: "Membuat wireframe",
      media: "Offline, Di kantor",
    },

    {
      no: 2,
      tanggal: "29 Agustus 2025\n08:00 - 17:30",
      durasi: "8 Jam",
      aktivitas: "Membuat wireframe",
      media: "Offline, Di kantor",
    },

    {
      no: 3,
      tanggal: "29 Agustus 2025\n08:00 - 17:30",
      durasi: "8 Jam",
      aktivitas: "Membuat wireframe",
      media: "Offline, Di kantor",
    },

    {
      no: 4,
      tanggal: "29 Agustus 2025\n08:00 - 17:30",
      durasi: "8 Jam",
      aktivitas: "Membuat wireframe",
      media: "Offline, Di kantor",
    },
  ];

  return (

    <div className="px-6 space-y-8">
      {/* HEADER */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-xl font-bold text-black mb-2">
            Logbook
          </h1>

          <h2 className="text-2xl font-bold text-bold-blue">
            UI/UX Designer Internship
          </h2>

          <p className="text-xl text-bold-blue">
            Shopee Indonesia
          </p>

          <p className="mt-4 text-md">
            Periode: 
            <span className="font-bold">
              Februari - April 2026
            </span>
          </p>

        </div>

        <Button
          label="+ Tambah Log"
          className="w-[220px]"
        />
      </div>

      {/* TABLE */}
      <Table
        columns={columns}
        data={data}
      />

      

    </div>
  );
};

export default LogbookDetail;